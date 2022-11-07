import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryMarkup = '';
const galleryRef = document.querySelector('.gallery');

createGalleryMarkup(galleryItems);

createGalleryFromMarkup(galleryMarkup);

function createGalleryMarkup(items) {
  return (galleryMarkup = items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(''));
}

function createGalleryFromMarkup(markup) {
  galleryRef.innerHTML = markup;
}
