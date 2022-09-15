const fetchPost = async (page, limit)=>{
    let url = `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`;
    return fetch(url);
};

export {fetchPost};