import axios from "axios";

const keyApi="55724103-14f076f0e5cd96e081e15651b"
const urlApi="https://pixabay.com/api/"

export function getImagesByQuery(query){
   return axios(urlApi, {params:{
        key:keyApi,
        q:query,
        image_type:"photo",
        orientation:"horizontal",
        safesearch:true
    }})
    .then(({data})=>data)


}
