"use strict";
//////////////////////
// ----- KEY ----- //
////////////////////
let one = 0;
let two = 0;
let three = 0;
document.querySelector(".question-two").style.display = "none";
document.querySelector(".question-three").style.display = "none";
document.querySelector(".qTwo").style.display = "none";
document.querySelector(".qThree").style.display = "none";
document.querySelector(".results").style.display = "none";
///////////////////////////
// --- Question One --- //
/////////////////////////
const qOneA = document.querySelector(".a");
const qOneB = document.querySelector(".b");
const qOneC = document.querySelector(".c");
// A
if (qOneA) {
  qOneA.addEventListener("click", function () {
    // Hiding older buttons
    document.querySelector(".qOne").style.display = "none";
    // Showing new buttons
    document.querySelector(".qTwo").style.display = "";

    // Hiding last question
    document.querySelector(".question-one").style.display = "none";
    // Showing new question
    document.querySelector(".question-two").style.display = "";

    //Updating the score
    one = one + 0;
    console.log("wrong");
  });
}
// B
if (qOneB) {
  qOneB.addEventListener("click", function () {
    // Hiding older buttons
    document.querySelector(".qOne").style.display = "none";
    // Showing new buttons
    document.querySelector(".qTwo").style.display = "";

    // Hiding last question
    document.querySelector(".question-one").style.display = "none";
    // Showing new question
    document.querySelector(".question-two").style.display = "";

    //Updating the score
    one = one + 0;
    console.log("wrong");
  });
}
// C
if (qOneC) {
  qOneC.addEventListener("click", function () {
    // Hiding older buttons
    document.querySelector(".qOne").style.display = "none";
    // Showing new buttons
    document.querySelector(".qTwo").style.display = "";

    // Hiding last question
    document.querySelector(".question-one").style.display = "none";
    // Showing new question
    document.querySelector(".question-two").style.display = "";

    //Updating the score
    one = one + 1;
    console.log("correct");
  });
}
///////////////////////////
// --- Question Two --- //
/////////////////////////
// A
const qTwoD = document.querySelector(".d");
const qTwoE = document.querySelector(".e");
const qTwoF = document.querySelector(".f");
if (qTwoD) {
  qTwoD.addEventListener("click", function () {
    // Hiding older buttons
    document.querySelector(".qTwo").style.display = "none";
    // Showing new buttons
    document.querySelector(".qThree").style.display = "";

    // Hiding last question
    document.querySelector(".question-two").style.display = "none";
    // Showing new question
    document.querySelector(".question-three").style.display = "";

    //Updating the score
    two = two + 0;
    console.log("wrong");
  });
}
// B
if (qTwoE) {
  qTwoE.addEventListener("click", function () {
    // Hiding older buttons
    document.querySelector(".qTwo").style.display = "none";
    // Showing new buttons
    document.querySelector(".qThree").style.display = "";

    // Hiding last question
    document.querySelector(".question-two").style.display = "none";
    // Showing new question
    document.querySelector(".question-three").style.display = "";

    //Updating the score
    two = two + 1;
    console.log("correct");
  });
}
// C
if (qTwoF) {
  qTwoF.addEventListener("click", function () {
    // Hiding older buttons
    document.querySelector(".qTwo").style.display = "none";
    // Showing new buttons
    document.querySelector(".qThree").style.display = "";

    // Hiding last question
    document.querySelector(".question-two").style.display = "none";
    // Showing new question
    document.querySelector(".question-three").style.display = "";

    //Updating the score
    two = two + 0;
    console.log("wrong");
  });
}
/////////////////////////////
// --- Question Three --- //
///////////////////////////
// A
const qThreeG = document.querySelector(".g");
const qThreeH = document.querySelector(".h");
const qThreeI = document.querySelector(".i");
if (qThreeG) {
  qThreeG.addEventListener("click", function () {
    //Updating the score
    three = three + 1;
    console.log("correct");
    document.querySelector(".results").style.display = "";

    const finalScore = one + two + three;
    if (finalScore == 3) {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `3/3! Well done! You got them all correct.`;
    } else if (finalScore == 2) {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `2/3 You did good`;
    } else if (finalScore == 1) {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `1/3 You did ok.`;
    } else {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `You didn't get any correct.`;
    }
  });
}
// B
if (qThreeH) {
  qThreeH.addEventListener("click", function () {
    //Updating the score
    three = three + 0;
    console.log("wrong");
    document.querySelector(".results").style.display = "";

    const finalScore = one + two + three;
    if (finalScore == 3) {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `3/3! Well done! You got them all correct.`;
    } else if (finalScore == 2) {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `2/3 You did good`;
    } else if (finalScore == 1) {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `1/3 You did ok.`;
    } else {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `You didn't get any correct.`;
    }
  });
}
// C
if (qThreeI) {
  qThreeI.addEventListener("click", function () {
    //Updating the score
    three = three + 0;
    console.log("wrong");
    document.querySelector(".results").style.display = "";

    const finalScore = one + two + three;
    if (finalScore == 3) {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `3/3! Well done! You got them all correct.`;
    } else if (finalScore == 2) {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `2/3 You did good`;
    } else if (finalScore == 1) {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `1/3 You did ok.`;
    } else {
      // Hiding last buttons
      document.querySelector(".qThree").style.display = "none";
      // Hiding last question
      document.querySelector(".question-three").style.display = "none";
      // Showing result section
      document.querySelector(".results h2").innerHTML = "Results:";
      // Showing score
      document.querySelector(".results p").innerHTML = `You didn't get any correct.`;
    }
  });
}
