function atualizaçãoRelogio(){
    const relogio = document.getElementById('relogio');
    const hrs = document.getElementById('hrs');
    const min = document.getElementById('min');
    const seg = document.getElementById('seg');

    const agora = new Date(); //new Data é um objeto completo com dia, mes, ano e horário atual
    const dataHr = agora.getHours().toString().padStart(2, '0'); // Aqui ele pega as horas de new Data, usando getHours, depois passa para string (toString) e em seguida deixa ele com 2 digitos sempre (padStart)
    const dataMin = agora.getMinutes().toString().padStart(2, '0');
    const dataSeg = agora.getSeconds().toString().padStart(2, '0');


    hrs.textContent = dataHr;
    min.textContent = dataMin;
    seg.textContent = dataSeg;
}

// Set interval dispara a função a cada 1000 milisegundos, 1 segundo, fazendo com que o site mostre os segundos sem precisar recarregar a pagina.
setInterval(atualizaçãoRelogio, 1000);
