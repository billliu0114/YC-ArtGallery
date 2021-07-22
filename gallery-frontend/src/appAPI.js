import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://yc-art-gallery.herokuapp.com',
    timeout: 1000,
    headers: {'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'}
});

export async function getExhibits() {
    try {
      const response = await axiosInstance.get('/exhibits/');
      return response.data;
    } catch (error) {
      console.log(error);
    }
}

export async function postExhibits(item) {
    try {
        const response = await axiosInstance.post('/exhibits/',
        {
            "name": item.name,
            "url": item.url,
            "detail": item.detail
        });
    } catch (error) {
        console.log(error);
    }
}

export async function patchExhibits(id, content) {
    try {
        const response = await axiosInstance.patch(`/exhibits/${id}`,
        {
            "detail": content
        });
    } catch (error) {
        console.log(error);
    }
}

export async function deleteOneExhibits(id) {
    try {
        const response = await axiosInstance.delete(`/exhibits/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteAllExhibits() {
    try {
        const response = await axiosInstance.delete('/exhibits/all');
    } catch (error) {
        console.log(error);
    }
}

