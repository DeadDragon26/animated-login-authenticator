const signuplinkbtn = document.querySelector('.signup-linkbtn');
const signinlinkbtn = document.querySelector('.signin-linkbtn');
const loginpage =document.querySelector('.loginpage');

signuplinkbtn.addEventListener('click',() => {
    loginpage.classList.toggle('active');
});
signinlinkbtn.addEventListener('click',() => {
    loginpage.classList.toggle('active');
});

function validate(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
}
if (username=="aman" && password=="12345")
{
    alert('login successfull')
}
else{
    alert("login failed")
};
