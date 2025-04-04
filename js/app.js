document.getElementById('Alumnonuevo').addEventListener('submit', function(){
    event.preventDefault();

    
    const nombre = document.getElementById('name').value.trim();
    const cuenta = document.getElementById('acount').value.trim();
    const charla = document.getElementById('talk').value.trim();
    const cupo = document.getElementById('place').value.trim();

    const newAlmn = {
        nombre: nombre,
        no_cuenta: cuenta,
        charla: charla,
        cupo: parseInt(cupo)
    }

    fetch('http://148.213.3.154/proyecto/estudiantes/api/v1/alumno', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newAlmn)
    })
    .then(response => response.json())
    .then(result => {
        alert('Alumno registrado');
        console.log(result);
    })
    .catch(error => {
        alert('No se pudo registrar');
        console.error('Error al registrar', error)
    })

    document.getElementById('Alumnonuevo').reset();

});