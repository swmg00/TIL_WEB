const button = document.querySelector("#추가버튼");
const input = document.querySelector("#입력창");
const todos = document.querySelector("#할일들");
const reset = document.querySelector("#초기화");
const newTodos = []; // 배열

button.addEventListener("click", () => {
  //input에 있는 입력 값 가져오기
  const value = input.value;
  //입력값을 바탕으로 새로운 할일을 만들기
  // <p />
  const newTodo = document.createElement("p"); //<p>를 만들기만 하고 내용은 채우지 않음!
  newTodos.push(newTodo);
  newTodo.innerText = value;

  //마지막 할일 밑에 붙이기
  todos.appendChild(newTodo);
  input.value = "";

  newTodo.addEventListener("click", () => {
    //조건문
    //1. done이없으면 done을 추가
    //2. 그게 아니라면 done을 없앰
    if (newTodo.className !== "done") {
      newTodo.className = "done";
    } else {
      newTodo.className = "";
    }
  });
});

reset.addEventListener("click", () => {
  newTodos.forEach((newTodo) => {
    todos.removeChild(newTodo);
  });
});
