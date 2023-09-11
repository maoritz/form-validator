const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input,message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = document.querySelector('small')
    small.innerText = message
}

function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
 
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    if(username.value === '') showError(username,'username is required')
    else showSuccess(username)
})

form.addEventListener('submit',function(e){
    e.preventDefault()
    if(email.value === '') showError(email,'email is required')
    else showSuccess(email)
})

form.addEventListener('submit',function(e){
    e.preventDefault()
    if(password.value === '') showError(password,'password is required')
    else showSuccess(password)
})

form.addEventListener('submit',function(e){
    e.preventDefault()
    if(password2.value === '') showError(password2,'password2 is required')
    else showSuccess(password2)
})