// Simple page transition
function goToNextPage() {
    const container = document.querySelector('.container');
    container.style.animation = 'fadeOut 0.5s ease-out forwards';

    setTimeout(() => {
        window.location.href = 'page2.html';
    }, 500);
}

// Fade out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);
