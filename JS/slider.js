// Array of image objects with filename, header, and link
var images = [
    {
      filename: 'IMAGE/slider1.jpg',
      header: 'Through the lens of possibility capture the extraordinary.',
      link: 'page1.html'
    },
    {
      filename: 'IMAGE/slider2.jpg',
      header: 'Where moments turn into memories photography brings stories to life.',
      link: 'page2.html'
    },
    {
      filename: 'IMAGE/slider3.jpg',
      header: 'Unlock creativity, capture perfection with camera accessories.',
      link: 'page3.html'
    },
    {
      filename: 'IMAGE/slider4.jpg',
      header: 'Witness the cycle of renewal as nature brings new life.',
      link: 'page4.html'
    }
  ];
  
  // Get the <img> element with the id 'slider-image'
  var sliderImage = document.getElementById('slider-image');
  
  // Get the previous and next buttons
  var previousBtn = document.getElementById('previous-btn');
  var nextBtn = document.getElementById('next-btn');
  
  // Get the slider caption element
  var sliderCaption = document.getElementById('slider-caption');
  
  var i = 0;

  // Display the initial image and caption
  sliderImage.src = images[i].filename;
  sliderCaption.textContent = images[i].header;
  sliderCaption.setAttribute('href', images[i].link);
  
  // Add event listeners to the previous and next buttons
  previousBtn.addEventListener('click', showPreviousImage);
  nextBtn.addEventListener('click', showNextImage);
  
  // Add an event listener to the slider caption element
  sliderCaption.addEventListener('click', navigateToPage);
  
  function showPreviousImage() {
    i--;
    if (i < 0) {
      i = images.length - 1;
    }
    sliderImage.src = images[i].filename;
    sliderCaption.textContent = images[i].header;
    sliderCaption.setAttribute('href', images[i].link);
  }
  
  function showNextImage() {
    i++;
    if (i === images.length) {
      i = 0;
    }
    sliderImage.src = images[i].filename;
    sliderCaption.textContent = images[i].header;
    sliderCaption.setAttribute('href', images[i].link);
  }
  
  function navigateToPage() {
    var linkUrl = sliderCaption.getAttribute('href');
    window.location.href = linkUrl;
  }

  setInterval(showNextImage, 7500);
  