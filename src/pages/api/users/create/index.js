import isEmpty from "lodash.isempty";
import withMiddleware from "~middlewares";
import { User } from "~models";

const createUser = async (req, res) => {
  try {
    const {
      email,
      firstName,
      lastName,
      userName,
      backgroundInfo,
      address,
    } = req.body;

    if (
      !email ||
      !firstName ||
      !lastName ||
      !userName ||
      !backgroundInfo ||
      isEmpty(address)
    )
      throw String("Missing user card creation parameters.");

    const userNameTaken = await User.findOne({ userName });
    if (userNameTaken) throw String("That username is already in use!");

    await User.create(req.body);
    res.status(201).json({ message: `Successfully created ${userName}.` });
  } catch (err) {
    res.status(400).json({ err: err.toString() });
  }
};

export default withMiddleware(createUser);
