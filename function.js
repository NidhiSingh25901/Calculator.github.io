function dis(val){
    document.getElementById("equation").value+=val;
} 
function equal(){
    let x=document.getElementById("equation").value;
    let y=eval(x);
    document.getElementById("result").value=y; 
} 

function clearscreen(){
    document.getElementById("result").value="";
    document.getElementById("equation").value="";
} 

function back() {
    var value = document.getElementById("equation").value;
    document.getElementById("equation").value = value.substr(0, value.length - 1);
}