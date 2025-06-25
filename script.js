const copyCaButton = document.querySelector('.copy-ca');
const caLabel = document.querySelector('.copy-address');
const caContainer = document.querySelector('ca-container');

copyCaButton.addEventListener('click', () => {
    copyCa();
});
caLabel.addEventListener('click', () => {
    copyCa();
});


function copyCa() {
    const text = caLabel.textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            showCopiedContainer();
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}
const copySvgPath = document.querySelector("footer .ca-container button svg path");
const copiedContainer = document.querySelector('footer .copied');
const copiedAnimation = 'copied-animation';

const mainD = 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z';
const copiedD = 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z';




async function showCopiedContainer() {
    if (copiedContainer.classList.contains(copiedAnimation)) {
        return;
    }
    copySvgPath.setAttribute("d", copiedD);
    copiedContainer.classList.add(copiedAnimation);
    await sleep(1000);
    copiedContainer.classList.remove(copiedAnimation);
    copySvgPath.setAttribute("d", mainD);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}