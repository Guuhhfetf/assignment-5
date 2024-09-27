function getInputFieldValueById(id){
     const inputValue=document.getElementById(id).value;
     const inputNumber=parseFloat(inputValue) ; 
     return inputNumber ;                
}
function getTextFieldValueById(id){
      const textValue0=document.getElementById(id).innerText;
      const textNumber0=parseFloat(textValue0);
      return textNumber0;

} 