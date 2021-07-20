import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: {'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'}
});

export async function getExhibits() {
    try {
      const response = await axiosInstance.get('/exhibits/');
      console.log(response);
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
        console.log(response);
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
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteOneExhibits(id) {
    try {
        const response = await axiosInstance.delete(`/exhibits/${id}`);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteAllExhibits() {
    try {
        const response = await axiosInstance.delete('/exhibits/all');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

