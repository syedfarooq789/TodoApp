import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Enzyme from "enzyme";
import Snackbar from "./MuiSnackbar";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<Snackbar/>", () => {
  it("snackbar", async () => {
    const handleClose = jest.fn();
    const openSnackBar = true;
    const { getByTestId } = render(
      <Snackbar openSnackBar={openSnackBar} handleClose={handleClose} />
    );
    const snackbarClose = getByTestId("snackbar-close");
    fireEvent.click(snackbarClose);
    expect(handleClose).toBeCalledTimes(1);
  });
});
