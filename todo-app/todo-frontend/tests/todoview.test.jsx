/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoView from "../src/Todos/TodoView";

test("a new todo can be created", async () => {
  render(<TodoView />);

  const input = screen.getByRole("textbox");
  await userEvent.type(input, "Learn about containers");

  const button = screen.getByRole("button", { name: /submit/i });
  await userEvent.click(button);

  // 使用 getAllByText
  const todoItems = screen.getAllByText("Learn about containers");
  expect(todoItems.length).toBeGreaterThan(0);
});
