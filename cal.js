// let namayeshgar=document.getElementById('namayeshgar');
function safheNamayesh(value){
    document.getElementById('namayeshgar').value += value;

}
function pakKardan(){
   document.getElementById('namayeshgar').value="";

}
function bejayeEval (xex){
    const mohaseb=new Function('return'+ xex);

try{
    const result=mohaseb();
     return result
}catch(error) {
    return 'Error';
}
}
function mohasebe (){
    let input=document.getElementById('namayeshgar').value;
let result=bejayeEval(input);
document.getElementById('namayeshgar').value=result;
}