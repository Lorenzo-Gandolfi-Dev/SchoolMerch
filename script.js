document.addEventListener('DOMContentLoaded', function() {
  // Function to handle color box clicks
  function changeImage(event) {
    const colorBox = event.target;  // Get the clicked color box
    const newImageSrc = colorBox.getAttribute('data-image');  // Get the image path from the 'data-image' attribute
    
    // Find the closest product container
    const productContainer = colorBox.closest('.product');
    
    // Get the main image inside the same product container
    const mainImage = productContainer.querySelector('.product-image');
    
    // Update the main image source in that specific product
    mainImage.src = newImageSrc;
  }

  // Get all color boxes and add event listeners
  const colorBoxes = document.querySelectorAll('.color-box');
  colorBoxes.forEach(function(colorBox) {
    colorBox.addEventListener('click', changeImage);
  });
});
