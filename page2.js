// Photo gallery data
const photos = [
    'Photos/photo1.jpg',
    'Photos/photo2.jpg',
    'Photos/photo3.jpg',
    'Photos/photo4.jpg',
    'Photos/photo5.jpg',
    'Photos/photo6.jpg'
];

let currentPhotoIndex = 0;

// Open gallery modal
function openGallery() {
    const modal = document.getElementById('gallery-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close gallery modal
function closeGallery() {
    const modal = document.getElementById('gallery-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Change photo (next/previous)
function changePhoto(direction) {
    currentPhotoIndex += direction;

    // Loop around
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photos.length - 1;
    } else if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0;
    }

    updatePhoto();
}

// Show specific photo
function showPhoto(index) {
    currentPhotoIndex = index;
    updatePhoto();
}

// Update displayed photo
function updatePhoto() {
    const photoImg = document.getElementById('current-photo');
    const photoNumber = document.getElementById('photo-number');
    const thumbs = document.querySelectorAll('.thumb');

    // Update main photo
    photoImg.src = photos[currentPhotoIndex];

    // Update counter
    photoNumber.textContent = currentPhotoIndex + 1;

    // Update active thumbnail
    thumbs.forEach((thumb, index) => {
        if (index === currentPhotoIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Navigate to page 3
function goToPage3() {
    window.location.href = 'page3.html';
}

// Close modal on outside click
window.onclick = function (event) {
    const modal = document.getElementById('gallery-modal');
    if (event.target === modal) {
        closeGallery();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function (event) {
    const modal = document.getElementById('gallery-modal');
    if (modal.classList.contains('active')) {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            changePhoto(event.key === 'ArrowRight' ? 1 : -1);
        } else if (event.key === 'Escape') {
            closeGallery();
        }
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    // Only run if elements exist (in case script is loaded on other pages)
    if (document.getElementById('total-photos')) {
        document.getElementById('total-photos').textContent = photos.length;
    }
});
