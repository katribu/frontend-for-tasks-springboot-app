const API_URL = 'http://localhost:8080/tasks'

export const getTodos = async() => {
    const response = await fetch(API_URL)
    const data = response.json();
    return data;
}


export const createNewTask = async (description, severity,assignee,storyPoint) =>{
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            description,
            severity,
            assignee,
            storyPoint
        }
    })

    const data = await response.json();
    return data;
}
