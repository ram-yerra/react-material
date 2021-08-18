import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";

const mockGeolocation = {
  watchPosition: jest.fn().mockImplementation(cb => {
    return cb({
      coords: {
        latitude: 30.125,
        longitude: 36.356
      }
    });
  }),
  clearWatch: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

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

describe("Build your own hook", () => {
  it("The useGeoLocation() custom hook works as expected!", async () => {
    await act(async () => render(<App />, div));
    const unitDisplay = document.querySelectorAll(".coord-display > .value");

    expect(unitDisplay[0].innerHTML).toEqual("30.125");
    expect(unitDisplay[1].innerHTML).toEqual("36.356");
  });
});
