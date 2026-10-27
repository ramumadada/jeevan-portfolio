# 📌 Agent Context & Project Update Guidelines

> **IMPORTANT NOTICE FOR ANY AI AGENT / DEVELOPER ASSISTANT:**
> - The portfolio owner (**Utukuri Jeevan Kumar**) comes from a **non-technical (engineering/civil/hydraulics) background** and does not write code.
> - When the user asks to add or update a project, **DO NOT modify, restructure, or refactor any other section** of the website (Navbar, Hero, About, Skills, Experience, Education, Contact, `style.css`, or `main.js`).
> - **ONLY insert the new project card** into the `#projects` section within `index.html`.

---

## 1. User Workflow (How the User Updates Projects)

1. The user creates a new folder in their **Google Drive** for a new project.
2. The user names the Google Drive folder with the **Project Title**.
3. The user shares the Google Drive folder ("Anyone with the link can view").
4. The user simply provides the AI assistant with:
   - The **Google Drive folder URL** (e.g., `https://drive.google.com/drive/folders/1-uujyVkvmWQArlMmPnrJcGE0J5yZZVeT`).
   - (Optional) A brief sentence on what the project is about. If omitted, the agent uses the folder name to derive a professional engineering description and appropriate technical tags.

---

## 2. Agent Execution Rules (Strict)

When the user asks to add a project:

1. **Locate the Target Area in `index.html`**:
   Find the marker:
   ```html
   <!-- ========================================================================== -->
   <!-- INSERT NEW PROJECT CARDS DIRECTLY ABOVE THIS LINE                          -->
   <!-- ========================================================================== -->
   ```
2. **DO NOT Touch Anything Else**:
   - Keep all existing styles (`css/style.css`), scripts (`js/main.js`), and other sections in `index.html` untouched.
3. **Copy and Insert the Standard Project Card Template** (see section 3 below).
4. **Fill in the 4 Fields**:
   - `[PROJECT_TITLE]`: Name of the project (matches the user's Google Drive folder name).
   - `[DRIVE_FOLDER_URL]`: The Google Drive link provided by the user.
   - `[TAGS]`: 3–4 relevant engineering badges (e.g., `Coastal Engg`, `HEC-RAS`, `CFD`, `AutoCAD`, `Hydraulics`, `GIS`).
   - `[DESCRIPTION]`: A concise 2–3 sentence professional description of the project scope, methodology, or results.
   - `[THUMBNAIL_IMAGE]`: Select the best-matching existing SVG graphic from `assets/images/`:
     - `assets/images/project-wave-energy.svg` (for wave, marine, ocean, CFD, renewable projects)
     - `assets/images/project-flood-drainage.svg` (for river, flood, stormwater, drainage, GIS, hydrology projects)
     - `assets/images/project-infrastructure.svg` (for structural, construction, site work, high-rise, CAD projects)
5. **Log the Change in `CHANGELOG.md`**:
   Add a quick note under `[Unreleased]` or the latest version with the project name.

---

## 3. Standard Project Card HTML Template

Copy this exact snippet and paste it right before the `<!-- INSERT NEW PROJECT CARDS DIRECTLY ABOVE THIS LINE -->` comment inside `index.html`:

```html
          <!-- Project: [PROJECT_TITLE] -->
          <article class="project-card">
            <div class="project-img-wrapper">
              <img src="assets/images/[CHOSEN_THUMBNAIL].svg" alt="[PROJECT_TITLE]" class="project-img" />
              <div class="project-overlay">
                <a href="[DRIVE_FOLDER_URL]" target="_blank" rel="noopener noreferrer" class="overlay-link" title="Open Project Drive Folder">
                  <i class="fa-brands fa-google-drive"></i>
                </a>
              </div>
            </div>
            <div class="project-content">
              <div class="project-tags">
                <span class="tag">[TAG_1]</span>
                <span class="tag">[TAG_2]</span>
                <span class="tag">[TAG_3]</span>
              </div>
              <h3 class="project-title">[PROJECT_TITLE]</h3>
              <p class="project-description">
                [PROJECT_DESCRIPTION]
              </p>
              <div class="project-footer">
                <span class="project-org"><i class="fa-solid fa-folder-open"></i> Engineering Project</span>
                <a href="[DRIVE_FOLDER_URL]" target="_blank" rel="noopener noreferrer" class="project-link" title="Open Project in Google Drive">
                  <span>Drive Files</span>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </article>
```

---

## 4. Current Projects Reference List

1. **Modular Oscillating Water Columns (OWC) with Multi-Chamber Configuration**
   - **Type**: PG Scholar Research (Andhra University)
   - **Google Drive Link**: `https://drive.google.com/drive/folders/1-uujyVkvmWQArlMmPnrJcGE0J5yZZVeT`
   - **Tags**: `ANSYS Fluent`, `CFD`, `RANS Modeling`, `Wave Energy`

2. **Urban Drainage & Catchment Flood Inundation Modelling**
   - **Type**: Hydraulic & Hydrological Modelling
   - **Tags**: `HEC-RAS`, `HEC-HMS`, `InfoWorks ICM`, `SewerGEMS`

3. **Golden Key G20 High-Rise Building Project**
   - **Type**: Civil Site Engineering & Structural QA/QC
   - **Organization**: Sindhuja Infra Projects LLP
   - **Tags**: `Civil Engineering`, `High-Rise`, `AutoCAD`, `QA / QC`

---

## 5. Live Resume Reference

- **Resume Google Drive Folder**: `https://drive.google.com/drive/folders/1dcwA-dCb2nv_o8Ld8FwvcgxHfeiY0-ma`
- Configured centrally in `js/main.js` (`APP_CONFIG.resumeDriveUrl`).

---

## 6. WhatsApp Instant Messaging Reference

- **WhatsApp Number**: `+91-9505285128` (URL format: `https://wa.me/919505285128`)
- Configured centrally in `js/main.js` (`APP_CONFIG.whatsappNumber`, `APP_CONFIG.whatsappUrl`).
- Integrated in Hero CTA, Hero Socials, Contact Information, Contact Form fallback, and bottom-right Floating Action button.
