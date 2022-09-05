// Change code below this line
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
      <a class="gallery__item" href=${original} >
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
      />
      </a>`
  )
  .join('');

galleryList.innerHTML = markup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsType: 'alt',
  captionDelay: 250,
});
