import { doFetch} from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import axios from "axios";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form-search');
const btnMore = document.querySelector('.more-btn');
const placeImg = document.querySelector('.card-container');
const loader = document.querySelector('.loader');
loader.style.display = "none";
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
btnMore.disabled = true;

async function handleSubmit(event) {
  event.preventDefault();
  placeImg.innerHTML = '';
  loader.style.display = "block";
  btnMore.hidden = true;
  
  page = 1;
  
  const nameImg = event.currentTarget.elements.text.value;
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
          position: 'topRight'
          
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
      console.log(error);
      iziToast.error({
        title: 'Error',
        titleColor: 'white',
        message:
          'Oops!',
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
}
async function searchMore() {
  btnMore.disabled = true;
  page += 1;
  
  try {
    const value = await doFetch(page);
    placeImg.insertAdjacentHTML('beforeend', createMarkup(value));
    btnMore.disabled = false;
    if (page >= limite) {
     btnMore.hidden = true;
    }
  } catch (error) {
    alert("Error")
  }
}