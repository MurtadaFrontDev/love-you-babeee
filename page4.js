
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("not-loaded");

    const envelope = document.querySelector('.envelope-wrapper');
    envelope.addEventListener('click', () => {
        envelope.classList.add('open');
    }, { once: true });
});
