let image = Array.from(document.querySelectorAll(".slider-container img"));
let ullist = document.createElement("ul");
let slidenumber = document.getElementById("slide-number");
ullist.setAttribute("id", "pagination-ul");
var prevbutton = document.getElementById("prev");
var nextbutton = document.getElementById("next");
//console.table(image);
prevbutton.onclick = prevslide;
nextbutton.onclick = nextslide;
let currentslide = 1;
let slidelength = image.length;
for (var i = 1; i <= image.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.appendChild(document.createTextNode(i));
    ullist.appendChild(li);
}
document.getElementById("indicators").appendChild(ullist);
let liarray = Array.from(document.querySelectorAll("ul li"));
for (var i = 0; i < liarray.length; i++) {
    liarray[i].onclick = function () {
        currentslide = parseInt(this.getAttribute("data-index"));
        thechecker();
    }
}
let paginationul = document.getElementById("pagination-ul");
function thechecker() {
    slidenumber.textContent = " slide# " + (currentslide) + " of " + (slidelength);
    removeallacitve();
    image[currentslide - 1].classList.add("active");
    paginationul.children[currentslide - 1].classList.add('active');
    if (currentslide == 1) {
        prevbutton.classList.add("disabled");
    } else {
        prevbutton.classList.remove("disabled");
    }
    if (currentslide == slidelength) {
        nextbutton.classList.add("disabled");
    } else {
        nextbutton.classList.remove("disabled");
    }
}
function removeallacitve() {
    image.forEach(function (img) {
        img.classList.remove("active");
    });
    liarray.forEach(function (li) {
        li.classList.remove("active");
    });
};
function nextslide() {
    if (nextbutton.classList.contains("disabled")) {
        return false;
    }
    else {
        currentslide++;
        thechecker()
    }
}
function prevslide() {
    if (prevbutton.classList.contains("disabled")) {
        return false;
    }
    else {
        currentslide--;
        thechecker()
    }
}