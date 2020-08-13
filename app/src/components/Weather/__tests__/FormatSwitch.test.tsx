import React from "react";
import renderer from "react-test-renderer";
import { Icon } from "../Icon";
import { FormatSwitch } from "../FormatSwitch";

import * as AppContext from "../../../context/AppContext";

jest.mock("../../../context/AppContext");
const mockAppContext = AppContext as jest.Mocked<typeof AppContext>;
const mockSetFormatType = jest.fn();
mockAppContext.useAppContext.mockReturnValue({
  setFormatType: mockSetFormatType,
});

describe("FormatSwitch", () => {
  it("matches snapshot for C", () => {
    const component = renderer.create(<FormatSwitch formatType="C" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("matches snapshot for F", () => {
    const component = renderer.create(<FormatSwitch formatType="F" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("switches format type", () => {
    const instance = renderer.create(<FormatSwitch formatType="F" />).root;
    renderer.act(() => {
      instance.findByProps({ id: "f" }).props.onClick();
    });
    expect(mockSetFormatType).toHaveBeenCalledWith("F");
  });
});
