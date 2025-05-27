var sayac=60;
var dk = 16;
var a=setInterval(function (){
    document.getElementById("dk").innerText=dk;
    sayac=sayac-1;
    document.getElementById("ekran").innerHTML=sayac;
    if (sayac<10){
        document.getElementById("ekran").innerText="0"+sayac;
    }
    if (sayac==0){
        if (document.getElementById("dk").innerText==0){
            clearInterval(a);
        }
        else {
            dk--;
            sayac=60;
        }
    }
},1000);