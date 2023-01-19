// My Object

let earPods = {
  brand: "Apple",
  objectModel: "Airpods Pro",
  generation: 2,
  noiseCancelling: true,
  ownerFirstName: "Marius",
  ownerLastName: "Rundereim",
};

// Insert brand

let objectBrand = document.querySelector(".brandName");

if (earPods.brand === "Apple") {
  objectBrand.innerHTML = "Apple";
}

// Insert model

let earPodsModel = document.querySelector(".objectModel");
earPodsModel.innerHTML = earPods.objectModel;

// Insert details

let listDetails = document.querySelector("ul");

if (earPods.generation < 3) {
  listDetails.innerHTML +=
    "<li>" + earPods.generation + ".generation" + "</li>";
}

if (earPods.noiseCancelling === true) {
  listDetails.innerHTML += "<li>" + "Noisecancelling" + "</li>";
} else {
  listDetails.innerHTML += "<li>" + "Not noisecancelling" + "</li>";
}

// Change image

let firstImageButton = document.querySelector(".imageOne");
let secondImageButton = document.querySelector(".imageTwo");

function changeImage(fileName) {
  let img = document.querySelector("#objectimg");
  img.setAttribute("src", fileName);
}

firstImageButton.onclick = function () {
  changeImage("/images/airpods-1.png");
};

secondImageButton.onclick = function () {
  changeImage("/images/airpods-2.png");
};

// Find object

let findObject = document.querySelector(".findresult");
let findObjectButton = document.querySelector(".findButton");

function thisFunction() {
  findObject.innerHTML =
    "<p>" +
    "Airpods is inside on " +
    earPods.ownerFirstName +
    " pockets" +
    "</p>";
}

findObjectButton.onclick = thisFunction;
