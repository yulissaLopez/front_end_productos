const form = document.getElementById("userForm");

console.log("bla bla bla")
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const firstname = document.getElementById('firstName').value;
    const lastname = document.getElementById('lastName').value;
    const direccion = document.getElementById('direccion').value;
    const pais = document.getElementById('pais').value;

    console.log(firstname, lastname)
    try {
        const response = await fetch('http://127.0.0.1:8000/usuarios/sign-up/', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ username, email, password, firstname, lastname, direccion, pais})
        });

        if (response.ok){
            // Registro exitoso, manejar la respuesta
            console.log('¡Registro exitoso!');
            alert('¡Usuario registrado exitosamente!');
            form.reset()
        }else{
            // Registro fallido, manejar el error
            const errorData = await response.json();
            console.error('Error en el registro:', errorData);
            alert('Error en el registro: ' + (errorData.message || 'Inténtelo de nuevo'));
        }
    }catch(error){
        console.error('Error de red:', error);
        alert('Error de red: Verifique su conexión.');
    }
})

// Funcion para iniciar sesion

// function login(username, password) {
//     fetch('http://127.0.0.1:8000/login/',{
//         method : 'POST',
//         headers : {
//             'Content-Type': 'application/json',
//         },
//         body : JSON.stringify({
//             username : "Prueba1",
//             password : "12345678"
//         })
//     })
//     .then(response => response.json())
//     .then(date => {
//         if (data.access) {
//             // Guardar el token en el almacenamiento local
//             localStorage.setItem('access_token', data.access);
//             localStorage.setItem('refresh_token', data.refresh);
//             console.log('Usuario autenticado');
//         }else {
//             console.log('Credenciales incorrectas');
//         }
//     })
//     .catch(error => console.error('Error:', error));
// }

// // Función de prueba para hacer login
// function testLogin() {
//     const username = 'usuario_prueba'; // Usuario de prueba
//     const password = 'contraseña_prueba'; // Contraseña de prueba
//     login(username, password);
// }

// // Agregar el evento al botón para llamar la función de login
// document.getElementById('test-login-button').addEventListener('click', testLogin);