// let namayeshgar=document.getElementById('namayeshgar');
function safheNamayesh(value){
    document.getElementById('namayeshgar').value += value;

}
function pakKardan(){
   document.getElementById('namayeshgar').value="";

}
function mohasebe (){
    const input=document.getElementById('namayeshgar').value;
const operators=['+','-','*','/'];
let currentNumber='';
let operator='+';
let result='0';
for(let char of input){
    if(operators.includes(char)){
        result =bejayeEval(result,parseFloat(currentNumber),operator);
        operator=char;
        currentNumber='';
    } else {
        currentNumber+=char;
    }
}
if(currentNumber!==''){
    result=bejayeEval(result,parseFloat(currentNumber),operator);
} else{
    document.getElementById('namayeshgar').value=result;
}
}

function bejayeEval (a,b,operator){
    switch (operator){
        case '+':
            return a + b;
            case '-':
                return a - b;
                case '*':
                    return a * b;
                    case '/':
                        if(b===0){
                            return 'Error'
                        }
                        return a/b;
                        default :
                        return 'Error'
    }
   
   
}