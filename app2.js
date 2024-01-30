
document.getElementById('Register').addEventListener('submit', function(event){
    event.preventDefault()
    var username = document.getElementById('u').value
    var password = document.getElementById('p').value

    localStorage.setItem('user',username)
    localStorage.setItem('pass',password)
    alert('Usuario registrado con exito')
})