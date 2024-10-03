function promedio(){
    let promedio1= +document.querySelector('#num1').value;
    let promedio2= +document.querySelector('#num2').value;
    let promedio3= +document.querySelector('#num3').value;
    

    let operacion1 = (promedio1*0.15);
    let operacion2 = (promedio2*0.10);
    let operacion3 = (promedio3*0.10);

    let promedioFinal= (operacion1+operacion2+operacion3);
    document.querySelector('#salida').textContent = 'El promedio del primer 35% es:' + promedioFinal;


}