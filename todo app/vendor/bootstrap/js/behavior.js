

const btn = document.getElementById("submit");
const btnmore = document.getElementById("more");

function submitsunction(e) {
    const task = document.getElementById('task').value;
    console.log(task);
    const details = document.getElementById('details').value;
    console.log(details);
    const elementtoadd= document.getElementById('content');

    let newtask = document.createElement("div");

    newtask.className="col-lg-3 col-md-6 mb-4";
    newtask.innerHTML= "        <div class=\"card h-100\">\n" +
        "         \n" +
        "          <div class=\"card-body\">\n" +
        "            <h4 class=\"card-title\">"+ task+ "</h4>\n" +
        "            <p class=\"card-text\">"+details+"</p>\n" +
        "          </div>\n" +
        "          <div class=\"card-footer\">\n" +
        "            <a href=\"#\" id=\"more\"  class=\"btn btn-primary\">More</a>\n" +
        "          </div>\n" +
        "        </div>\n" +
        "      </div>;"


    console.log(newtask);
    elementtoadd.appendChild(newtask);

    e.preventDefault();


}


btn.addEventListener("click",submitsunction);
btnmore.addEventListener("click",morefunction);

