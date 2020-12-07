async function myFunc() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("hello"), 1000);
    });

    const error = false;

    if (!error) {
        const res = await promise;
        return res;
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }

}

myFunc()
    .then(res => console.log(res))
    .catch(err => console.log(err));

async function getUsers() {
    // Await the response of the fetch call
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Only proceed once its resolved
    const data = await response.json();

    // only proceed once sencond promise is resolved
    return data;
}

getUsers()
    .then(data => console.log(data))
    .catch(err => console.log(err))