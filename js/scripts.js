function copyCode(elementId,btnId) {
    const codeBlock = document.getElementById(elementId);
    const textArea = document.createElement('textarea');
    textArea.value = codeBlock.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    const copyBtn = document.getElementById(btnId);
    copyBtn.innerHTML = '<i class="bi bi-check"></i> Copiado!';
    copyBtn.classList.remove('btn-outline-secondary');
    copyBtn.classList.add('btn-success');

    setTimeout(() => {
        copyBtn.innerHTML = '<i class="bi bi-clipboard"></i> Copiar';
        copyBtn.classList.remove('btn-success');
        copyBtn.classList.add('btn-outline-secondary');
    }, 2000);
}