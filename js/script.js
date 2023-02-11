function addItemField(isIncrese,inputId){
    const inputElement = document.getElementById(inputId);
    const inputValueStr = inputElement.value;
    const inputValue = parseInt(inputValueStr);
    let newCaseNumber;
    if(isIncrese === true){
        newCaseNumber = inputValue + 1;
    }
    else{
        newCaseNumber = inputValue - 1;
    }
    inputElement.value = newCaseNumber;
    return newCaseNumber;
}
function setPhoneTotal(elememtid , newCaseNumber){
    const phoneTotal = document.getElementById(elememtid);
    const newTotal = newCaseNumber*1278;
    phoneTotal.innerText = newTotal
}
function setCaseTotal(elememtid , newCaseNumber){
    const phoneTotal = document.getElementById(elememtid);
    const newTotal = newCaseNumber*59;
    phoneTotal.innerText = newTotal
}


function getDataFromPrices(elementId){
    const getPricesElement = document.getElementById(elementId);
    const getPricesElementValueStr = getPricesElement.innerText;
    const getPricesElementValue = parseFloat(getPricesElementValueStr)
    return getPricesElementValue
}
function setTotalsValue(elementId, total){
    const getElement = document.getElementById(elementId)
    getElement.innerText = total
}
function getTotal(){
   const currentPhoneTotal = getDataFromPrices('phoneTotal');
   const currentCaseTotal = getDataFromPrices('caseTotal');

   const subTotalPrice = currentPhoneTotal+currentCaseTotal;
   setTotalsValue('subTotalPrice', subTotalPrice)


   const taxTotalPrice = parseFloat((subTotalPrice*0.1).toFixed(2));
   setTotalsValue('taxTotalPrice', taxTotalPrice)



   const totalPrice = subTotalPrice+taxTotalPrice;
   setTotalsValue('totalPrice', totalPrice)
}