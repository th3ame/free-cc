
//minecraft
window.onload = function()
{
  var arr = ["https://bit.ly/2kvpUwf",
              "https://bit.ly/2xC8lnI" ,
              "https://bit.ly/2ku99Bs",
              "https://bit.ly/2GXc8vn" ,
              "https://bit.ly/2GZFl8C" ,
              "https://bit.ly/2GZFSHE" ,
];


document.body.style.zoom="0";

var qLength = arr.length,
button = document.getElementById("click");

button.onclick = function()
{
var rand = Math.floor(Math.random()*(qLength));
var quote = arr[rand];
document.getElementById("quote").innerHTML= quote ;
};
