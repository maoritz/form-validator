const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show Error outline
function showError(input,message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// Show Success outline
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// Check email is valid
function checkEmail (input) {
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())){
        showSuccess(input)
    } else{
        showError(input,'Email is not valid')
    }
  };

// Check required fields
function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

// Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check input length
function checkLength(input,min,max){
    if(input.value.length < min)return showError(input,`${getFieldName(input)} must be at least ${min} characters`)
    if(input.value.length > max)return showError(input,`${getFieldName(input)} must be maximum of ${max} characters`)
    return showSuccess(input)
}

//  Check password match
function checkPasswordMatch (value1,value2){
    if(value1.value !== value2.value) return showError(value2,'Your passwords do not match')
}

// Event listeners
form.addEventListener('submit',function(e){
    e.preventDefault()

    checkRequired([username,email,password,password2])
    checkLength(username,3,15)
    checkLength(password,6,25)
    checkEmail(email)
    checkPasswordMatch(password,password2)
})