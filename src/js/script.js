const btnSeta = document.querySelector('.btn-seta');
const socialMedia = document.querySelector('.social-media');

btnSeta.addEventListener('click', () => {
    socialMedia.classList.toggle('active');
});