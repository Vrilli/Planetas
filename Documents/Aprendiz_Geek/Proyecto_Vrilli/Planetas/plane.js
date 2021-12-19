
const ordenar = document.getElementById('btn_ordenar');
const borrar = document.getElementById('btn_borrar');
const filtrar = document.getElementById('btn_filtrar');
const enviar = document.getElementById('btn_enviar');
const buscar = document.getElementById('btn_buscar');
const planeta = document.getElementById('Container2')

document.addEventListener('DOMContentLoaded', () => {
    mostrarVacio();
})

planeta.addEventListener('click', () => {
    mostrarPlaneta();
})

ordenar.addEventListener('click', () => {
    mostrarPlanet();
})

borrar.addEventListener('click', () => {
    mostrarVacio();
})


buscar.addEventListener('click', () =>{
    let planetas = document.getElementById('Container2').value;
    const planet = datoPlanetas => datoPlanetas.planet == planet;
    const arrPlanet = data.filter(planetas);
    console.log(arrPlanet)
    lista.innerHTML = ``;
    arrPlanet.forEach(datoPlanetas =>{
        lista.innerHTML += `
        <ul>
            <li>#: ${datoPlanetas.numero}</li>
            <li>Planeta: ${datoPlanetas.planetas}</li>
            <li>Distancia: ${datoPlanetas.Distancia}</li>
            <li>Tamaño: ${datoPlanetas.tamano}</li>
        </ul>
        `
    })
})



