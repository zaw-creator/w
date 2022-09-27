const email = document.querySelector('#email')
const emailLabel = document.querySelector('#email-label')
const password = document.querySelector('#password')
const passwordLabel = document.querySelector('#password-label')
const eye = document.querySelector('#eye')

email.addEventListener('keyup', () => {
  if (email.value != '') {
    emailLabel.style.transform = 'translateY(0)'
    emailLabel.style.fontSize = '.7em'
  } else {
    emailLabel.style.transform = 'translateY(20px)'
    emailLabel.style.fontSize = '1em'
  }
})

password.addEventListener('keyup', () => {
  if (password.value != '') {
    passwordLabel.style.transform = 'translateY(0)'
    passwordLabel.style.fontSize = '.7em'
  } else {
    passwordLabel.style.transform = 'translateY(20px)'
    passwordLabel.style.fontSize = '1em'
  }
})

eye.addEventListener('click', () => {
  if (!eye.classList.contains('fa-eye-slash')) {
    eye.classList.add('fa-eye-slash')
    eye.classList.remove('fa-eye')
    password.type = 'text'
  } else {
    eye.classList.remove('fa-eye-slash')
    eye.classList.add('fa-eye')
    password.type = 'password'
  }
})