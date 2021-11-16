import "@testing-library/jest-dom/extend-expect"
import Enzyme from "enzyme";
import Todos from "./Todos";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { render, RenderResult } from "@testing-library/react";
Enzyme.configure({ adapter: new Adapter() });
let documentBody: RenderResult;

describe("<Todos/>", () => {
    beforeEach(() => {
        documentBody = render(<Todos />);
    });

    it("todos", async () => {
        expect(documentBody.getByText("Todos")).toBeInTheDocument();
        expect(documentBody.getByText("Status")).toBeInTheDocument();
    });
});