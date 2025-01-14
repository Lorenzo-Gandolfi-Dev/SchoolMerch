document.addEventListener('DOMContentLoaded', function() {
  // Function to handle color box clicks for the first product
  function changeImage1(event) {
    const colorBox = event.target;  // Get the clicked color box
    const newImageSrc = colorBox.getAttribute('data-image');  // Get the image path from the 'data-image' attribute
    const mainImage = document.getElementById('main-image');  // Get the main image of the first product
    mainImage.src = newImageSrc;  // Update the image source
  }

  // Get all color boxes for the first product and add event listeners
  const colorBoxes1 = document.querySelectorAll('.color-box1');
  colorBoxes1.forEach(function(colorBox) {
    colorBox.addEventListener('click', changeImage1);
  });

  // Function to handle color box clicks for the second product
  function changeImage2(event) {
    const colorBox = event.target;  // Get the clicked color box
    const newImageSrc = colorBox.getAttribute('data-image');  // Get the image path from the 'data-image' attribute
    const mainImage2 = document.getElementById('main-image2');  // Get the main image of the second product
    mainImage2.src = newImageSrc;  // Update the image source
  }

  // Get all color boxes for the second product and add event listeners
  const colorBoxes2 = document.querySelectorAll('.color-box2');
  colorBoxes2.forEach(function(colorBox) {
    colorBox.addEventListener('click', changeImage2);
  });
});
