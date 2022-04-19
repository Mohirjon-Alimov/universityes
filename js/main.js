var elBall = document.querySelector("#score");
var elBtn = document.querySelector(".btn");
var elOut = document.querySelector(".out");
var elSelection = document.querySelector("#univer");
var message = "";

var universityes = ["tatu", "milliy", "tdtu", "sampi"];


for (var university of universityes) {
  var newOpt = document.createElement("option");
  newOpt.value = university;
  newOpt.textContent = university;
  elSelection.append(newOpt);
}


elBtn.addEventListener("click", function(e) {
  e.preventDefault();

  var ball = elBall.value.trim();
  var ballNumber = Number(ball);

  if (ball == "" || ball.length >= 4){
    elBall.style.borderColor = "red";
    return
  } else if (isNaN(ballNumber)){
    elBall.style.borderColor = "red";
    return
  }


  elBall.style.borderColor = "black";

  if (elBall.value >=120) {
    message = `grant asosida oqishga qabul qilindingiz`;
  } else if (elBall.value >=65) {
    message = `kontrakt shartnomasi asosida oqishga qabul qilindingiz`;
  } else if (elBall.value >=50) {
    message = `superkontrakt shartnomasi asosida oqishga qabul qilindingiz`;
  } else if (elBall.value < 50) {
    message = `qabul qilinmadingiz`;
  } else if (elBall.value >=250) {
    message = `noto'g'ri malumot kiriydingiz`;
  }

  
  var newP = document.createElement("p");
  elOut.appendChild(newP);
  newP.textContent = `siz ${elSelection.value}ga ${message}`;
  
})

