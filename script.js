document.getElementById('contact').addEventListener('submit', function(event) {event.preventDefault();


const email = document.getElementById('email').value;
const confirmemail = document.getElementById('confirmEmail').value;

if(email != confirmemail) {
    alert('Email addresses do not match. Please try again');
} else{
    alert('Email addreses match. Excellent!');
}
})