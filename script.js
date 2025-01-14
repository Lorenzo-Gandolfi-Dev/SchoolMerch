document.addEventListener('DOMContentLoaded', function() {
  // Function to handle color box clicks
  function changeImage(event) {
    const colorBox = event.target;  // Get the clicked color box
    const newImageSrc = colorBox.getAttribute('data-image');  // Get the image path from the 'data-image' attribute

    // Update the main image source
    const mainImage = document.getElementById('main-image');
    mainImage.src = newImageSrc;
  }

  // Get all color boxes and add event listeners for the first product
  const colorBoxes = document.querySelectorAll('.color-box');
  colorBoxes.forEach(function(colorBox) {
    colorBox.addEventListener('click', changeImage);
  });

  // Function to handle color box clicks for the second product
  function changeImage2(event) {
    const colorBox = event.target;
    const newImageSrc = colorBox.getAttribute('data-image');
    const mainImage2 = document.getElementById('main-image2');
    mainImage2.src = newImageSrc;
  }

  // Get all color boxes for the second product and add event listeners
  const colorBoxes2 = document.querySelectorAll('.color-box');
  colorBoxes2.forEach(function(colorBox) {
    colorBox.addEventListener('click', changeImage2);
  });
});
