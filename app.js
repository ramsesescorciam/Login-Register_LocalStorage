
document.getElementById('Login').addEventListener('submit', function(event){
     event.preventDefault()
     var username = document.getElementById('u').value
     var password = document.getElementById('p').value

     var storedUsername = localStorage.getItem('user')
     var storedPassword = localStorage.getItem('pass')

     if (username === storedUsername && password === storedPassword){
         alert('Inicio de sesión exitoso')
     }else{
         alert('Nombre de usuario ocontraseña incorrectos')
     }
})