var objectPeople = [
    {username: "sawhsupyaemon@gmail.com"} , {password: "16.1.2023"}
 ];

 function getInfo() {
    let username =document.getElementById("username").value;
    let password = document.getElementById("password").value;
    for (i = 0 ; i < objectPeople.length; i++){
       if(username == objectPeople[i].username && password == objectPeople[i].password)
       {
          location.href="/ro.html";
          alert("Password is right!!")
       }else {         
         
          alert("Password is wrong!!")
       }
    } 
 };
