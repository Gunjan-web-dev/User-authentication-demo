function register(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username === "" || password === ""){
        alert("Please enter valid details!!")
        return;
    }
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    alert("Registration Done Successfully!!");
    window.location.href = "login.html";
}

function login(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username === "" || password === ""){
        alert("Please enter username and password!")
        return;
    }

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if(username === storedUsername && password === storedPassword){
        localStorage.setItem("loggedInUsername",username);
        window.location.href = "welcome.html";
        alert("Logged In Successfully!!");
    }else{
    alert("Invalid username of password!!");
    }
}

