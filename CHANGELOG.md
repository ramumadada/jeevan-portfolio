# 📝 Changelog

All notable changes to the personal portfolio website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.4.0] - 2026-10-27

### Added
- **Instant WhatsApp Messaging Integration**:
  - Configured direct WhatsApp connection (`https://wa.me/919505285128`) with pre-filled message (*"Hi Jeevan, I would like to connect with you regarding an engineering opportunity."*).
  - **Hero CTA**: Added high-visibility `"WhatsApp Me"` button (`.btn-whatsapp`) and social icon in the hero banner.
  - **Contact Section**:
    - Added dedicated WhatsApp instant messaging card with instant chat badge.
    - Added `"Direct Message on WhatsApp"` button in the contact card.
    - Updated form submission confirmation to offer instant WhatsApp follow-up.
  - **Floating Action Widget**: Added a fixed floating WhatsApp button (`#floating-whatsapp`) with hover tooltip in the bottom right corner across all screens and mobile devices.
  - **Centralized Configuration**: Added `whatsappNumber` and dynamic `whatsappUrl` inside `APP_CONFIG` in [`js/main.js`](file:///C:/Work/Jeeven_anna_portfolio/js/main.js).

---

## [1.3.0] - 2026-10-27

### Added
- **PG Project Google Drive Integration**:
  - Connected the PG research project card (*Modular Oscillating Water Columns with Multi-Chamber Configuration*) in [`index.html`](file:///C:/Work/Jeeven_anna_portfolio/index.html) to the user's dedicated Google Drive folder: `https://drive.google.com/drive/folders/1-uujyVkvmWQArlMmPnrJcGE0J5yZZVeT`.
  - Added interactive Google Drive icon overlay button and "Drive Files" link button to the project card footer.
- **Agent Context & Non-Technical Project Update Protocol**:
  - Created [`PROJECTS_UPDATE_INSTRUCTIONS.md`](file:///C:/Work/Jeeven_anna_portfolio/PROJECTS_UPDATE_INSTRUCTIONS.md) specifying:
    - User background: Non-technical engineering professional.
    - Scope lock: AI agents are strictly instructed **never** to alter, refactor, or delete existing code or other sections of the website.
    - New project workflow: User provides the Google Drive folder link and the folder name (as project title); the agent inserts only the project card snippet into the target area in `index.html`.
    - Included plug-and-play HTML card template and thumbnail selector guide.
  - Added demarcated comment boundaries in [`index.html`](file:///C:/Work/Jeeven_anna_portfolio/index.html) inside `#projects-container`.

---

## [1.2.0] - 2026-10-27

### Added
- **Dynamic Live Resume Architecture via Google Drive**:
  - Replaced hardcoded static resume references with dynamic links pointing to the user's dedicated Google Drive folder: `https://drive.google.com/drive/folders/1dcwA-dCb2nv_o8Ld8FwvcgxHfeiY0-ma`.
  - Added centralized `APP_CONFIG.resumeDriveUrl` in [`js/main.js`](file:///C:/Work/Jeeven_anna_portfolio/js/main.js) and `initResumeLinks()` to dynamically bind all `.resume-link` elements across the site.
  - Updated Header CTA button, Hero CTA button, and Contact Info details in [`index.html`](file:///C:/Work/Jeeven_anna_portfolio/index.html).
  - Documented the live resume upload & update workflow in [`README.md`](file:///C:/Work/Jeeven_anna_portfolio/README.md).

---

## [1.1.0] - 2026-10-27

### Added
- **Profile Image Integration**:
  - Imported user's uploaded portrait as [`assets/images/profile.png`](file:///C:/Work/Jeeven_anna_portfolio/assets/images/profile.png) into the hero section with rounded glassmorphism framing and floating badges.
- **Full Resume Profile Alignment (Utukuri Jeevan Kumar)**:
  - **Identity & Contact**:
    - Full Name: Utukuri Jeevan Kumar.
    - Role: Coastal & Hydraulic Engineer | M.Tech in Hydraulics, Coastal & Harbor Engineering.
    - Contact: `jeevankumarutukuri@gmail.com`, `+91-9505285128`, `linkedin.com/in/jeevankumar16`, and Andhra Pradesh address.
  - **Career Objective**: Grounded in hydraulic modelling, flood risk analysis, watershed management, urban stormwater design, and CFD simulations.
  - **Core Competencies**: Dedicated cards for Coastal/Harbor Infrastructure, Hydrodynamic Modeling, Flood Risk & Stormwater, CFD & Wave Energy, Site Execution & QA/QC, and Teamwork.
  - **Technical Skills**:
    - Flood & Riverine Hydraulics: HEC-RAS (1D/2D), HEC-HMS, Watershed Modelling.
    - Urban Drainage & Stormwater: InfoWorks ICM, SewerGEMS.
    - CAD & GIS: AutoCAD, Civil 3D, ArcGIS Pro, QGIS.
    - Computational Fluid Dynamics: ANSYS Fluent, OpenFOAM, RANS Modeling.
  - **Projects & Research Works**:
    - *Modular Oscillating Water Columns (OWC) with Multi-Chamber Configuration* (Andhra University PG Scholar research).
    - *Urban Drainage & Catchment Flood Inundation Modelling* (HEC-RAS & InfoWorks ICM).
    - *Golden Key G20 High-Rise Infrastructure Project* (Sindhuja Infra Projects LLP).
  - **Experience**:
    - PG Scholar at Andhra University (Feb 2024 – May 2026).
    - Graduate Engineer Trainee at Sindhuja Infra Projects LLP (Oct 2022 – March 2023).
    - Industrial Training at Government of AP, Panchayat Raj Engineering Department (6 Months).
  - **Specialized Trainings & Workshops**:
    - CSEE Hyderabad (Numerical Modeling Studies for Coastal Engineering).
    - IIT Madras (GIAN Course on Coastal Processes Modeling).
    - IIT Bombay FOSSEE (Workshop on OpenFOAM for CFD).
  - **Education**:
    - M.Tech (Hydraulics, Coastal & Harbour Engineering, Andhra University) – 82%.
    - B.Tech (Civil Engineering, DVR & Dr. H.S. MIC College of Technology) – 79.6%.
    - Diploma (Civil Engineering, AANM & VVRSR Polytechnic) – 68.86%.
  - **Visual Graphics**:
    - Added [`project-wave-energy.svg`](file:///C:/Work/Jeeven_anna_portfolio/assets/images/project-wave-energy.svg).
    - Added [`project-flood-drainage.svg`](file:///C:/Work/Jeeven_anna_portfolio/assets/images/project-flood-drainage.svg).
    - Added [`project-infrastructure.svg`](file:///C:/Work/Jeeven_anna_portfolio/assets/images/project-infrastructure.svg).
  - **Styling**:
    - Tailored color palette with coastal & oceanic blue gradients (`#0284c7`, `#06b6d4`, `#10b981`).
    - Added CSS components for Education cards, Workshop badges, and Competencies grid.

---

## [1.0.0] - 2026-10-27

### Added
- **Initial Portfolio Website Setup**:
  - `index.html`: Complete semantic HTML5 structure.
  - `css/style.css`: Responsive design with dark/light themes.
  - `js/main.js`: Interactivity, theme persistence, mobile nav, and contact form validation.
  - `assets/images/`: Initial SVG graphics.
  - `README.md` and `.gitignore`.
