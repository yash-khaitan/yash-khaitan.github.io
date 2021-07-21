/* Give a option to user to choose a mark. Either a cross or a 
circle.Give the other one to computer. display Lets Play */

let markArr = [];
let checkedBox = [];

function Choose(Mark) {
  document.getElementById("choice").innerHTML = "Let's Play";
  document.getElementById("choice").style.border = "none";

  if (Mark.id === "cross") {
    markArr.userMark = "cross.png";
    markArr.computerMark = "circle.png";
  } else if (Mark.id === "circle") {
    markArr.userMark = "circle.png";
    markArr.computerMark = "cross.png";
  }
}

/*
*insert a circle/cross on the div user click. Also Insert a circle/cross on computer's turn.

*Here we made a id of ids of div for computer to choose from randomly. 
*Also we will push out the ids of the divs user had choosen and the ids of the div computer had choosen from   BoxIdArr.
*It will prevent computer from choosing the div already being selected.
*/

BoxIdArr = [
  "box1",
  "box2",
  "box3",
  "box4",
  "box5",
  "box6",
  "box7",
  "box8",
  "box9",
];

function Hit(that) {
  if (markArr.userMark == null) {
    alert("Please select either a Cross or a Circle");
  } else {
    //Inserting a circle/cross on the div User had clicked.
    UserTurn(that);

    // pushing out the ids of the divs User had choosen and diabling the same div.so that it can't be clicked/choosen again.
    PushOutUserDivs();

    //Randomly choose a div for computer from BoxIdArr.
    RandomComputerDiv();

    // pushing out the ids of the divs Computer had choosen. So that it can't be choosen again.
    PushOutComputerDivs();

    //Inserting a circle/cross on the div Computer had clicked and disabling the same div.so that it can't be clicked again
    ComputerTurn();

    //Calculating Result and Displaying the same on screen.
    Result();
  }
}

function UserTurn(UserThat) {
  userBox = UserThat.id;
  UserDiv = document.getElementById(`${userBox}`);
  UserDiv.innerHTML = `<img src=${markArr.userMark} alt="">`;
}

function PushOutUserDivs() {
  userBoxIndexInBoxIdArr = BoxIdArr.indexOf(`${userBox}`);
  BoxIdArr.splice(userBoxIndexInBoxIdArr, 1);
  document.getElementById(`${userBox}`).style.pointerEvents = "none";
  checkedBox.push(userBox);
}

function RandomComputerDiv() {
  computerBoxNumber = Math.floor(Math.random() * BoxIdArr.length);
  computerBox = BoxIdArr[computerBoxNumber];
}

function PushOutComputerDivs() {
  computerBoxIndexInBoxIdArr = BoxIdArr.indexOf(`${computerBox}`);
  BoxIdArr.splice(computerBoxIndexInBoxIdArr, 1);

  checkedBox.push(computerBox);
}

function ComputerTurn() {
  if (BoxIdArr.length !== 0) {
    document.getElementById(`${computerBox}`).style.pointerEvents = "none";
    document.getElementById(
      `${computerBox}`
    ).innerHTML = `<img src=${markArr.computerMark} alt="">`;
  } else {
    document.getElementById("choice").innerHTML =
      "Its A Draw! Let's have Another Match by clicking Reset.";
    document.getElementById("choice").style.backgroundColor = "yellow";
  }
}


// let userScore = 0;
// let computerScore = 0;

function Result() {
  let FirstHorizontalLine = document.querySelectorAll(".box:nth-child(3n+1)");
  let SecondHorizontalLine = document.querySelectorAll(
    ".box:nth-child(3n + 2)"
  );
  let ThirdHorizontalLine = document.querySelectorAll(".box:nth-child(3n + 3)");
  let FirstVerticalLine = document.querySelectorAll(".box:nth-child(-n + 3)");
  let SecondVerticalLine = document.querySelectorAll(
    ".box:nth-child(n + 4):nth-child(-n + 6)"
  );
  let ThirdVerticalLine = document.querySelectorAll(".box:nth-child(n + 7)");
  let LeftToRightDiagonalLine = document.querySelectorAll(
    ".box:nth-child(4n + 1)"
  );
  let RightToLeftDiagonalLine = document.querySelectorAll(
    ".box:nth-child(2n + 3):nth-child(-2n + 7)"
  );

  let LinesArr = [
    FirstHorizontalLine,
    SecondHorizontalLine,
    ThirdHorizontalLine,
    FirstVerticalLine,
    SecondVerticalLine,
    ThirdVerticalLine,
    LeftToRightDiagonalLine,
    RightToLeftDiagonalLine,
  ];

  for (let i = 0; i < LinesArr.length; i++) {
    if (
      LinesArr[i][0].innerHTML == `<img src="${markArr.userMark}" alt="">` &&
      LinesArr[i][1].innerHTML == `<img src="${markArr.userMark}" alt="">` &&
      LinesArr[i][2].innerHTML == `<img src="${markArr.userMark}" alt="">`
    ) {
      document.getElementById("choice").innerHTML = "YOU WON ";
      document.getElementById("choice").style.backgroundColor = "green";
      //  userScore ++;
      // localStorage.setItem("UserScore",`${userScore}`)
      // displayScore();
      allBoxDisabled();
      
    } else if (
      LinesArr[i][0].innerHTML ==
      `<img src="${markArr.computerMark}" alt="">` &&
      LinesArr[i][1].innerHTML ==
      `<img src="${markArr.computerMark}" alt="">` &&
      LinesArr[i][2].innerHTML == `<img src="${markArr.computerMark}" alt="">`
      ) {
        document.getElementById("choice").innerHTML = "You Loose ";
        document.getElementById("choice").style.backgroundColor = "red";
        //  computerScore ++;
        // displayScore();
        allBoxDisabled();
        // localStorage.setItem("ComputerScore",`${computerScore}`)
        
      }
    }
  }
  function allBoxDisabled() {
    document.getElementsByTagName("body")[0].style.pointerEvents = "none";
  }
  
//  function displayScore(){
//   document.getElementById("userscore").innerHTML = userScore;
//   document.getElementById("computerscore").innerHTML = computerScore;
//  }

 function Reload(){
   window.location.reload()
  //  console.log(localStorage.getItem("ComputerScore"))
  //  console.log(localStorage.getItem("UserScore"))
 }