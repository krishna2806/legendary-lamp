status="";
obj=[]
function preload(){

}
function setup(){
    c=createCanvas(700,350)
    c.center()
    v=createCapture(VIDEO)
    v.hide()
}
function start(){
objdetector=ml5.objectDetector('cocossd' , mode);
document.getElementById("fil").innerHTML="DETECTING OBJECTS";
input=document.getElementById("blah").value;
}
function gotresult(e,r){
if (e){
console.error(e);
}
else{
console.log(r);
obj=r;
}
}
function mode(){
console.log("``````````````````modle loaded``````````````")
status=true;
}
function draw(){
    image(v,0,0,700,350)

    if (status!=""){
objectDetector.detect(v,gotresult);

for(i=0;i<obj.length;i++){

document.getElementById("fil").innerHTML="OBJECTS DETECTED";

fill("#FFF000");
percent=floor(obj[i].confidence * 100);
text(obj[i].label + "" + percent + "%",obj[i].x,obj[i].y);
noFill();
stroke("#FFF000");
rect(obj[i].x,obj[i].y,obj[i].width,obj[i].height);
if(obj[i].label==input){
document.getElementById("bruh").innerHTML=input+"Found";
}
}
}
}