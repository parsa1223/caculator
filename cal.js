let namayeshgar=document.getElementById('namayeshgar');
function safheNamayesh(value){
    namayeshgar.value += value;

}
function pakKardan(){
    namayeshgar.value="";

}
function mohasebe (){
    

try{
    namayeshgar.value=eval(namayeshgar.value);
}catch(error) {
    namayeshgar.value='Error'
}
}
