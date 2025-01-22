document.querySelectorAll('.semaforo').forEach((semaforo, index) => {
const luces = semaforo.querySelectorAll('.foco');
let contador=0; //0: verde, 1: amarillo, 2: rojo
function cambiarLuz(){
    //alert("Este es un test");
    /*luces[0].classList.remove("active");
    luces[1].classList.remove("active");
    luces[2].classList.remove("active"); */
    luces.forEach(i => i.classList.remove("active"));

    console.log("El listado es:", luces);
    //luces[0].classList.add("active");
    if(contador === 0){
        luces[2].classList.add("active");
        setTimeout(cambiarLuz,3000);
    } else if(contador===1){
        luces[1].classList.add("active");
        setTimeout(cambiarLuz,2000);
    } else if(contador===2){
        luces[0].classList.add("active");
        setTimeout(cambiarLuz,5000);
    }
    
    contador = (contador+1) % 3;
}
cambiarLuz();
});


document.querySelectorAll('.semaforo2').forEach((semaforo2, index) => {
    const luces = semaforo2.querySelectorAll('.foco2');
    let contador=0; //0: verde, 1: amarillo, 2: rojo
    function cambiarLuz1(){
        //alert("Este es un test");
        /*luces[0].classList.remove("active");
        luces[1].classList.remove("active");
        luces[2].classList.remove("active"); */
        luces.forEach(i => i.classList.remove("active"));
    
        console.log("El listado es:", luces);
        //luces[0].classList.add("active");
        if(contador === 0){
            luces[0].classList.add("active");
            setTimeout(cambiarLuz1,3000);
        } else if(contador===1){
            luces[1].classList.add("active");
            setTimeout(cambiarLuz1,2000);
        } else if(contador===2){
            luces[2].classList.add("active");
            setTimeout(cambiarLuz1,5000);
        }
        
        contador = (contador+1) % 3;
    }
    cambiarLuz1();
    });
