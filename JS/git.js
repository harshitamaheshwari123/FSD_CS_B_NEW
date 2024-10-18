
const url = "https://api.github.com/users/harshitamaheshwari123";

const response = fetch(url)
response.then((response) => {
    response.json();
    return response;
}).then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
}).finally(() => {
    console.log("Finally Executed");
})