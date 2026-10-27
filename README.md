# 🌟 Personal Portfolio Static Website

A modern, responsive, and customizable personal portfolio static website.

## 🚀 Features

- **Semantic HTML5 & Modern CSS3**: Fast, accessible, lightweight, zero build-step required.
- **Dark / Light Theme Toggle**: Seamless transition between dark and light themes with automatic `localStorage` persistence and system preference detection.
- **Fully Responsive**: Mobile-first layout with smooth navigation drawer for phones and tablets.
- **Glassmorphism & Micro-animations**: Modern card aesthetics, gradient accents, and subtle hover interactions.
- **Interactive Contact Form**: Client-side validation with real-time feedback notifications.
- **Sections Included**:
  - **Hero**: Catchy headline, status badge, call-to-actions, and social links.
  - **About Me**: Professional summary and key accomplishment metrics.
  - **Skills & Tech Stack**: Categorized skill chips (Frontend, Backend, Tools & DevOps).
  - **Featured Projects**: Project showcase cards with live demo & GitHub repository links.
  - **Experience & Education**: Clean timeline layout.
  - **Contact**: Direct communication details and contact form.
  - **Footer**: Dynamic copyright year and back-to-top button.

---

## 📁 Directory Structure

```text
Jeeven_anna_portfolio/
├── index.html              # Main webpage markup
├── css/
│   └── style.css           # Modern stylesheet with CSS variables & responsive design
├── js/
│   └── main.js             # Theme switcher, mobile nav, form handling, scroll spy
├── assets/
│   └── images/
│       ├── avatar-placeholder.svg  # Stylized avatar illustration
│       ├── project-1.svg           # Analytics dashboard preview
│       ├── project-2.svg           # E-commerce store preview
│       └── project-3.svg           # Automation pipeline preview
├── .gitignore                     # Standard git ignore rules
├── CHANGELOG.md                   # Release history and change tracking
├── PROJECTS_UPDATE_INSTRUCTIONS.md # Agent context & non-technical project update instructions
└── README.md                      # Documentation and setup guide
```

---

## 🛠️ How to Preview & Run Locally

### Option 1: Direct in Browser
Simply double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using VS Code Live Server
1. Open this folder in VS Code.
2. Install the **Live Server** extension.
3. Click **"Go Live"** on the bottom status bar.

### Option 3: Using Python
In PowerShell or terminal:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 4: Using Node.js / npx
```bash
npx serve .
```

---

---

## 📄 Live Resume Workflow (Google Drive)

The website is wired to automatically pull/direct visitors to the live Google Drive folder:
- **Folder URL**: `https://drive.google.com/drive/folders/1dcwA-dCb2nv_o8Ld8FwvcgxHfeiY0-ma`

### How It Works:
1. Whenever you have an updated resume, simply upload the new PDF to this Google Drive folder.
2. In Google Drive, ensure folder sharing is set to **"Anyone with the link can view"**.
3. All buttons across the website (Header nav, Hero CTA, and Contact section) point to this folder, meaning you never need to rebuild or redeploy code just to update your resume.
4. If you ever change the folder link or wish to point directly to a file ID, edit `APP_CONFIG.resumeDriveUrl` in [`js/main.js`](js/main.js).

---

## 🎨 How to Customize

1. **Update Personal Info**: Open `index.html` and replace "Jeevan", bio text, social links, and email with your details.
2. **Add Your Avatar**: Replace `assets/images/avatar-placeholder.svg` with your actual picture (`.jpg`, `.png`, or `.svg`).
3. **Add Your Projects**: Update project titles, tags, descriptions, and URLs in the `#projects` section of `index.html`.
4. **Customize Colors**: Adjust the theme colors in `css/style.css` under the `:root`, `[data-theme="dark"]`, and `[data-theme="light"]` selectors.

---

## 🚢 Free Deployment Options

- **GitHub Pages**:
  1. Initialize a git repo: `git init && git add . && git commit -m "Initial commit"`
  2. Push to GitHub and go to **Settings > Pages > Source: Deploy from a branch (`main` / root)**.
- **Vercel / Netlify**:
  - Drag and drop this folder onto [Netlify Drop](https://app.netlify.com/drop) or deploy directly from your GitHub repository.
