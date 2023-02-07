fetch("https://randomuser.me/api/")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })


let content = document.getElementById("content")
