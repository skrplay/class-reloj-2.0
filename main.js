//    script reloj///
function clock(){

    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
        var am = 'AM';

        // convercion a 24 horas a 12 horas indicador a am pm 

    if (h > 12){
        h = h - 12; //convecion a 12 horas 
        var am = 'PM';
    }

    h = (h < 0) ? '0' + h : h;
    m = (m < 0) ? '0' + m : m;
    s = (s < 0) ? '0' + s : s;

    hour.innerHTML = h ;
    minute.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;//indicador a am pm 

}
var interval = setInterval(clock,1000);