 const btn = document.getElementById('signUpButton')
 const btnn = document.getElementById('compareButton')
 const emailElement = document.getElementById('inputEmail');
 const passwordElement = document.getElementById('inputPassword');
 const nameElement = document.getElementById('inputName');




function storeInputValues() {

    const emailElement = document.getElementById('inputEmail');
    const passwordElement = document.getElementById('inputPassword');
    const nameElement = document.getElementById('inputName');
    
    let emailValue = emailElement.value;
    let passwordValue = passwordElement.value;
    let nameValue = nameElement.value;
    
    if (emailValue === '' || passwordValue === '' || nameValue === '') {
        const warning = document.querySelector(".warning");
        warning.innerText = "All inputs are required";
    } else {

        localStorage.setItem('emailValue', emailValue);
        localStorage.setItem('passwordValue', passwordValue);
        localStorage.setItem('nameValue', nameValue);
        

        const pop = document.querySelector(".pop");
        pop.innerText = "success";
        

        const warning = document.querySelector(".warning");
        warning.innerText = "";
        emailElement.value ='';
        passwordElement.value = '';
        nameElement.value = '' ;

 
    }
}

function compareInputValues() {

    let emailElement = document.getElementById('inputEmail');
    let passwordElement = document.getElementById('inputPassword');
    

    let newEmailValue = emailElement.value;
    let newPasswordValue = passwordElement.value;
    

    let storedEmailValue = localStorage.getItem('emailValue');
    let storedPasswordValue = localStorage.getItem('passwordValue');
    

    let isEmailSame = newEmailValue === storedEmailValue;
    let isPasswordSame = newPasswordValue === storedPasswordValue;
    

    if (isEmailSame && isPasswordSame) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration completed successfully",
            showConfirmButton: false,
            timer: 1500
          });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Unsuccessful registration!",

          });
    }
}


function switchMode() {

    const pop = document.querySelector ('.pop');
    pop.innerText = '';
    var nameElement = document.getElementById('inputName');
    var signUpButton = document.getElementById('signUpButton');
    var loginButton = document.getElementById('compareButton');
    var linkElement = document.querySelector('.link');
    
  
    if (signUpButton.style.display === 'none') {
  
        nameElement.style.display = 'block';
        signUpButton.style.display = 'block';
        loginButton.style.display = 'none';
        linkElement.innerText = 'Sign in';
    } else {

        nameElement.style.display = 'none';
        signUpButton.style.display = 'none';
        loginButton.style.display = 'block';
        linkElement.innerText = 'Sign up';
    }
}


document.getElementById('signUpButton').addEventListener('click', storeInputValues);


document.getElementById('compareButton').addEventListener('click', compareInputValues);


document.querySelector('.link').addEventListener('click', switchMode);


document.getElementById('compareButton').style.display = 'none';
