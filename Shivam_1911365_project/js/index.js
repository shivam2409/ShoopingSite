

let myAcc = document.querySelector('.top ul li.myAccount');
// console.log(myAcc);


myAcc.onclick = function () {
    document.querySelector('.contact').style.display = "block";
    document.querySelector('.loda').style.filter = 'blur(10px)';
}

let clo = document.querySelector('#close');
console.log(clo);

clo.onclick = function () {
    document.querySelector('.contact').style.display = "none";
    document.querySelector('.loda').style.filter = '';   
}


// --------------Login

let users = [{
    name: 'Shivam Patel',
    email: 'shivampatel24@gmail.com',
    password: '1234'
},
{
    name:'Admin',
    email: 'admin',
    password: '12345'
},
{
    email: 'Kishanpatel24@gmail.com',
    password: '12346'
}]


let submit = document.querySelector('.submit');


submit.onclick = function(event){
    event.preventDefault();
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    let userFound = false;
    users.forEach(function(user){
        if(email.toUpperCase() == user.email.toUpperCase()){
            userFound = true;
            if(password.toUpperCase() == user.password.toUpperCase()){
                alert('welcome');
                document.querySelector('.myAccount a').innerText = user.name;
                document.querySelector('.contact').style.display = 'none';
                document.querySelector('.loda').style.filter = ''; 
            }
            else{
                alert('wrong password')
            }
        }
    });

    if(!userFound){
        alert('user not found');
    }
    
}





