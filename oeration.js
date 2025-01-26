let todo = []
let a =10
function addtodo(a) {
    console.clear();
    todo.push(a);
    display();
}

function removetodo() {
    console.clear();
    todo.pop();
    display();

}

function display()
{
    console.clear()
    for (i of todo) {
        console.log(i);
    }
}

function runtodo() {
    let enter = confirm("run todo or not");
    if(enter)
    {
        while (true) 
        {
            alert("press ctrl+shift+j")
            let choice = prompt("press 0 for clear todo\nenter 1 for push in todo\nenter 2 for remove last element from todo\n\nenter your choice");
            switch (choice) {
                case "0":
                    console.clear()
                    todo = []
                    break;
                case "1":   
                    let task = prompt("enter item");
                    addtodo(task);
                    break;
                case "2":
                    let remove = todo.slice(-1)
                    let r = confirm("removed item is" + remove);
                    if (r) {
                        removetodo();
                    }
                    else {
                        alert("good choice");
                    }
                    break;
                case "3":
                    display();
                    break;
            }
        }
    }
    else{
        div = document.getElementById("main").innerHTML="<h1>refresh to start todo</h1>"
    }
}

runtodo();