function toggleOptions(selectedRadio) {  
    const allOptions = document.querySelectorAll('.options');    
    allOptions.forEach((options) => {      
      if (options.parentElement.contains(selectedRadio)) {
        options.style.display = 'block'; 
      } else {
        options.style.display = 'none'; 
      }
    });
  
    
    if (selectedRadio) {      
      if (selectedRadio.closest('.box').querySelector('h2').textContent.includes('1 Unit')) {
        updateTotal(10, 24); 
      } else if (selectedRadio.closest('.box').querySelector('h2').textContent.includes('2 Unit')) {
        updateTotal(18, 24);
      } else if (selectedRadio.closest('.box').querySelector('h2').textContent.includes('3 Unit')) {
        updateTotal(24, 24); 
      }
    }
  }  
  
  function updateTotal(unitPrice, originalPrice) {
    const totalElement = document.querySelector('.total');   
    totalElement.textContent = `Total: $${unitPrice.toFixed(2)} USD`;
  }

  const addToCartButton = document.querySelector('.add-to-cart');
  const successMessage = document.getElementById('success-message');
    
  addToCartButton.addEventListener('click', () => {   
    successMessage.style.display = 'block';    
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  });
  