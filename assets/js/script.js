

const imageContainers = document.querySelectorAll('.image-container');
const handleImageHover = () => {
  imageContainers.forEach((container) => {
    const animal = container.querySelector('.image');
    const animalDetails = container.querySelector('.img-details');
    const learnMore = container.querySelector('.learn-more');
    const image = container.querySelector('img');

    container.addEventListener('mouseenter', () => {
      animal.style.backdropFilter = 'blur(5px)';
      animalDetails.style.transform = 'translateY(10%)';
      image.style.transform = 'scale(1.1)';
      image.style.filter = 'grayscale(100%) brightness(25%)';
      learnMore.style.opacity = '1';
    });

    container.addEventListener('mouseleave', () => {
      animal.style.backdropFilter = 'none';
      animalDetails.style.transform = 'translateY(40%)';
      image.style.transform = 'scale(1)';
      image.style.filter = 'none';
      learnMore.style.opacity = '0';
    });
  });
};
const handleFullSizeView = () => {
  const learnMoreButtons = document.querySelectorAll('.learn-more');
  const fullSizePhoto = document.querySelector('.full-size-photo');
  const fullSizePhotoImg = fullSizePhoto.querySelector('img');
  const closeBtn = document.querySelector('.close-btn');
  const modal = document.querySelector('.modal');

  learnMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const imgSrc = document.querySelector(
        `.images-container .image-container:nth-child(${index + 1}) img`
      ).src;
      fullSizePhotoImg.src = imgSrc;
      modal.style.display = 'block';
      fullSizePhoto.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    fullSizePhoto.style.display = 'none';
  });
};
handleFullSizeView();
handleImageHover();
