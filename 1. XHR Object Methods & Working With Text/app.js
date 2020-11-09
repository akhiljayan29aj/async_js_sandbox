document.querySelector('#button').addEventListener('click', loadData);

function loadData(){
  // Create a XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', './data.txt', true);

  console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200){
      // console.log(this.responseText);
      document.getElementById('output').textContent = this.responseText;
    }
  }

  // OLDER METHODS
  // xhr.onreadystatechange = function(){
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function(){
    console.log('Request Error');
  }

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connenction established
  // 2: request received
  // 3: processing request
  // 4: resquest finished and response is ready



  // HTTP Statuses
  // 200: "OK"
  // 403: "FORBIDDEN"
  // 404: "NOT FOUND"
}