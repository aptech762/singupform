var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var email = document.getElementById("email")
var password = document.getElementById("password")
var btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    var usersArray = []
    var userValues = {
        fname : fname.value,
        lname : lname.value,
        email : email.value,
        password : password.value
    }
    usersArray.push(userValues)
    if(localStorage.getItem("users")){
        var allUsers  = JSON.parse(localStorage.getItem("users"))
        var addUsers = [...allUsers,userValues]
        localStorage.setItem("users",JSON.stringify(addUsers))
    } else {
        localStorage.setItem("users",JSON.stringify(usersArray))
    }
})
