// My Object

let earPods = [
  {
    brand: "Apple",
    objectModel: "Airpods Pro",
    generation: 2,
    noiseCancelling: true,
    ownerFirstName: "Marius",
    ownerLastName: "Rundereim",
  },
];

// Insert brand

let objectBrand = document.querySelector(".brandName");

if (earPods[0].brand === "Apple") {
  objectBrand.innerHTML = "Apple";
}

// Insert model

let earPodsModel = document.querySelector(".objectModel");

for (let i = 0; i < earPods.length; i++) {
  earPodsModel.innerHTML = earPods[i].objectModel;
}

// Insert details

let listDetails = document.querySelector("ul");

for (let i = 0; i < earPods.length; i++) {
  // console.log("This is:", earPods[i].noiseCancelling);
  listDetails.innerHTML +=
    "<li>" + earPods[i].generation + ".generation" + "</li>";
  if (earPods[i].noiseCancelling === true) {
    listDetails.innerHTML += "<li>" + "Noisecancelling" + "</li>";
  } else {
    listDetails.innerHTML += "<li>" + "Not noisecancelling" + "</li>";
  }
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

for (let i = 0; i < earPods.length; i++) {
  function thisFunction() {
    findObject.innerHTML =
      "<p>" +
      "Airpods is inside on " +
      earPods[i].ownerFirstName +
      " pockets" +
      "</p>";
  }

  findObjectButton.onclick = thisFunction;
}
