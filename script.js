// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const textChanger = document.getElementById('textChanger');
const addProject = document.getElementById('addProject');
const removeProject = document.getElementById('removeProject');
const aboutText = document.getElementById('aboutText');
const projectsList = document.getElementById('projectsList');

// Dark Mode Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-header');
});

// Text Content Modification
textChanger.addEventListener('click', () => {
  aboutText.textContent = aboutText.textContent.includes('collaborating') 
    ? "I specialize in frontend development with React and enjoy creating accessible web applications."
    : "I am a passionate software engineering student eager to learn and build impactful solutions. I enjoy coding, problem-solving, and collaborating with others.";
});

// Element Creation/Removal
addProject.addEventListener('click', () => {
  const newProject = document.createElement('li');
  const projectCount = projectsList.children.length + 1;
  newProject.textContent = `New Project ${projectCount} in progress`;
  projectsList.appendChild(newProject);
});

removeProject.addEventListener('click', () => {
  if(projectsList.children.length > 0) {
    projectsList.lastElementChild.remove();
  }
});

// Dynamic Style Modification
projectsList.addEventListener('mouseover', (e) => {
  if(e.target.tagName === 'LI') {
    e.target.style.backgroundColor = 'rgba(170, 57, 57, 0.2)';
    e.target.style.transition = 'background-color 0.3s';
  }
});

projectsList.addEventListener('mouseout', (e) => {
  if(e.target.tagName === 'LI') {
    e.target.style.backgroundColor = '';
  }
});
