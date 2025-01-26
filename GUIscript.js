function additem(a)
{
    const list = document.getElementById("input");
    const listcontainer = document.querySelector(".list") 
    const inputvalue = list.value.trim();
    // add item
    	const div = document.createElement("div")
        div.classList.add("item-list")
    
    // todo test
        const todotext = document.createElement("span")
        todotext.textContent = inputvalue;
        todotext.classList.add("todotext")


    // button /
        const button = document.createElement("button")
        button.textContent="delete"
        button.classList.add("button")


    button.addEventListener("click", ()=>{
        listcontainer.removeChild(div);
    });


    div.appendChild(todotext);
    div.appendChild(button);

    listcontainer.appendChild(div);

    list.value="";
}
