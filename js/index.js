const downloadCV = () => {
    const resumeLink = "https://docs.google.com/document/d/1gLWSUHRE7Zy72y7suqyZwnPg-m_l6C4-/export?format=pdf"
    window.location.href= resumeLink
}

const contactRedirect = () => {
    const tgLink = "https://t.me/teresheyn"
    window.location.href= tgLink
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
