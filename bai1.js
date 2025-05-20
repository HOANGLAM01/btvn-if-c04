function sosanh(){
    let a= document.getElementById("number1").value
    let b= document.getElementById("number2").value
    let c = a%b
    if(c==0){
        document.getElementById("show").innerHTML= "chia hết"
    }else{
        document.getElementById("show").innerHTML= "không chia hết"
    }
}
function sosanhvs0(){
    let a = document.getElementById("data").value
    if(a>0){
        alert("số lớn hơn 0")
    }else if(a==0){
        alert("Bằng 0")
    }else{
        alert("Nhỏ hơn không")
    }

}
function bignumber(){
    let a= document.getElementById("number1").value
    let b= document.getElementById("number2").value
    let c= document.getElementById("number3").value
    if(Number(a)>Number(b)){
        if(Number(a)> Number(c)){
            document.getElementById("show").innerHTML="số lớn nhất là "+a;
        }else if (Number(a) == Number(c)){
            document.getElementById("show").innerHTML="2 số lớn bằng nhau là "+a;
        }else{
            document.getElementById("show").innerHTML="số lớn nhất là "+c;
        }
    }else {
        if(Number(b)>Number(c)){
            document.getElementById("show").innerHTML="số lớn nhất là "+b;
        }else if (Number(b)==Number(c)){
            document.getElementById("show").innerHTML="2 số lớn bằng nhau là "+c;
        }else{
            document.getElementById("show").innerHTML="số lớn nhất là "+c;
        }
    }
}