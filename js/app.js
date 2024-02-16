
const navBar = document.querySelector('.navbar__menu');
const navBarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

function createSectionLink(index) {
    const sectionLink = document.createElement('a');
    sectionLink.textContent = "Section " + (index + 1);
    sectionLink.href = "#section" + (index + 1);
    sectionLink.classList.add('section-link')
    sectionLink.style.color = 'orange';
    sectionLink.style.textDecoration = 'none';
    sectionLink.style.fontFamily = 'verdana';
    return sectionLink
};

function buildNavigation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="#${id}"]`);
            if (entry.isIntersecting) {
                navLink.style.color = 'red';
            } else {
                navLink.style.color = 'orange';
            }
        });
    }, { threshold: 0.7 });

    sections.forEach((section, index) => {
        const listItem = document.createElement('li');
        const sectionLink = createSectionLink(index);
        listItem.appendChild(sectionLink);
        navBarList.appendChild(listItem);

        observer.observe(document.querySelector(`#section${index + 1}`));
    })
};

document.addEventListener('DOMContentLoaded', buildNavigation);