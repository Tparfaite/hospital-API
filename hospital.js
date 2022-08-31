const login1=document.getElementById("login");
const form1=document.getElementById("form1");
const main=document.getElementById("main");
const dashboard=document.getElementsByClassName("dashboard")[0];
console.log(dashboard);
login1.addEventListener("click",e=>{
    e.preventDefault();
    form1.classList.toggle("showForm1");
})

const getToken=async()=>{

const phone=document.getElementById("phone").value;
const password=document.getElementById("password").value;
const formData=new FormData();
formData.append("phone",phone);
formData.append("password",password);

try{
    const token=await (await fetch("https://mdbackend.herokuapp.com/api/authenticate",{
        method:"POST",
        headers:{"Accept":"application/json"},
        body:formData
    })).json();
console.log(token);
if(phone=="0785189326" && password=="12345678" ){
    main.classList.toggle("hideMain");
    dashboard.classList.toggle("showDashboard");
}

}
catch(error){console.log(error);}

}

const button1=document.getElementById("button1").addEventListener("click",e=>{
    e.preventDefault();
    console.log("helloooo");
    getToken();
})

localStorage.setItem("token","eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTQ5N2ZiNWRmODE2MjgwOTdmODkzMjAyNWMzZTBlY2JhOGE3OGRiYmQ3YjE2ZDIwNDU2NjRhNTE3ZmQwZGQ4YjJkZGUyZWU2NzFhNDMwZjIiLCJpYXQiOjE2NjE5NTc5MzAsIm5iZiI6MTY2MTk1NzkzMCwiZXhwIjoxNjkzNDkzOTMwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.LrF2lwTBdoRhTFf5hilWE59IjQiOXMm5dbuSB-jxqd2hokMBwYcUA2SuB9TlvtJpDu5-3oP-h8pA3bfZX7IE3b5tONXXs1wi5RFyhis7RMM9Kz4XjFLX5F12bW-lajvAqmoFkfwQcr3omHZLaO1zASJRvU0f3p47Tg1LvKc43JBJGerTqSfeMpCUJ-Eh5gvj8KTeBKpv7yCQOE3G9qtefGxtYtFlKzZ051id0N97wDt3cXXsXaMxXtbpBx9lZEOn7GABLKsblQPOQKLERGy4f5EtQpSLNcVbrLAFBG4YeDdEV-rHrdM63qkDzQXPTgfAtXLD1kar8-hDmmBeOmcWx1T4QZPR-IoJqWErwgkDZiTdxKpQl0Qn42FLE1zVdajHYTo3RB_UTJiWT9aK12GyPTMsjuXE9NuTOX_ihlzw3Azi8vzrYbEg1Lenc6nyysKKWkd9m__XEKtDwxbZY_Yrfy6dEt-0v655ukLvoQWlMhRy8G3jREO09VkRf6z21gpbocpt4QGGucXLOwXvnO2tXZmkySve3t7D4XLhdwtoIFQJ0Tepd6hSMiqiI-khRU-zwBCV9AtkRE1bYh5xOJWN9bqdsy4QVZywcoL0IlZsnSlBQXDIzs_B56TElXwj3tv2E6wFZ49Hbl_yNO-0S_inzv78C58PS1trfW7KlFmA9pw");

const form2=document.getElementById("form2");
const button2=document.getElementById("button2").addEventListener("click",e=>{
form2.classList.toggle("showForm2");
})
const showForm2=document.getElementsByClassName("showForm2")[0];
const form3=document.getElementsByClassName("form3")[0];
const createHos=document.getElementById("createHos").addEventListener("click",e=>{
form3.classList.toggle("showForm3");
form2.classList.toggle("hidingForm2");
})

const fa=document.getElementsByClassName("fa-times")[0].addEventListener("click",e=>{
    form2.classList.toggle("hideForm2");
})


const createHospital=async()=>{

const hospital=document.getElementById("hospital").value;
const code=document.getElementById("code").value;
const type=document.getElementById("type").value;
const district=document.getElementById("district").value;
const sector=document.getElementById("sector").value;
const cell=document.getElementById("cell").value;
const village=document.getElementById("village").value;
const email=document.getElementById("email").value;



const formData=new FormData();
formData.append("hospital name",hospital);
formData.append("code",code);
formData.append("type",type);
formData.append("district",district);
formData.append("sector",sector);
formData.append("cell",cell);
formData.append("village",village);
formData.append("email",email);

const creating=await (await fetch("https://mdbackend.herokuapp.com/api/create-hospital",{
    method:"POST",
    headers:{"Accept":"application/json"},
    body:formData
})).json()
console.log(creating);
console.log("heyy");
}
const button4=document.getElementById("button4").addEventListener("click",e=>{
    e.preventDefault();
    createHospital();
})