# bibtex-to-ieee-converter
A fast, clean, and client-side web tool to convert BibTeX citations into IEEE reference format. Built with React and TailwindCSS.
A fast, single-page web application that instantly converts **BibTeX** entries into properly formatted **IEEE** style references.
<img width="1842" height="827" alt="image" src="https://github.com/user-attachments/assets/f51c2e02-3678-4b1e-b4ab-b5abc7425057" />
<img width="1502" height="852" alt="image" src="https://github.com/user-attachments/assets/9e36cdd9-0561-44e6-a1b9-871fd4ec0f1f" />

🔗 **Live Demo:** [your-demo-link.vercel.app](https://vercel.app)

---

### 💡 Motivation
As a **M.Sc. student currently in the thesis writing stage**, I realized how tedious and time-consuming it is to manually format every single reference into the strict **IEEE citation style**. Since most academic databases export citations in BibTeX format, I built this lightweight, single-page tool using **React** and **TailwindCSS** to automate the conversion process and save valuable research time.

---

### ✨ Features
- **Instant Conversion:** Real-time parsing from raw BibTeX to standard IEEE format.
- **Single-Page & Distraction-Free:** Clean interface focused purely on speed and usability.
- **One-Click Copy:** Copy formatted references directly to your clipboard with a single click.
- **Privacy First (100% Client-Side):** All conversions run locally in your browser. Your thesis references never leave your device.
- **Responsive Design:** Styled with TailwindCSS to work seamlessly on desktop and mobile screens.

---

### 🛠️ Tech Stack
- **Framework:** React.js
- **Styling:** TailwindCSS

---

### 📝 Example

**Input (BibTeX):**
```bibtex
@article{shannon1948mathematical,
  title={A mathematical theory of communication},
  author={Shannon, Claude E.},
  journal={The Bell System Technical Journal},
  volume={27},
  number={3},
  pages={379--423},
  year={1948}
}
```

**Output (IEEE):**
> C. E. Shannon, "A mathematical theory of communication," *The Bell System Technical Journal*, vol. 27, no. 3, pp. 379–423, 1948.

---

### ⚡ How to Use (Google Scholar Workflow)
1. Go to **Google Scholar** and find the paper you want to cite (or open it from your library).
2. Click the **"Cite"** (`"`) button below the article and select **BibTeX**.
3. Copy the BibTeX snippet and paste it directly into the **Converter** box.
4. Your **IEEE** formatted reference is generated instantly—just click to copy!


### 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com

# Navigate to the project directory
cd bibtex-to-ieee-converter

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

### 📄 License
This project is open-source and available under the MIT License.
