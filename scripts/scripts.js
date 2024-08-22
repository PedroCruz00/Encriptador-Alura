
function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function handleEncrypt() {
    let textarea = document.getElementById("input");
    validateTextarea(textarea);
    let text = textarea.value;
    let textoEncriptado = encrypt(text);
    addCssAttributes();
    document.getElementById("result").innerText = textoEncriptado;
}

function handleDecrypt() {
    let textarea = document.getElementById("input");
    validateTextarea(textarea);
    let text = textarea.value;
    let textoDesencriptado = decrypt(text);
    addCssAttributes();
    document.getElementById("result").innerText = textoDesencriptado;

}

function copyToClipboard() {
    let content = document.getElementById("result").innerText;
    navigator.clipboard.writeText(content);
    hideContent();
}
function hideContent(){
    let copyMessage = document.getElementById('copyMessage');
    copyMessage.classList.remove('hidden');
    copyMessage.classList.add('visible');

    setTimeout(() => {
        copyMessage.classList.remove('visible');
        copyMessage.classList.add('hidden');
    }, 2000);
}

function addCssAttributes() {
    let contentDiv = document.getElementById("result");
    contentDiv.style.alignItems = "start";
    contentDiv.style.justifyContent = "left";
    contentDiv.style.textAlign = "left";
}

function validateTextarea(textarea) {
    let value = textarea.value.toLowerCase();    
    value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    value = value.replace(/[^a-z]/g, '');
    textarea.value = value;
}