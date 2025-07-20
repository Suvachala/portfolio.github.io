function openModal(projectName) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  modalTitle.textContent = projectName;
  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}

// Optional: Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
