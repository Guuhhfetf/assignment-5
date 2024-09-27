document.getElementById('btn-add-money')
.addEventListener('click',function (event){
    event.preventDefault(); 
    
  const addMoney=  getInputFieldValueById('input-add-money');
  if(!isNaN(addMoney)){
      const balance0= getTextFieldValueById('account-balance-cashout');
       const newBalance0=balance0-addMoney;
       document.getElementById('account-balance-cashout').innerText=newBalance0;                
  }
  else{
   alert('Failed to cashout the money.');                     
  }
})