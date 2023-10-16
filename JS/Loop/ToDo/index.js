// Objective: Create a ToDo list using a while loop

const toDoList = [];

let input = prompt("What would you like to do?");
const todos = ["Learn to Code"];
while (input !== "quit" && input !== "q") {
  if (input === "new" || input === "n") {
    const newToDo = prompt("Enter new todo");
    todos.push(newToDo);
    console.log(`${newToDo} added to the list`);
  } else if (input === "list" || input === "l") {
    console.log("**********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("**********");
  } else if (input === "delete" || input === "d") {
    const index = parseInt(prompt("Enter index to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${deleted}`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");
