
document.addEventListener('DOMContentLoaded', function() {
    const abrirpopupmaternal = document.querySelector("[data-id='abrir_maternal']");
    const dialogmaternal = document.querySelector(".popup_maternal");
    const cerrarDialogoMaternal = dialogmaternal.querySelector("#cerrar_dialogo");

    if (abrirpopupmaternal && dialogmaternal && cerrarDialogoMaternal) {
        abrirpopupmaternal.addEventListener("click", () => {
            dialogmaternal.style.display = "flex";
        });

        cerrarDialogoMaternal.addEventListener("click", () => {
            dialogmaternal.style.display = "none";
        });

        dialogmaternal.addEventListener("click", (event) => {
            event.stopPropagation();
        });

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
    const cerrarDialogoInicial = dialoginicial.querySelector("#cerrar_dialogo");

    if (abrirpopupinicial && dialoginicial && cerrarDialogoInicial) {
        abrirpopupinicial.addEventListener("click", () => {
            dialoginicial.style.display = "flex";
        });

        cerrarDialogoInicial.addEventListener("click", () => {
            dialoginicial.style.display = "none";
        });

        dialoginicial.addEventListener("click", (event) => {
            event.stopPropagation();
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
    const cerrarDialogoPrimario = dialogprimario.querySelector("#cerrar_dialogo");

    if (abrirpopupprimario && dialogprimario && cerrarDialogoPrimario) {
        abrirpopupprimario.addEventListener("click", () => {
            dialogprimario.style.display = "flex";
        });

        cerrarDialogoPrimario.addEventListener("click", () => {
            dialogprimario.style.display = "none";
        });

        dialogprimario.addEventListener("click", (event) => {
            event.stopPropagation();
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
    const cerrarDialogoSecundario = dialogsecundario.querySelector("#cerrar_dialogo");

    if (abrirpopupsecundario && dialogsecundario && cerrarDialogoSecundario) {
        abrirpopupsecundario.addEventListener("click", () => {
            dialogsecundario.style.display = "flex";
        });

        cerrarDialogoSecundario.addEventListener("click", () => {
            dialogsecundario.style.display = "none";
        });

        dialogsecundario.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        document.addEventListener("click", (event) => {
            if (dialogsecundario.style.display === "flex" && !dialogsecundario.contains(event.target) && event.target !== abrirpopupsecundario) {
                dialogsecundario.style.display = "none";
            }
        });
    }
});