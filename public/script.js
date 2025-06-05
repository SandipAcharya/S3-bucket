function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Show the profile by default
window.onload = () => showSection('profile');
