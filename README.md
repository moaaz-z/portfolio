# Moaaz Mohamed - Personal Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Live Site](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen)](https://moaaz-z.github.io/Moaazportofolio/)

Modern personal developer portfolio website highlighting Data Engineering, Cloud Infrastructure, and Software Engineering projects by Moaaz Mohamed.

Direct Link: https://moaaz-z.github.io/Moaazportofolio/

---

## Overview

- Responsive Design: Optimized layout for desktop, tablet, and mobile browsers.
- Projects Showcase: Dedicated case cards with architecture overviews for:
 - Terminal Bank Management System (C, File I/O)
 - Supermarket Sales Cleaning & EDA (Python, Pandas)
 - Book Store Medallion Data Warehouse (SQL Server, SSIS, Power BI)
- Interactive Experience: Smooth scrolling, responsive navigation, and direct social links (LinkedIn, GitHub, Email).
- Fast and Dependency-Free: Zero heavy external frontend runtime libraries for instantaneous load times.

---

## Repository Structure

```text
portfolio/
├── dist/
│ ├── index.html # Semantic HTML5 entry page
│ ├── assets/ # Project showcase preview mockups
│ │ ├── bank-system.png
│ │ ├── management-systems.png
│ │ └── supermarket-analysis.png
│ ├── portrait-enhanced.png # Enhanced profile portrait
│ └── portrait.png # Profile photo
├── preview.cjs # Local static preview server script
├── .openai/hosting.json # Hosting configuration
└── README.md # Documentation
```

---

## Local Development

### Preview with Node.js
```bash
node preview.cjs
```

Or serve with any static HTTP server:
```bash
# Python
python -m http.server 8000 --directory dist

# Node npx
npx serve dist
```
