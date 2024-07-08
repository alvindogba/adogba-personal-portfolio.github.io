const openMenu=document.querySelector(".open_menu");
const closeMenu=document.querySelector(".closeMenu");
const mainMenu=document.querySelector(".nav-links_container");
var all=document.querySelector(".all");
var app=document.querySelector(".app");
var card=document.querySelector(".card");
var web=document.querySelector(".web");
//buttons for work sections
var allBtn=document.querySelector(".all-btn");
var appBtn=document.querySelector(".app-btn");
var cardBtn=document.querySelector(".card-btn");
var webBtn=document.querySelector(".web-btn");


openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);





function show(){
    mainMenu.style.display="flex";
    openMenu.style.display="none";


}

function close(){
    mainMenu.style="close";
    openMenu.style.display="block";

}

  
//Changing the title of my pado
document.querySelector(".bro").style.color="red"










//var creative=document.getElementById(dev).innerHTML="A Creative Web Developer";
//$("h1").html("This life is too short");
//$("h1").css("color", "blue");

/*$(document).ready(function(){
    $("h1").click(function(){
        $(this).hide()
    });
});*/
//$("h1").click(function(){
    //$(this).hide()
//}); 
