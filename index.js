const axios = require("axios").default;

// Get запрос

// axios.get(
//     'https://fortnite-api.com/v1/map',  // URL
//     {
//         headers: {
//         'Contet-Type': "application/json"},
//         params: {
//             lang: "ru"}
//     } // Заголовки, параметры, авторизация
//     )
//     .then(
//         res => {
//             console.log(res.data);
//         }
//     )
//     .catch(e => {
//         console.error(e);
//     });

// axios.post('https://jsonplaceholder.typicode.com/posts', {
//     userID: 22,
//     title: "My Title",
//     body: "My body"
// }) 
//     .then(res => console.log(res))
//     .catch(e => console.error(e))


//Аналогичный запрос Post

axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
        userID: 22,
        title: "My Title",
        body: "My body"
    }
})

axios.post("",{},)