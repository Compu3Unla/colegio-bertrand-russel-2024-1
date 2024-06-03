
/* 

Los cuatro sectores son iguales, solamente cambian los nombres de las classes dependiendo la información que se despliega y cambia el nombre de la constante por el mismo motivo.

Estas lineas de texto son para que cuando la página cargue se creen las constantes, que si son iguales a los selectores que estan definidos dentro de los corchetes (las classes de los botones) van a realizar despues el condicional if */

document.addEventListener('DOMContentLoaded', function() {
    const abrirpopupmaternal = document.querySelector("[data-id='abrir_maternal']");
    const dialogmaternal = document.querySelector(".popup_maternal");
    const cerrarDialogoMaternal = dialogmaternal.querySelector(".cerrar_dialogo");

    /* Si el elemento del html de id ='abrir_maternal' (constante abrirpopupmaternal) y el dialog que tiene la información y el elemento de cerrar el dialog existen, al hacer click, el boton que abre el pop up maternal va a cambiar de display none a display flex para mostrarse */

    if (abrirpopupmaternal && dialogmaternal && cerrarDialogoMaternal) {
        abrirpopupmaternal.addEventListener("click", () => {
            dialogmaternal.style.display = "flex";
        });

        /* Cuando se haga un click en el elemento que tiene la class .cerrar_dialogo, el elemento que tiene la información vuelve a display none. */

        cerrarDialogoMaternal.addEventListener("click", () => {
            dialogmaternal.style.display = "none";
        });

        /* cuando se haga click en cualquier parte del documento, si la info maternal esta visible y el click no vino de el dialog maternal ni del boton de abrir pop up la info de maternal vuelve a none   */

        document.addEventListener("click", (event) => {
            if (dialogmaternal.style.display === "flex" && !dialogmaternal.contains(event.target) && event.target !== abrirpopupmaternal) {
                dialogmaternal.style.display = "none";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const abrirpopupinicial = document.querySelector("[data-id='abrir_inicial']");
    const dialoginicial = document.querySelector(".popup_inicial");
    const cerrarDialogoInicial = dialoginicial.querySelector(".cerrar_dialogo");

    if (abrirpopupinicial && dialoginicial && cerrarDialogoInicial) {
        abrirpopupinicial.addEventListener("click", () => {
            dialoginicial.style.display = "flex";
        });

        cerrarDialogoInicial.addEventListener("click", () => {
            dialoginicial.style.display = "none";
        });

        document.addEventListener("click", (event) => {
            if (dialoginicial.style.display === "flex" && !dialoginicial.contains(event.target) && event.target !== abrirpopupinicial) {
                dialoginicial.style.display = "none";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const abrirpopupprimario = document.querySelector("[data-id='abrir_primario']");
    const dialogprimario = document.querySelector(".popup_primario");
    const cerrarDialogoPrimario = dialogprimario.querySelector(".cerrar_dialogo");

    if (abrirpopupprimario && dialogprimario && cerrarDialogoPrimario) {
        abrirpopupprimario.addEventListener("click", () => {
            dialogprimario.style.display = "flex";
        });

        cerrarDialogoPrimario.addEventListener("click", () => {
            dialogprimario.style.display = "none";
        });


        document.addEventListener("click", (event) => {
            if (dialogprimario.style.display === "flex" && !dialogprimario.contains(event.target) && event.target !== abrirpopupprimario) {
                dialogprimario.style.display = "none";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const abrirpopupsecundario = document.querySelector("[data-id='abrir_secundario']");
    const dialogsecundario = document.querySelector(".popup_secundario");
    const cerrarDialogoSecundario = dialogsecundario.querySelector(".cerrar_dialogo");

    if (abrirpopupsecundario && dialogsecundario && cerrarDialogoSecundario) {
        abrirpopupsecundario.addEventListener("click", () => {
            dialogsecundario.style.display = "flex";
        });

        cerrarDialogoSecundario.addEventListener("click", () => {
            dialogsecundario.style.display = "none";
        });

        document.addEventListener("click", (event) => {
            if (dialogsecundario.style.display === "flex" && !dialogsecundario.contains(event.target) && event.target !== abrirpopupsecundario) {
                dialogsecundario.style.display = "none";
            }
        });
    }
});