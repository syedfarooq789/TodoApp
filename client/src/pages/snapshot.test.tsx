import { render } from "@testing-library/react";
import Enzyme from "enzyme";
import Todos from "./Todos";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<Todos/>", () => {
  it("renders with Props", async () => {
    const wrapper = render(<Todos />);
    expect(wrapper).toMatchSnapshot();
  });
});
