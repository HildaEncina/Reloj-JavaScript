
const horaContainer = document.querySelector('.hora')


//setInterval se ejecuta infinitamente, y se corta con el clearInterval(actualizarHora)
const actualizarHora = setInterval(function(){

    // Refactorizado
    const date = new Date()
    
    const manejoZero= numero => numero < 10 ? '0' + numero : numero 

    horaContainer.innerHTML = `${(manejoZero(date.getHours()))}: ${manejoZero(date.getMinutes())}: ${manejoZero(date.getSeconds())}`
    //horaContainer.innerHTML = horas

})

const manejoZero= numero => numero < 10 ? '0' + numero : numero 
