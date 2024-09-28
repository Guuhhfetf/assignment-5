
//donation step-1
document.getElementById('btn-add-money')
.addEventListener('click',function(event){
       event.preventDefault();                 

 const addMoney =getInputFieldValueById('input-add-money');
  
 if(!isNaN(addMoney)){
 const balance =getTextFieldValueById('account-balance');
 const newBalance =balance+addMoney;
 document.getElementById('account-balance').innerText=newBalance;                   
 }
else{
  alert('Failed to add the money.')                      
}

})

//donation step-2
document.getElementById('donation2')
.addEventListener('click',function(event){
       event.preventDefault();                 

 const addMoney =getInputFieldValueById('text2');
  
 if(!isNaN(addMoney)){
 const balance =getTextFieldValueById('account2');
 const newBalance =balance+addMoney;
 document.getElementById('account2').innerText=newBalance;                   
 }
else{
  alert('Failed to add the money.')                      
}

})

//donation step-3
document.getElementById('btn3')
.addEventListener('click',function(event){
       event.preventDefault();                 

 const addMoney =getInputFieldValueById('text3');
  
 if(!isNaN(addMoney)){
 const balance =getTextFieldValueById('account3');
 const newBalance =balance+addMoney;
 document.getElementById('account3').innerText=newBalance;                   
 }
else{
  alert('Failed to add the money.')                      
}

})