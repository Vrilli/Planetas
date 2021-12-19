enviar.addEventListener('click', ()=>{
    let numero = document.getElementById('Container1').value;
    let planeta = document.getElementById('Container2').value;
    let distancia = document.getElementById('Container3').value;
    let tamano = document.getElementById('Container4').value;

    let planetasG = {
        numeroP : numero,
        planetas : planeta,
        distanciaP : distancia,
        tamanoP : tamano,
    }

    localStorage.setItem('Planetas', JSON.stringify(planetasG));
})
