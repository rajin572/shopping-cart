document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newCaseNumber = addItemField( true ,'phone-filed');
   setPhoneTotal('phoneTotal', newCaseNumber)
   getTotal()
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newCaseNumber = addItemField( false ,'phone-filed');
   setPhoneTotal('phoneTotal',newCaseNumber)
   getTotal()
})
