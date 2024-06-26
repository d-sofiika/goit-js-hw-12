
import axios from 'axios';


export async function doFetch(nameImg, page) {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "43384169-ca1a4d081c57b6f9f4fa25679";


    
    const response = await axios({
        baseURL: BASE_URL, params: {
            key: API_KEY,
            q: nameImg,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 15,
            page,
    
        },
    });
    return response.data;
        
}
