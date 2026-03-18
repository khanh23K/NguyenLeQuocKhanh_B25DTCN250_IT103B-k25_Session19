let profile = [
    {  fullname: "Nguyễn Văn A",  username: "nguyenvana",  password: "123456"}
];
let names = document.getElementById("name");
let username = document.getElementById("userName");
let password = document.getElementById("password");
let checkPassword = document.getElementById("checkPassword");
let button_task = document.getElementById("button_task");

button_task.addEventListener("click",()=>{
    if(names.value ==""){
        alert("Tên đăng nhập ko đc để trống");
    }
    if(username.value.trim().length <= 4){
        alert("tên đăng nhập quá ít");
    }else if (password.value.length <= 6) {
        alert("Mật khẩu quá ít");
    } else if(password.value.length != checkPassword.value.length) {
        alert("Mật khẩu ko trùng khớp");
    }
    
    let profileNew = {
            fullname: names.value,
            username: username.value,
            password: password.value 
        };
        profile.push(profileNew);
        localStorage.setItem("listProfile",JSON.stringify(profile));

       alert("đăng kí thành công");
}); 
a
