

const btn = document.getElementById("submit");
const btnremove = document.querySelector(".row");
const filtering = document.getElementById("filter");
const removeall = document.getElementById("removeall");

//Adding the local storage functionality
localStorage.clear();
function submitsunction(e) {
    const task = document.getElementById('task').value;
    const details = document.getElementById('details').value;

    const elementtoadd= document.getElementById('content');

    let newtask = document.createElement("div");

    newtask.className="col-lg-3 col-md-6 mb-4";
    newtask.innerHTML= "<div class=\"card h-100\">\n" +
        "         \n" +
        "          <div class=\"card-body\">\n" +
        "            <h4 class=\"card-title\">"+ task+ "</h4>\n" +
        "            <p class=\"card-text\">"+details+"</p>\n" +
        "          </div>\n" +
        "          <div class=\"card-footer\">\n" +
        "            <a href=\"#\" id=\"remove\"  class=\"btn btn-primary\">Remove</a>\n" +

        "          </div>\n" +
        "        </div>\n" +
        "      </div>";

    elementtoadd.appendChild(newtask);

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(document.getElementById('task').value);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault();
}
function removefunction(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    if(e.target.parentElement.className=="card-footer"){

          e.target.parentElement.parentElement.parentElement.remove();


              tasks.forEach(function(task,index){
                  if(task==e.target.parentElement.parentElement.querySelector(".card-title").textContent){
                      tasks.splice(index,1);

                  }
              })
          }
          localStorage.setItem("tasks",JSON.stringify(tasks));
          e.preventDefault();

    }

function filteringfunction(e){
    let textvalue = e.target.value.toLowerCase();

    document.querySelectorAll(".card-title").forEach(function(title){
        let item = title.textContent.toLowerCase();

        if(item.indexOf(textvalue)!=-1){

            title.parentElement.parentElement.parentElement.style.display='block';
        }else{
            title.parentElement.parentElement.parentElement.style.display='none';
        }

    })
   e.preventDefault();
}


btn.addEventListener("click",submitsunction);
btnremove.addEventListener("click",removefunction);
filtering.addEventListener('keyup',filteringfunction);
removeall.addEventListener('click', e => {
    while(document.querySelector(".row").firstChild){
        document.querySelector(".row").firstChild.remove();
    }

   e.preventDefault();

});

