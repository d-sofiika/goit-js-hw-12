import { doFetch } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form-search');
const btnMore = document.querySelector('.more-btn');
const placeImg = document.querySelector('.card-container');
const loader = document.querySelector('.loader');

loader.style.display = 'none';
btnMore.hidden = true;
btnMore.disabled = true;

const book = new SimpleLightbox('.card-item a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);
btnMore.addEventListener('click', searchMore);

let page = 1;
let limite;
let nameImg;
btnMore.disabled = true;

async function handleSubmit(event) {
  event.preventDefault();
  placeImg.innerHTML = '';
  loader.style.display = 'block';
  btnMore.hidden = true;
  btnMore.disabled = true;
  page = 1;

  nameImg = event.currentTarget.elements.text.value;
  setTimeout(() => {
    doFetch(nameImg, page)
      .then(data => {
        limite = Math.floor(data.totalHits / 15);
        console.log(limite);
        if (nameImg === '' || data.hits.length === 0) {
          iziToast.show({
            title: 'Ops.',
            titleColor: 'white',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            messageColor: 'white',
            color: 'red',
            position: 'topRight',
          });
        } else {
          placeImg.insertAdjacentHTML('beforeend', createMarkup(data));
          btnMore.disabled = false;

          if (placeImg.hasChildNodes() && page < limite) {
            btnMore.hidden = false;
          }
          book.refresh();
          event.target.reset();
        }
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          titleColor: 'white',
          message: 'Oops!',
          messageColor: 'white',
          balloon: true,
          position: 'topRight',
          progressBarColor: 'black',
          transitionIn: 'bounceInRight',
        });
      })
      .finally(() => {
        loader.style.display = 'none';
      });
  }, 1000);
}

async function searchMore() {
  
  const card = document.querySelector('.card-item');
  const cardHeight = card.getBoundingClientRect().height;

  btnMore.disabled = true;
  page += 1;

  try {
    loader.style.display = 'block';
    btnMore.hidden = true;
    const value = await doFetch(nameImg, page);

    setTimeout(() => {
      placeImg.insertAdjacentHTML('beforeend', createMarkup(value));
    }, 500);

    btnMore.disabled = false;
    window.scrollBy({
      top: cardHeight * 2,
      left: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      loader.style.display = 'none';
      btnMore.hidden = false;
    }, 500);

   
    if (page >= limite) {
      btnMore.hidden = true;
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: 'white',
        color: 'blue',
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      titleColor: 'white',
      message: 'Oops!',
      messageColor: 'white',
      balloon: true,
      position: 'topRight',
      progressBarColor: 'black',
      transitionIn: 'bounceInRight',
    });
  }
}
