var number;
document.getElementById("button1").onclick=function(){
  number=1;
}
document.getElementById("button2").onclick=function(){
  number=2;
}
document.getElementById("button3").onclick=function(){
  number=3;
}
document.getElementById("button4").onclick=function(){
  number=4;
}
document.getElementById("button5").onclick=function(){
  number=5;
}
document.getElementById("button").onclick=function(){
  let div =document.getElementById("item1");
  let div1=document.getElementById("item2");
    div.style.display="none";
    div1.style.display="block";
  document.getElementById("output").innerHTML=`You selected  ${number} out of 5`;
  console.log(number);
}

