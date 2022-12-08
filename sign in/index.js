var email = document.getElementById("email")
var password = document.getElementById("password")
var btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    var userList = JSON.parse(localStorage.getItem("users"))
    var userInfo=""
    userList.find(e=>{
        if (e.email==email.value){
           userInfo=e
        } else {
            console.log("email is not find")
        }
    })
    if(userInfo.email==email.value && userInfo.password==password.value){
        location.href=""
    }else if(userInfo.email==email.value && userInfo.password!=password.value){
        alert("invalid password")
    }else {
        alert("invalid email & password")
    }

   
})