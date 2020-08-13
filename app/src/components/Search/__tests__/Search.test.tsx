import React from "react";
import renderer from "react-test-renderer";

import * as AppContext from "../../../context/AppContext";
import { Search } from "../Search";

jest.mock("../../../context/AppContext");
const mockAppContext = AppContext as jest.Mocked<typeof AppContext>;
const mockSetLocation = jest.fn();
mockAppContext.useAppContext.mockReturnValue({
  setLocation: mockSetLocation,
});

describe("Search", () => {
  it("matches snapshot", () => {
    const component = renderer.create(<Search />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  // TODO: Add further tests for searching
});
