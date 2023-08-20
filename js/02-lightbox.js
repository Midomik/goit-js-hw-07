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


// function renderSwiperGalery(imgObject){
//     const renderSwiperPhoto = imgObject.map(item=>{ 
//         return `<div class="gallery">
//         <a href=""><img src="" alt="" title=""></a>
//         </div>`
//     }).join("");
    
// }



const openSwiper =(e) =>{
    e.preventDefault();
    if (e.currentTarget === e.target){
        return;
   }
   console.log("lll")

   var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});
}

galaryList.addEventListener("click", openSwiper)