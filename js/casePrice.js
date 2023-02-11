document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = addItemField(true,'case-input');
     setCaseTotal('caseTotal' , newCaseNumber)
     getTotal()
})


document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = addItemField( false ,'case-input');
    setCaseTotal('caseTotal' , newCaseNumber)
    getTotal()
})
