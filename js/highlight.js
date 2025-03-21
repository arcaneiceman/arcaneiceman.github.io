hljs.highlightAll(); // Activate code highlighting

function copyCode(button) {
    const codeBlock = button.closest(".code-container").querySelector("pre code");
    const text = codeBlock.innerText;

    navigator.clipboard.writeText(text).then(() => {
        button.innerHTML = '<i class="mdi-navigation-check"></i> Copied';
        setTimeout(() => {
            button.innerHTML = '<i class="mdi-content-content-copy"></i> Copy'
        }, 1500);
    }).catch(err => console.error("Copy failed:", err));
}