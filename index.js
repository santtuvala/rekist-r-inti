const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const postinumero = document.getElementById('postinumero');
const osoite = document.getElementById('osoite');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const postinumeroValue = postinumero.value.trim();
    const osoiteValue = osoite.value.trim();


    if(usernameValue === '') {
        setError(username, 'Username is required');
    }else if (usernameValue.length < 6 ) {
            setError(username, 'Username must be atleast 6 characters')
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
    if(postinumeroValue === '') {
        setError(postinumero, 'Postal code is required');
    } else if (postinumeroValue.length !== 5 ) {
        setError(postinumero, 'Postal code must be 5 characters long')
    } else {
        setSuccess(postinumero);
    }
    if(osoiteValue === '') {
        setError(osoite, 'Address is required');
    } else {
        setSuccess(osoite);
    }
}
document.getElementById("sub").addEventListener("click",function(){
    var s=document.getElementById("rbtn1");
    var n=document.getElementById("rbtn2");
    if(!s.checked && !n.checked){
        alert("Valitse sukupuoli");
    }
})
document.getElementById("sub").addEventListener("click",function(){
    var s=document.getElementById("rbtn11");
    var n=document.getElementById("rbtn22");
    if(!s.checked && !n.checked){
        alert("Valitse kieli");
    }
})
function Validate()
            {
                var e = document.getElementById("ddlView");
                var strUser = e.options[e.selectedIndex].value;

                if(strUser==0)
                {
                    alert("Valitse maa");
                }
            }