window.addEventListener('load', () => {
    const input = document.querySelector('#number');
    const converterButton = document.querySelector('#converter');
    const resultDisplay = document.querySelector('.resultado');
  
    converterButton.addEventListener('click', () => {
      const binaryValue = input.value;
      let decimalValue = 0;
      
  
      for (let i = 0; i < binaryValue.length; i++) {
        decimalValue += binaryValue[i] * Math.pow(2, binaryValue.length - i - 1);
      }

      if (input.value.length < 1 ) {
        alert("Digíte um número")
        return
      }else if (!/[01]/.test(input.value)) {
        alert("Somente 0 e 1 são aceitos.");
        return
      }

      resultDisplay.textContent = decimalValue;
    });
  });
  