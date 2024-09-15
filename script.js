// Function to filter items based on rating
function filterItems(rating) {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const cardRating = parseFloat(card.getAttribute('data-rating'));
      
      if (rating === 'all') {
        card.style.display = 'block';
      } else {
        const minRating = parseFloat(rating);
        if (cardRating >= minRating) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  }
  
  // Function to filter items based on category
  function filterByCategory(category) {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  // Function to apply price filter
  function applyPriceFilter() {
    const minPrice = parseFloat(document.getElementById('min-price').value);
    const maxPrice = parseFloat(document.getElementById('max-price').value);
    
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const priceText = card.querySelector('p.text-gray-700').textContent;
      const price = parseFloat(priceText.replace('$', '').replace(',', ''));
      
      if (price >= minPrice && price <= maxPrice) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  