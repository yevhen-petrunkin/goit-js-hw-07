import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryMarkup = '';
const galleryRef = document.querySelector('.gallery');

createGalleryMarkup(galleryItems);

createGalleryFromMarkup(galleryMarkup);

galleryRef.addEventListener('click', onGalleryImageClick);

function createGalleryMarkup(items) {
  return (galleryMarkup = items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
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

function onGalleryImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const largeScaleImageModal = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  largeScaleImageModal.show();
  document.addEventListener('keydown', closeModalOnEscape);

  function closeModalOnEscape(evt) {
    if (evt.code !== 'Escape') {
      return;
    }
    largeScaleImageModal.close();
    document.removeEventListener('keydown', closeModalOnEscape);
  }
}
