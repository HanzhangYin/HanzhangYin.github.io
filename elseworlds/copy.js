function copyCode(button) {
    // Find the <pre> element that is a sibling of the clicked button
    var code = button.previousElementSibling.innerText;

    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
}

