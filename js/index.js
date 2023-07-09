const downloadCV = () => {
    const resumeLink = "https://drive.google.com/u/0/uc?id=1Gzc0KewWBkq2iP2Plu4js34_iir_inGm&export=download"
    window.location.href= resumeLink
}

const contactRedirect = () => {
  const tgLink = "https://t.me/teresheyn";
  window.open(tgLink, "_blank");
}

const projectItems = document.querySelectorAll('.projects-list-item');
const overlayItems = document.querySelectorAll('.projects-list-item-overlay');
let activeIndex = null;

for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the click event from bubbling up to the document level

    if (activeIndex !== null && activeIndex !== i) {
      overlayItems[activeIndex].style.opacity = 0;
      overlayItems[activeIndex].style.visibility = 'hidden';
    }

    if (overlayItems[i].style.opacity === '1') {
      overlayItems[i].style.opacity = 0;
      overlayItems[i].style.visibility = 'hidden';
      activeIndex = null;
    } else {
      overlayItems[i].style.opacity = 1;
      overlayItems[i].style.visibility = 'visible';
      activeIndex = i;
    }
  });
}

document.addEventListener('click', (event) => {
  const isOverlayClicked = Array.from(overlayItems).some((item) => item.contains(event.target));
  const isProjectItemClicked = Array.from(projectItems).some((item) => item.contains(event.target));

  if (!isOverlayClicked && !isProjectItemClicked) {
    Array.from(overlayItems).forEach((item) => {
      item.style.opacity = 0;
      item.style.visibility = 'hidden';
    });

    activeIndex = null;
  }
});




