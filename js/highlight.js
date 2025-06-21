hljs.highlightAll(); // Activate code highlighting

// Fetch code blocks
document.querySelectorAll('code[data-url]').forEach(codeBlock => {
    const url = codeBlock.getAttribute('data-url');

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Failed to load file");
            return response.text();
        })
        .then(code => {
            codeBlock.textContent = code;
            hljs.highlightElement(codeBlock);
        })
        .catch(error => {
            console.error("Error loading code from", url, error);
            codeBlock.textContent = `// Error loading code from ${url}`;
        });
});

// Copy Code
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