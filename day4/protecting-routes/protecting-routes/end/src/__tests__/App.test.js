import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

import App from "../App";

let div = null;
beforeEach(() => {
  div = document.createElement("div");
  document.body.appendChild(div);
});

afterEach(() => {
  unmountComponentAtNode(div);
  div.remove();
  div = null;
});

describe("Protected Routes", () => {
  it("Route protection was implemented & is working as expected!", async () => {
    await act(async () => render(<App />, div));
    const secretLink = document.querySelector("#secret-link");
    expect(div.innerHTML).toMatchSnapshot();
    await act(async () => {
      secretLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(div.innerHTML).toMatchSnapshot();
    const passcodeInput = document.querySelector("#login-passcode");
    passcodeInput.value = "pizza";
    await act(async () => {
      await passcodeInput.dispatchEvent(
        new KeyboardEvent("keyup", { key: "Enter", keyCode: 13, bubbles: true })
      );
    });
    expect(div.innerHTML).toMatchSnapshot();
  });
});
