//netflix
window.onload = function()
{
  var arr = ["test",
              "test2" ,
              "test3",
              "test4" ,
              "test5" ,
              "test6" ,
];


document.body.style.zoom="0";

var qLength = arr.length,
button = document.getElementById("click-nf");

button.onclick = function()
{
var rand = Math.floor(Math.random()*(qLength));
var quote = arr[rand];
document.getElementById("quote-2").innerHTML= quote ;
};


};

//minecraft
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


};
