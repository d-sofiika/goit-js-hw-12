import { doFetch } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form-search');
const placeImg = document.querySelector('.card-container');
const loader = document.querySelector('.loader');
loader.style.display = "none";

const book = new SimpleLightbox('.card-item a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  placeImg.innerHTML = '';
  loader.style.display = "block";
  
  const nameImg = event.currentTarget.elements.text.value;
  setTimeout(() => {
	doFetch(nameImg, loader, placeImg)
    .then(data => {
      if (nameImg === '' || data.hits.length === 0) {
        iziToast.show({
          title: 'Ops.',
          titleColor: 'white',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          color: 'red',
          position: 'topRight'
          
        });
          
      } else {
        placeImg.insertAdjacentHTML('beforeend', createMarkup(data));
        book.refresh();
         event.target.reset();
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        titleColor: 'white',
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        messageColor: 'white',
        balloon: true,
        position: 'topRight',
        progressBarColor: 'black',
        transitionIn: 'bounceInRight',
      });
    })
    .finally(() => {
      
      loader.style.display = "none";
    });
  }, 1000);
  
}
