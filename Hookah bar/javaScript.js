const hookahList = [
   {
      name:'',
      photo:'',
      praic:'',
      strength:''
   }
]
const productList = [
   {
      photo:'',
      name:'',
      size:'',
      price:'',
      category:''
   },
   {
      photo:'',
      name:'',
      size:'',
      price:'',
      category:''
   },
   {
      photo:'',
      name:'',
      size:'',
      price:'',
      category:''
   },
   {
      photo:'',
      name:'',
      size:'',
      price:'',
      category:''
   },

]

let menuTitle = document.getElementsByClassName('menu-title');

for(let i=0;i<menuTitle.length;i++){
	menuTitle[i].onclick = function(){
		menuTitle[i].nextElementSibling.classList.toggle('hide');
	}
}





var pattern = `<radialGradient id="grad[number]">
                <stop offset="0%" stop-color="[color1]"></stop>
                <stop offset="40%" stop-color="[color1]"></stop>
                <stop offset="100%" stop-color="[color1]" stop-opacity="0"></stop>
            </radialGradient>
            <circle cx="0" cy="0" r="[rad]" fill="url(#grad[number])">
                <animateMotion dur="[seconds]s" repeatCount="indefinite">
                    <path id="path[number]" d="M[x1],[y1] [x2],[y2] L[x3],[y3] Z" ></path>
                    <mpath xlink:href="#path[number]"/>
                </animateMotion>
            </circle>`;

var svg = document.getElementById("svg__title");

var width = svg.clientWidth;
var height = svg.clientHeight;
var sircleNumber = 150;
var minRadius = 15;
var maxRadius = 35;
var minSeconds = 17;
var maxSeconds = 40;
var zazor = 25;

var colors = ["red", "orange", "yellow", "blue", "white", "#ff00a1", "#ffcb00", "#ff8600"];

var svgNS = "http://www.w3.org/2000/svg";

function generateBack(id) {
  var parent = document.getElementById(id);
  console.log(id);
  parent.innerHTML = "";

  for (var i = 1; i <= sircleNumber; i++) {
    generateOne(i);
  }

  function generateOne(number) {

    var g = document.createElementNS(svgNS, "g");

    var rad = random(minRadius, maxRadius);
    var color = randomColor();
    var xx = new Array(3);
    var yy = new Array(3);
    for (var i = 0; i < 3; i++) {
      xx[i] = random(-zazor, width + zazor);
      yy[i] = random(-zazor, height + zazor);
    }
    var seconds = randomFloat(minSeconds, maxSeconds);


    var html = replace(pattern, "number", number);
    html = replace(html, "rad", rad);
    html = replace(html, "color1", color);
    for (var i = 0; i < 3; i++) {
      var ii = i + 1;
      html = replace(html, "x" + ii, xx[i]);
      html = replace(html, "y" + ii, yy[i]);
    }
    html = replace(html, "seconds", seconds);
      console.log(html);
    g.innerHTML = html;

    parent.appendChild(g);
  }

}

function replace(str, patternText, value) {
  var pattern = new RegExp("\\[" + patternText + "\\]", "g");
  var rez = str.replace(pattern, value);
  return rez;
}

function randomColor() {
  return colors[random(0, colors.length - 1)];
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

generateBack("svgBack");
