// let namayeshgar=document.getElementById('namayeshgar');
function safheNamayesh(value){
    document.getElementById('namayeshgar').value += value;

}
function pakKardan(){
   document.getElementById('namayeshgar').value="";

}
function mohasebe (){
    const input=document.getElementById('namayeshgar').value;
    let result=bejayeEval(input);
    input=result;
}

function bejayeEval (input){
    let operands= input.split(/[\+\-\*\/]/);
    let operator=input.match(/[\+\-\*\/]/)[0];
    
    let num1=parseFloat(operands[0]);
    let num2=parseFloat(operands[1]);

    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
};