import apiClient from "../Plugins/Axios.js";

export async function getData(url) {
    try {
        const response = await apiClient.get(url);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('error en la peticion GET', error);
        throw error;
    }
}

export async function postData(url, data){
    try {
        console.log(data)
        const response = await apiClient.post(url, data);
        return response.data;
    } catch (error){
        console.error('Error en la peticion POST', error);
        throw error;
    }
}

export async function putData(url, data) {
    try {
        
        const response = await apiClient.put(url,data);
        return response.data;
    } catch (error) {
        console.error('erro en la peticion PUT', error);
        throw error;    
    }
}