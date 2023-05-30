const downloadCV = () => {
    const resumeLink = "https://docs.google.com/document/d/1gLWSUHRE7Zy72y7suqyZwnPg-m_l6C4-/export?format=pdf"
    window.location.href= resumeLink
}

const contactRedirect = () => {
    const tgLink = "https://t.me/teresheyn"
    window.location.href= tgLink
}

const projectItems = document.querySelectorAll('.projects-list-item');
const overlayItems = document.querySelectorAll('.projects-list-item-overlay');
let activeIndex = null;

for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener('click', () => {
    if (activeIndex !== null && activeIndex !== i) {
      overlayItems[activeIndex].style.opacity = 0;
    }
    if (overlayItems[i].style.opacity === '1') {
      overlayItems[i].style.opacity = 0;
      activeIndex = null;
    } else {
      overlayItems[i].style.opacity = 1;
      activeIndex = i;
    }
  });
}


const projectsList = document.querySelector('.projects-list');

function checkIfReachedProjectsList() {

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 45) {
    projectsList.classList.add('animate__fadeInUp')
    console.log('достигли');
  }
}

window.addEventListener('scroll', checkIfReachedProjectsList);
