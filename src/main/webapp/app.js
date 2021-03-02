const title_info = document.querySelector(".title_info")
const title_details = document.querySelector(".title_details")

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Spring Boot API with localhost users
//Add users via console before use /*   */

fetch('http://localhost:2021/users')
    .then(response => response.json())
    .then(function (data) {
        console.log(data);
        let userData = data[getRandomInt(data.length)];
        let name = "Hello, my name is " + userData.name + " " + userData.lastname;
        let details = "I have position " + userData.position + " developer.  My username is " + userData.username;

        title_info.innerHTML = name;
        title_details.innerHTML = details;
  })

//If you want use Random API for get user info delete comment fields
//Fields info by link https://randomuser.me/api/?gender=female if you want add new fields, this link has params for this.

/* fetch('https://randomuser.me/api/?gender=female')
    .then(response => response.json())
    .then(function (data) {
        console.log(data);
        let userData = data.results[0];
        let name = userData.name.first + " " +  userData.name.last;
        title_info.innerHTML = name;
    }) */



