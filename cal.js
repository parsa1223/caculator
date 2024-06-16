let namayeshgar=document.getElementById('namayeshgar');
let firstNum;
let secNum ;
let opration;
let step = 0;
let result =0;
let num1Array=[];
let num2Array=[];

function safheNamayesh (num){
    if (step ===0 || step ===1){
        num1Array.push(num);
        step=1;
        firstNum=Number(num1Array.join(''));
        namayeshgar.value=firstNum

    }else if(step ===2){
        num2Array.push(num);
        secNum=Number(num2Array.join(''))
        namayeshgar.value=secNum
    }
};
function safheNamayeshop (op){
    step=2;
    opration=op;

};
function pakKardan(){
    step=0;
    namayeshgar.value=0;
    firstNum=null;
    secNum=null;
    opration=null;
    result=0;
    num1Array=[];
    num2Array=[];

};
function mohasebe(){
    if(opration ==='+'){
      result = firstNum +  secNum ;
      namayeshgar.value=result
    }else if(opration ==='-'){
        result = firstNum  - secNum ;
        namayeshgar.value=result
      }else if(opration ==='*'){
        result = firstNum *  secNum ;
        namayeshgar.value=result
      }else if(opration ==='/'){
        result = firstNum /  secNum ;
        namayeshgar.value=result
      };
}