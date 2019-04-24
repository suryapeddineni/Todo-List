var Todos = ['Buy some cloths']

var input = prompt("Hey What would you like to do");

while( input!== "quit")
{
  if (input === "list"){
  console.log (Todos);

    } else if(input === "new"){
  var newTodo = prompt("Enter Your Todos");
  Todos.push(newTodo);
    }  
   var input = prompt("Hey What would you like to do");
}
alert("Thats OK..! Your quiting APP");