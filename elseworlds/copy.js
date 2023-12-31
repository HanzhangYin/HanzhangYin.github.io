function copyCode() {
    var code = document.getElementById("code").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
}
