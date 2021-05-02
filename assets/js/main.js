const relógio = document.querySelector(`.relógio`);

document.addEventListener(`click`, (e) => {

    const el = e.target;

    if (el.classList.contains(`iniciar`)) {

        relógio.classList.remove(`pausado`);
        clearInterval(timer);
        iniciarR();

    } else if (el.classList.contains(`pausar`)) {

        relógio.classList.add(`pausado`);
        clearInterval(timer);

    } else if (el.classList.contains(`zerar`)) {

        segundos = 0;
        relógio.innerHTML = `00:00:00`;

    }

});

let timer;
let segundos = 0;

const iniciarR = () => {

    timer = setInterval(() => {

        segundos++;
        relógio.innerHTML = recebeSegundos(segundos);

    }, 1000);

};

const recebeSegundos = (segundos) => {

    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString(`pt-BR`, {
        hour12: false,
        timeZone: `GMT`
    });

}
