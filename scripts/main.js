// Função para inicializar os carrosséis
function initCarrossel() {
  const carrossels = document.querySelectorAll('.projeto-carrossel');
  
  carrossels.forEach(carrossel => {
    const slides = carrossel.querySelectorAll('.carrossel-slide');
    const prevBtn = carrossel.querySelector('.prev');
    const nextBtn = carrossel.querySelector('.next');
    let currentSlide = 0;

    // Mostrar a primeira imagem
    slides[0].classList.add('active');

    // Função para mostrar um slide específico
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }

    // Evento para o botão anterior
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    // Evento para o botão próximo
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    // Auto-play do carrossel
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  });
}

// Inicializar o carrossel quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  initCarrossel();
  
  // Código existente para os cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
  });
});

// Código existente para animação ao rolar
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});
