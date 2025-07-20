# Alex Styles - Portfolio Website

Welcome to the portfolio of **Alex Styles**, a graphic designer focused on visual storytelling and branding. This responsive and interactive website showcases projects, provides a short biography, and includes a contact form for reaching out.

## 🌐 Live Preview
You can host this project on platforms like GitHub Pages, Netlify, or Vercel for a live experience.

##  Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Styling, layout, responsiveness, and animations
- **JavaScript** – Modal interactivity
- **Responsive Design** – Supports mobile, tablet, and desktop

---

##  Features Overview

###  Header & Navigation
- Site title and navigation links
- Tooltip descriptions on hover
- Responsive flex layout for smaller screens

###  About Section
- Introduction and brief bio

###  Portfolio Section
- Grid layout using CSS Grid
- Interactive project cards
- Modal popup with project details

###  Contact Section
- Simple, accessible contact form
- Styled inputs and button
- Responsive layout for all devices

###  Responsive Design
- Mobile-first approach with breakpoints:
  - `max-width: 768px` for smartphones
  - `max-width: 1024px` for tablets
  - `min-width: 1025px` for desktops

### 🪄 Animations & Transitions
- Fade-in effects on project cards
- Smooth hover effects on buttons and links
- Modal popups with animated entry

---

## 🧠 How It Works

### Modal Interaction
JavaScript enables modal windows to appear when a project is clicked:

#### `script.js` 
```js
function openModal(title) {
  const modal = document.getElementById('modal');
  document.getElementById('modal-title').textContent = title;
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

