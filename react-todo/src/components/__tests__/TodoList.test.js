import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
    test("renders TodoList with demo todos", () => {
        render(<TodoList />);
        expect(screen.getByText(/Learn React/)).toBeInTheDocument();
        expect(screen.getByText(/Build a Todo App/)).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText("Add a new todo");
        const addButton = screen.getByText("Add");

        fireEvent.change(input, { target: { value: "New Todo" } });
        fireEvent.click(addButton);

        expect(screen.getByText("New Todo")).toBeInTheDocument();
    });

    test("toggles todo completion", () => {
        render(<TodoList />);
        const todoItem = screen.getByText("Learn React");

        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle("text-decoration: line-through");

        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle("text-decoration: none");
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const deleteButton = screen.getByText("Delete");

        fireEvent.click(deleteButton);

        expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });
});
