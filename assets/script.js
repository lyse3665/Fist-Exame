
function myFunction() {
    alert("This page say your cart is impy");
}
function changePic(theClickedElement){
    theClickedElement.src = "succulents-2.jpg"
}
function revertPic(theClickedElement){
    theClickedElement.src = "succulents-2.jpg"
}
function myFunction2(){
    var x = document.getElementById("cookies");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}