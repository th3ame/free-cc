
//netflix
window.onload = function()
{
  var arr = ["test",
              "test" ,
              "test",
              "test" ,
              "test" ,
              "test" ,
];


document.body.style.zoom="0";

var qLength = arr.length,
button = document.getElementById("click-nf");

button.onclick = function()
{
var rand = Math.floor(Math.random()*(qLength));
var quote = arr[rand];
document.getElementById("quote").innerHTML= quote ;
};


};
