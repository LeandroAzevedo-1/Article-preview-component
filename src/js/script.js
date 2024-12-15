const btnSeta = document.querySelector('.btn-seta');
const socialMedia = document.querySelector('.social-media');

// Adicionar um evento de click que adicione e remover o display flex ao social media
btnSeta.addEventListener('click', () => {
    
    socialMedia.classList.toggle('active');
})