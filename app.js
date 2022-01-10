function problemOne(event) {
  var element = document.getElementById("remove-me");
  element.remove();
//Didn't need below code:
  //const target = event.target;
  // code here:
}

// reference the elment "#remove-me" and add an eventlistener for the click event:
// your code here:

/* ---------------------------------------- */



function problemTwo(event) {
  var childs = document.getElementsByClassName("child clickable");
  for (var i = 0; i <= 3; i++) {
      childs[i].addEventListener('click', function (e) {
          e.preventDefault();
          e.target.closest('div.child.clickable').remove();
      });
  }
}
problemTwo();

  //const target = event.target;
  // your code here:


// reference the elment "#remove-my-children" and add an eventlistener for the click event:
// your code here

/* ---------------------------------------- */

//

function problemThree(event) {
  var childs3 = document.getElementsByClassName("child clickable");
  for (var i = 0; i <= 6; i++) {
      childs3[i].addEventListener('click', function (e) {
          e.preventDefault();
          e.target.closest('div.child.clickable').remove();

      });
  }

}
problemThree();

  //const target = event.target;
  // your code here



// reference the elment "#remove-my-children-then-me" and add an eventlistener for the click event:
// your code here:

/* ---------------------------------------- */
var children = document.getElementsByTagName('div');
console.log(children);
function problemFour(event) {
  if (document.createTextNode){
  var mytext=document.createTextNode(event)
  document.getElementById("mydiv").appendChild(mytext)
  }
  }


  //const target = event.target;
  // your code here



// reference the elment "#add-children" and add an eventlistener for the click event:
// your code here:

/* ---------------------------------------- */
//
function problemFive() {
  var node = document.createElement("LI");
var textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

  //const target = event.target;
  // your code here

}

// reference the elment "#to-the-back" and add an eventlistener for the mouseup event:
// your code here:

/* ---------------------------------------- */


// function problemSix({target}) {
//
//   const target = event.target;
//   // your code here
//
// }
//
// // reference the elment "#increment-child" and add an eventlistener for the click event:
// // your code here:
//
// /* ---------------------------------------- */
//
// /* Maybe code goes here, if some scope is needed... */
//
// function problemSeven(event) {
//
//   const target = event.target;
//   // your code here
//
//
// }
//
// // reference the elment "#increment-decrement" and add an eventlistener for the click event:
// // your code here:
//
// /* ---------------------------------------- */
//
//
// function problemEight(event) {
//
//  const target = event.target;
//   // your code here
//
// }
//
// // reference the elment "#echo-user-input" and add an eventlistener for the keyup event:
// // your code here:
//
// /* ---------------------------------------- */
//
// /* Maybe code goes here, if some scope is needed... */
//
// function problemNine(event) {
//
//   event.preventDefault();
//   const target = event.target;
//   // your code here
//
// }
//
// // reference the elment "#paste-place" and add an eventlistener for the paste event:
// // your code here:
//
// /* ---------------------------------------- */
//
// function problemTen(event) {
//   const target = event.target;
//   // your code here
// }
//
// // reference the elment "#show-hide" and add an eventlistener for the change event:
// // your code here:
//
// /* ---------------------------------------- */
//
//
// function problemEleven( event ) {
//
//   event.preventDefault();
//
//   const target = event.target;
//   // your code here
//
// }
//
// // your code here
//
// /* ---------------------------------------- */
//
// function problemTwelve ( ) {
//
//     // your code here
// }
//
// // your code here
