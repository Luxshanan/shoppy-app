import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ProductCategories from "./ProductCategories";
import User from "./user";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const productCategories =[{
    id: 1,
    categoryName: "Veg"
  },{
    id: 2,
    categoryName: "Meat"
  },{
    id: 3,
    categoryName: "Seafood"
  }] ;

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(productCategories)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<ProductCategories/>, container);
  });

  expect(container.  ("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});