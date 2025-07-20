const projects = {
  "Project 1": {
    description: "Designed a responsive landing page for a tech startup focusing on clean UI and user engagement, using Figma and Adobe XD.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" // Website design workspace
  },
  "Project 2": {
    description: "Created a complete website redesign for an e-commerce platform, enhancing navigation and visual hierarchy for better user experience.",
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=600&q=80" // E-commerce design on screen
  },
  "Project 3": {
    description: "Developed UI assets and iconography for a mobile app focused on wellness, prioritizing simplicity and accessibility.",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=600&q=80" // UI design tools
  },
  "Project 4": {
    description: "Branding and web graphics for a creative agency website, including custom illustrations and interactive elements.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" // Creative design desk
  }
};

function openModal(projectName) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');

  modalTitle.textContent = projectName;
  modalDesc.textContent = projects[projectName].description;
  modalImage.src = projects[projectName].image;
  modalImage.alt = `${projectName} image`;

  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
