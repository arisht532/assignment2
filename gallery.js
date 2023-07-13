// Define the gallery items array
const galleryItems = [
  {
    src: 'images/flower-pink-large.jpg',
    alt: 'Pink flowers',
    thumbnailSrc: 'images/flowers-pink-small.jpg',
    caption: 'Pink flowers'
  },
  {
    src: 'images/flower-purple-large.jpg',
    alt: 'Purple flowers',
    thumbnailSrc: 'images/flowers-purple-small.jpg',
    caption: 'Purple flowers' 
  },
  {
    src: 'images/flower-red-large.jpg',
    alt: 'Red flowers',
    thumbnailSrc: 'images/flowers-red-small.jpg',
    caption: 'Red flowers'
  },
  {
    src: 'images/flower-white-large.jpg',
    alt: 'White flowers',
    thumbnailSrc: 'images/flowers-white-small.jpg',
    caption: 'White flowers'
  },
  {
    src: 'images/flower-yellow-large.jpg',
    alt: 'Yellow flowers',
    thumbnailSrc: 'images/flowers-yellow-small.jpg',
    caption: 'Yellow flowers'
  }
];

// Get references to the elements
const featuredImage = document.getElementById('featured-image');
const imageCaption = document.getElementById('image-caption');
const thumbnailList = document.getElementById('thumbnail-list');

// Build the thumbnail list dynamically
galleryItems.forEach((item) => {
  const thumbnail = document.createElement('li');
  const thumbnailImage = document.createElement('img');
  thumbnailImage.src = item.thumbnailSrc;
  thumbnailImage.alt = item.alt;
  thumbnailImage.width = 240;
  thumbnailImage.height = 160;
  thumbnail.appendChild(thumbnailImage);
  thumbnailList.appendChild(thumbnail);
});

// Add event listener to the thumbnail list
thumbnailList.addEventListener('click', handleThumbnailClick);

// Function to handle thumbnail click
function handleThumbnailClick(event) {

  // Check if the clicked element is an image
  if (event.target.tagName === 'IMG') {
    
    // Get the source, alt, and caption of the clicked thumbnail
    const src = event.target.src.replace('-small.jpg', '-large.jpg');
    const alt = event.target.alt;
    const caption = galleryItems.find((item) => item.alt === alt).caption;

    // Update the featured image and caption
    featuredImage.src = src;
    featuredImage.alt = alt;
    imageCaption.textContent = caption;

    // Remove the "active" class from all thumbnails
    const thumbnails = thumbnailList.querySelectorAll('img');
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove('active');
    });

    // Add the "active" class to the clicked thumbnail
    event.target.classList.add('active');
  }
}
