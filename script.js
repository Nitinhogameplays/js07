const calculateTip = () => {
    const totalBill = parseFloat(document.getElementById('totalBill').value);
    const serviceQuality = document.getElementById('serviceQuality').value;
  
    const tipPercentage = getTipPercentage(serviceQuality);
    const tipAmount = calculateTipAmount(totalBill, tipPercentage);
  
    displayResult(tipAmount);
  };
  
  const getTipPercentage = (serviceQuality) => {
    switch (serviceQuality) {
      case 'good':
        return 0.15;
      case 'regular':
        return 0.1;
      case 'bad':
        return 0.05;
      default:
        return 0;
    }
  };
  
  const calculateTipAmount = (totalBill, tipPercentage) => {
    return totalBill * tipPercentage;
  };
  
  const displayResult = (tipAmount) => {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Valor da gorjeta: R$${tipAmount.toFixed(2)}`;
  };
  