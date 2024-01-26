const API_URL = 'http://localhost:8080/tasks'

export const getTodos = async() => {
    const response = await fetch(API_URL,{})
    const data = response.json();
    return data;
}

