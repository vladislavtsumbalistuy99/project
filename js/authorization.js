var i;
var users = getRequest("http://localhost:3000/users")

function changeForm(index){
 var authorize = document.getElementsByClassName("authorization");
 var register = document.getElementsByClassName("registration");

  if (index == 1 ){
    authorize[0].classList.remove("activeBar");
    register[0].classList.add("activeBar");
    index = 2;
  }
  else if(index == 2){
    register[0].classList.remove("activeBar");
    authorize[0].classList.add("activeBar");
    index = 1;
  }
}

var regBtn = document.getElementById("reg-btn");
regBtn.addEventListener("click",
function addNewUser(e) {
  var newUserLogin = document.getElementById("login-reg").value;
  var newUserPassword = document.getElementById("pass-reg").value;
  postRequest(  {
    "login": newUserLogin,
    "password": newUserPassword
  },"http://localhost:3000/users");
  location.reload();
  e.preventDefault();
})

var authBtn = document.getElementById("auth-btn");
authBtn.addEventListener("click",
function authorize(e){
  var login = document.getElementById("login").value;
  var password = document.getElementById("pass").value;

  for (i = 0; i < users.length; i++){
    if (users[i].login == login && users[i].password == password){
      saveSessionStorage(login);
      location.reload();
      break;
    } else if (i == users.length - 1 && users[i].login != login && users[i].password != password){
      alert("Даного користувача не існує, будь ласка, провірте правильність вводу!")  
    }
  }
  e.preventDefault();
})

function saveSessionStorage(login){
  sessionStorage.setItem("login",login);
}

function checkAuthorization(){
  if (sessionStorage.getItem("login") != null){
    document.getElementById('showUser').innerHTML = `
    <p id="user-sign-out">
    Ви ввійшли як ${sessionStorage.getItem("login")}
    <p><i class="fas fa-sign-out-alt"></i>
    Вийти</p></p>
    `;
    document.getElementById('sidebar-auth').style.display = "none";
  }
  else{
    document.getElementById('showUser').innerHTML = ``;
    document.getElementById('sidebar-auth').style.display = "block";
  }
}
checkAuthorization();

var signOutBtn = document.getElementById("showUser");
signOutBtn.addEventListener("click",
function signOut(){
  sessionStorage.removeItem("login");
  location.reload();
})


