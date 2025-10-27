// tests/todoview.test.jsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoView from "../src/Todos/TodoView.jsx";
// tests/setupTests.js
import "@testing-library/jest-dom";
import axios from "axios";
import { waitFor } from "@testing-library/react";
import apiClient from '../src/util/apiClient'

// Mock axios，保留 create 方法
vi.mock('../src/util/apiClient', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: [] })),
    post: vi.fn((url, todo) => Promise.resolve({ data: { id: 1, ...todo } })),
  }
}))

describe("TodoView", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // 清理每个测试的 mock 调用
  });

  it("renders the form", () => {
    render(<TodoView />);
    // const heading = screen.getByRole('heading', { name: /todos/i })
    // expect(heading).toBeInTheDocument()

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeInTheDocument();
  });

  it("creates a new todo", async () => {
    render(<TodoView />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /submit/i });

    // 输入 todo
    fireEvent.change(input, { target: { value: "Learn about containers" } });
    expect(input.value).toBe("Learn about containers");

    // 提交表单
    fireEvent.click(button);

    // 等待 axios.post 调用
    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalledWith("/todos", {
        text: "Learn about containers",
      });
    });
  });
});
