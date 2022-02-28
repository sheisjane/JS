// 最简单的todo list版本
let todos = ["learn code", "cook dinner", "read books"];

while (true) {
  let command = prompt("Please input a command");
  console.log(command);

  if (command === "exit") {
    break;
  } else if (command === "list") {
    console.log("======================");
    // for  (let todo of todos) {
    //     console.log(todo);
    // }
    for (let i = 1; i <= todos.length; i++) {
      console.log("${i}.${todos[i-1]}");
    }
    console.log("========================");
  } else if (command === "new") {
    let todo = prompt("Add todo text");
    todo.push(todo);
    console.log("Add successed");
//   } else if (command === "delete") {
//     let id = parseInt(prompt("Tell me which one you want to delete"));
//     todos.splice(id - 1, 1);
//     console.log("delete successed");
//   } else if (command === "update") {
//     let id = parseInt(prompt("Add todo text then update the list"));
//     todos.push(id);
//     console.log("=======================");
//     for (let i = 1; i <= todos.length; i++) {
//       console.log("${i}.${todos[i-1]}");
//     }
//     console.log("=======================");
//   }
}
