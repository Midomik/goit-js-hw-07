import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galaryList = document.querySelector(".gallery");




function renderGalery(imgObject) {
    const renderPhoto = imgObject.map(item=>{ 
        return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}"> 
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
        </a>
        </li>`
    }).join("");

    galaryList.insertAdjacentHTML('afterbegin', renderPhoto);

}

renderGalery(galleryItems);


const openOriginPhoto = (e) => {
    e.preventDefault();

    if (e.currentTarget === e.target){
         return;
    }


    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `)
    instance.show()
    
}

galaryList.addEventListener("click", openOriginPhoto);