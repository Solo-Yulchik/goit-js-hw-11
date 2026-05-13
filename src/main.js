import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery,gallery,loader,showLoader,hideLoader } from "./js/render-functions";


const form = document.querySelector(".form")


form.addEventListener("submit", handleSubmit)


function handleSubmit(event){
    event.preventDefault();
    const inputValue=event.currentTarget.elements["search-text"].value.trim()
    if(inputValue===""){
    iziToast.warning({
    position:`topRight`,
    message: 'Please fill out this field.',
    backgroundColor: `white`
});
    
    } else{
        clearGallery();
        showLoader();
        
        getImagesByQuery(inputValue)
        .then(({data:{hits}})=>{
            if(hits.length===0){
                iziToast.error({
    position:`topRight`,
    message: 'Sorry, there are no images matching your search query. Please try again!',
    backgroundColor: `red`,
    messageColor:"white"
});

            } else{
                createGallery(hits)
                
            }
        })
        .catch(err=>{console.log(err);
        iziToast.error({
    position:`topRight`,
    message: 'Sorry, there are no images matching your search query. Please try again!',
    backgroundColor: `red`,
    messageColor:"white"
})
        })
        .finally(()=>{
        hideLoader();
        event.target.reset();
        })
        
    }
}
