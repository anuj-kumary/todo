import { cleanup, fireEvent, render } from "@testing-library/react";
import { TodoList } from "../components/TodoList";


const label = "do something";
//render test cases
test("Todo List Render" , () => {
    const todos = render(<TodoList />)

    const inputText = todos.getByTestId("input");
    expect(inputText.getAttribute('value')).toBe("")

    const todoList = todos.queryAllByTestId('todoList')

    expect(todoList.length).toBe(0);
})

//Create new Todo test cases
test("Create new todo", () => {
    const todos = render(<TodoList />)

    const inputText = todos.getByTestId("input");
    const addTodoBtn = todos.getByTestId("addTodo");

    fireEvent.change(inputText, { target: { value: label } })
    fireEvent.click(addTodoBtn)

    const todoList = todos.queryAllByTestId('todoList')
    const todo = todos.getByTestId('todoList')
    const todoNameElement = todo.firstChild

    expect(todoNameElement.textContent).toBe(label)
})

//Delete a todo

test("Delete Todo" ,() => {
    const todos = render(<TodoList />)

    const inputText = todos.getByTestId("input");
    const addTodoBtn = todos.getByTestId("addTodo");

    fireEvent.change(inputText, {target:{value:label}})
    fireEvent.click(addTodoBtn)

    const todoDeleteButton = todos.getByTestId("deleteButton");
    fireEvent.click(todoDeleteButton);

})

test("Edit Todo" , () => {
    const todos = render(<TodoList />)

    const inputText = todos.getByTestId("input");
    const addTodoBtn = todos.getByTestId("addTodo");

    fireEvent.change(inputText, {target:{value:label}})
    fireEvent.click(addTodoBtn)

    const todoEditButton = todos.getByTestId("editHandler");
    fireEvent.click(todoEditButton);

    fireEvent.change(inputText, {target:{value:'Learning Test Cases'}})

    const todoList = todos.queryAllByTestId('todoList')
    const todo = todos.getByTestId('todoList')
    const todoNameElement = todo.firstChild

    expect(todoNameElement.textContent).toEqual(label)
})