// Function using arrow
const sayHello = () => {
    console.log("Hello!");
}

// One line functions does not need braces
const sayHello1 = () => console.log("Hello");

// One line returns
const sayHello2 = () => "Hellooo";

// One Line Object Literal Return 
const sayHello3 = () => ({ msg: "hello" });

// Single param doesnot need parenthesis
const sayHello4 = name => console.log(`Hello ${name}`);

// Passing multiple params
const sayHello5 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

const users = ["Akhil", "Arjun", "Sravani"];

const lens = users.map((name) => name.length);

sayHello();
sayHello1();
console.log(sayHello2());
console.log(sayHello3());
sayHello4("Akhil");
sayHello5("Akhil", "Jayan");
console.log(lens);

document.getElementById("button3").addEventListener("click", getApi);

function getApi() {
    fetch("https://api.github.com/users")
        .then((res) => (res.json()))
        .then((data) => {
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch((err) => console.log(err))
}