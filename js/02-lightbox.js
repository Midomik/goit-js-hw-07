import { galleryItems } from './gallery-items.js';
// Change code below this line

const galaryList = document.querySelector(".gallery");

function renderGalery(imgObject) {
    const renderPhoto = imgObject.map(item=>{ 
        return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}"> 
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
        </li>`
    }).join("");

    galaryList.insertAdjacentHTML('afterbegin', renderPhoto);

}

renderGalery(galleryItems);




   const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});


