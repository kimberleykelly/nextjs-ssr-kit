import isEmpty from "lodash.isempty";
import * as constants from "~constants";

/**
 * @function createUser - attempts to create a new user in DB.
 * @param {object} props - contain user props
 * @returns {object}
 */
export const createUser = ({ props }) => ({
  type: constants.USERS_CREATE,
  props,
});

/**
 * @function deleteUser - attempts to delete a user from DB.
 * @param {string} id
 * @returns {object}
 */
export const deleteUser = id => ({
  type: constants.USERS_DELETE,
  id,
});

/**
 * @function fetchUsers - attempts to fetchUsers users from DB.
 * @returns {object}
 */
export const fetchUsers = () => ({
  type: constants.USERS_FETCH,
});

/**
 * @function resetUsers - resets redux users state.
 * @returns {object}
 */
export const resetUsers = () => ({
  type: constants.USERS_RESET,
});

/**
 * @function seedDB - attempts to seed the DB with data.
 * @returns {object}
 */
export const seedDB = () => ({
  type: constants.USERS_SEED,
});

/**
 * @function setUsers - sets user data to state.
 * @param {array} data - contains user data: [{ address: { street, suite, city, state, zipCode }, _id, email, firstName, lastName, userName, backgroundInfo }]
 * @returns {object}
 */
export const setUsers = data => ({
  type: constants.USERS_SET_DATA,
  payload: !isEmpty(data) ? data : [],
});

/**
 * @function updateUser - attempts to update a current user in DB.
 * @param {object} props - props contain user data.
 * @param {String} id - user id
 * @returns {object}
 */
export const updateUser = ({ props, id }) => ({
  type: constants.USERS_UPDATE,
  props,
  id,
});
