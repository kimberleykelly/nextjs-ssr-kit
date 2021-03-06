import Flex from "../index";

describe("Flex", () => {
  let wrapper;
  let component;
  beforeEach(() => {
    wrapper = mount(<Flex data-testid="flex" />);
    component = wrapper.find("[data-testid=flex]");
  });

  it("renders without errors", () => {
    expect(component).toBeInTheDocument();
    expect(component).toHaveStyleRule("flex-direction", "row");
    expect(component).toHaveStyleRule("flex-wrap", "nowrap");
    expect(component).toHaveStyleRule("justify-content", "start");
  });

  it("sets 'flex-direction' to a 'column' when passed a 'direction' prop", () => {
    wrapper.setProps({ direction: "column" });
    expect(component).toHaveStyleRule("flex-direction", "column");
  });

  it("sets 'flex-wrap' as a 'wrap' when passed a 'wrap' prop", () => {
    wrapper.setProps({ wrap: "true" });
    expect(component).toHaveStyleRule("flex-wrap", "wrap");
  });

  it("sets 'justify-content' as a 'center' when passed a 'justify' prop", () => {
    wrapper.setProps({ justify: "center" });
    expect(component).toHaveStyleRule("justify-content", "center");
  });
});
