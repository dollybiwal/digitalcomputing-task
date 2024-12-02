var x, y, result

function input1() {
   document.getElementById("input").value+="1"
}
function input2() {

   document.getElementById("input").value+="2"
}
function input3() {

   document.getElementById("input").value+="3"
}
function input4() {

   document.getElementById("input").value+="4"
}
function input5() {

   document.getElementById("input").value+="5"
}
function input6() {

   document.getElementById("input").value+= "6"
}
function input7() {

   document.getElementById("input").value+= "7"
}
function input8() {

   document.getElementById("input").value+= "8"
}
function input9() {

   document.getElementById("input").value+= "9"
}
function input0() {

   document.getElementById("input").value+= "0"
}
function inputplus() {
   document.getElementById("inputplus").value+= "+"
}
function inputsub() {
   document.getElementById("input").value+= "-"
}
function inputmulti() {
   document.getElementById("input").value+= "*"
}

function calculate(){
   document.getElementById("inputbox").value=eval(document.getelementbyid("inputbox").value)
}