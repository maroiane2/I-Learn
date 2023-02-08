fetch("https://randomuser.me/api/")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    })


let content = document.getElementById("content")




var b1 = {
    "name": "marouane",
    "age": 18
};

console.log(b1);