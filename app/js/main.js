var task = document.querySelector(".inputtask").value;
var task_area = document.querySelector(".task_area");

// task.setAttribute("placeholder","test1");

var add_task = document.querySelector(".add_task");
add_task.addEventListener("click",Add_task_func);

function Add_task_func()
{
    var task = document.querySelector(".inputtask").value;
    console.log(task);
    var task_box = document.createElement("div");
    var task_box_title = document.createElement("div");


    task_box_title.innerHTML=task;

    task_box.appendChild(task_box_title);

    task_area.appendChild(task_box);
    


}