/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


//global variables
const navBar = document.querySelector('.navbar__menu');
const navBarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

function buildNavigation(){
    sections.forEach((section, index) => {
        const listItem = document.createElement('li');
        const sectionLink = createSectionLink(index);
        listItem.appendChild(sectionLink);
        navBarList.appendChild(listItem);
    })
}
function createSectionLink(index){
    const sectionLink = document.createElement('a');
    sectionLink.textContent = "Section " + (index+1) ;
    sectionLink.href = "#section" + (index+1) ;
    sectionLink.classList.add('section-link')
    sectionLink.style.color = 'orange';
    sectionLink.style.textDecoration = 'none';
    sectionLink.style.fontFamily = 'verdana';
    return sectionLink
};

document.addEventListener('DOMContentLoaded', buildNavigation);



function buildNavigation(){
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

        observer.observe(document.querySelector(`#section${index+1}`));
    })
};

document.addEventListener('DOMContentLoaded', buildNavigation);