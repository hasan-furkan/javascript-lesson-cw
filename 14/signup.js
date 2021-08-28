window.onload = (event) => {
    fillFormInput();
    console.log('page is fully loaded');
  }; 


const fillFormInput = () => {
    let email = document.getElementById("email").value = "eve.holt@reqres.in";
    let password = document.getElementById("password").value = "pistol";
    localStorage.setItem("email", email); 
}

// XMLHTTPREQUEST

// const apiRegister = () => {
//     let email = localStorage.getItem("email");
//     let password = document.getElementById("password").value;
//     const bodyData = {
//         email : email,
//         password : password
//     } 
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://reqres.in/api/register");
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(JSON.stringify(bodyData));
//     xhr.onload = function(){
//         let data = JSON.parse(xhr.responseText);
//         if(data.id != "0") {
//             console.log(data);
//             localStorage.setItem("token", data.token)
//             console.log(data);
//         }
//     }
// }


// fetch method

// const apiRegister = async ()  => {
//     let email = localStorage.getItem("email"); 
//     let password = document.getElementById("password").value;
//        const bodyData = {
//         email : email,
//         password : password
//     }
//     await fetch("https://reqres.in/api/register", {
//         method: "POST",
//         headers: {
//             "Content-Type":  "application/json"          
//         },
//         body: JSON.stringify(bodyData)        
//     })
//     .then(Response => Response.json())
//     .then(data => {
//         if (data.id != 0) {
//             console.log(data)

//             alert("welcome " + email.split("@")[0])
//             // localStorage.setItem("token", data.token)
//             // console.log(data)
//         }
//     })
//     .catch((e)=> console.log(e))
// }


// axios method

const apiRegister = async ()  => {
    let email = localStorage.getItem("email"); 
    let password = document.getElementById("password").value;
     
    const response = await axios({
        url: "https://reqres.in/api/register",
        method: "post",
        data: {
            email : email,
            password : password
        }
    });
    if(response.data.id != 0){
        console.log(response)
        console.log(response.data)
        window.location.href ="userList.html"
    } 
}

