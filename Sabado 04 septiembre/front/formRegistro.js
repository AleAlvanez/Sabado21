const host = 'http://localhost'
const port = 3000

async function enviarAlerta(){
    nombre = document.getElementById('nameU').value;
    primerAp = document.getElementById('lastnameU').value;
    usuario = document.getElementById('Username').value;
    correo = document.getElementById('email').value;
    password = document.getElementById('password1').value;
    password_conf = document.getElementById('password2').value;
    telefono = document.getElementById('phonenumber').value;
    user = {
        usuario : usuario,
        nombre : nombre,
        primer_ap : primerAp,
        correo : correo,
        password : password,
        num_celular: telefono
    }
  // return user;
  console.log(user);

  }