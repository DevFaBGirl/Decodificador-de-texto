const btnEncrypt = document.querySelector(".btn-encrypt");
const txtEncrypt = document.querySelector(".encrypt");
const warning = document.querySelector(".warning-msg");
const answer = document.querySelector(".evaluate");
const content = document.querySelector(".card-container");
const btnCopy = document.querySelector(".btn-copy");
const btnDecrypt = document.querySelector(".btn-decrypt");

btnEncrypt.addEventListener("click", e => {
    e.preventDefault();
    let text = txtEncrypt.value;
    let txt = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (text === "") {
        warning.style.background = "#0A3871";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "800";
        warning.textContent = "O campo não pode estar vazio";

        setTimeout(() => {
            warning.removeAttribute("style");
        }, 1500);
    } 
    else if (text !== txt) {
        warning.style.background = "#0A3871";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "800";
        warning.textContent = "O texto não pode ter acentos e caracteres especiais";

        setTimeout(() => {
            warning.removeAttribute("style");
        }, 1500);
    } 
    else if (text !== text.toLowerCase()) {
        warning.style.background = "#0A3871";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "800";
        warning.textContent = "O texto deve ser todo em letras minúsculas";

        setTimeout(() => {
            warning.removeAttribute("style");
        }, 1500);
    } 
    else {
        text = text.replace(/e/g, "enter");
        text = text.replace(/i/g, "imes");
        text = text.replace(/a/g, "ai");
        text = text.replace(/o/g, "ober");
        text = text.replace(/u/g, "ufat");        
        
        answer.innerHTML = text;
        btnCopy.style.visibility = "inherit";
        content.remove();
    }
});

    btnDecrypt.addEventListener("click", e => {
    e.preventDefault();
    let text = txtEncrypt.value; 
    let txt = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (text === "") {
        warning.style.background = "#0A3871";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "800";
        warning.textContent = "O campo não pode estar vazio";

        setTimeout(() => {
            warning.removeAttribute("style");
        }, 1500);
    } 
    else if (text !== txt) {
        warning.style.background = "#0A3871";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "800";
        warning.textContent = "O texto não pode ter acentos e caracteres especiais";

        setTimeout(() => {
            warning.removeAttribute("style");
        }, 1500);
    } 
    else if (text !== text.toLowerCase()) {
        warning.style.background = "#0A3871";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "800";
        warning.textContent = "O texto deve ser todo em letras minúsculas";

        setTimeout(() => {
            warning.removeAttribute("style");
        }, 1500);
    } 
    else {
        text = text.replace(/enter/g, "e");
        text = text.replace(/imes/g, "i");
        text = text.replace(/ai/g, "a");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");  
        
        answer.innerHTML = text;
        btnCopy.style.visibility = "inherit";
        content.remove();
    }
});

btnCopy.addEventListener("click", e => {
    e.preventDefault();
    let copy = answer;
    copy.select();
    document.execCommand("copy");
});