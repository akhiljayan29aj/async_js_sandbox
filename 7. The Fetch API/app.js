document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getApi);

function getText(){
    fetch('./test.txt')
        .then(function(response){
            return response.text();
    })
    .then(function(data){
        document.getElementById("output").innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    });
}

function getJson(){
    fetch("./posts.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>
            <li>${post.body}</li>`
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
}

function getApi(){
    fetch("https://api.github.com/users")
    .then(function(res){
        return (res.json());
    })
    .then(function(data){
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    })
}