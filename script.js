document.addEventListener("DOMContentLoaded", function() {
    // Define an object with skill names and corresponding icon classes
    const skills = {
        "HTML": "fab fa-html5",
        "CSS": "fab fa-css3-alt",
        "JavaScript": "fab fa-js",
        "Python": "fab fa-python",
        "C": "fas fa-code",
        "C++": "fas fa-code",
        "MySQL": "fas fa-database",
        "Linux": "fab fa-linux",
        "PHP": "fab fa-php"
    };

    // Get the skills container
    const skillsContainer = document.querySelector('.skills-icons');

    // Generate skill icons dynamically
    for (const skill in skills) {
        const skillIcon = document.createElement('div');
        skillIcon.classList.add('skill-icon');
        const icon = document.createElement('i');
        icon.classList.add(skills[skill]);
        skillIcon.appendChild(icon);
        const skillName = document.createElement('p');
        skillName.textContent = skill;
        skillIcon.appendChild(skillName);
        skillsContainer.appendChild(skillIcon);
    }
});
