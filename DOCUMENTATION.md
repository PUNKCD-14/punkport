# PunkPort – Project Documentation

| | |
|---|---|
| **Student** | Casey Ryan Duplessis |
| **Institution** | Gauteng City College – Faculty of Information Technology |
| **Course** | Information Technology: System Development (Second Year) |
| **Module** | Web Development |
| **Assignment** | Portfolio Website – Design, Build, and Deploy |
| **Lecturer** | Mr Owami |
| **Live site** | https://punkcd-14.github.io/YOUR-REPO-NAME/ |
| **Repository** | https://github.com/PUNKCD-14/YOUR-REPO-NAME |

---

## 1. Project Overview

PunkPort is my personal portfolio website. It introduces who I am, shows my skills and achievements, lists my projects and gives visitors a way to contact me. It is built with HTML5, CSS3 and JavaScript and is hosted publicly on GitHub Pages.

**Goals**
- Present myself professionally as an IT practitioner.
- Show my web design skills and my AI automation skills.
- Display my Google AI Professional Certificate and its 7 courses.
- Meet every requirement of the Web Development portfolio assignment.

**Target audience:** my lecturer, potential employers and clients.

---

## 2. Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling, layout (Flexbox and Grid), responsiveness, hover effects |
| JavaScript | Mobile menu toggle, closing the menu on link click and scroll |
| Boxicons 2.1.4 | Icons (GitHub, LinkedIn, menu, skills) loaded from the unpkg CDN |
| Google Fonts (Poppins) | Typography |
| Git and GitHub | Version control and hosting |
| GitHub Pages | Deployment |

---

## 3. Folder Structure

```
project-folder/
├── index.html        # All page content
├── style.css         # All styling
├── Script.js         # Interactivity
├── PUNKCD.jpeg       # Profile picture
├── README.md         # Short project summary
└── DOCUMENTATION.md  # This file
```

File names are **case-sensitive** on GitHub Pages. `Script.js` and `PUNKCD.jpeg` must match the names used in `index.html` exactly.

---

## 4. Website Structure

| Section | ID | Content |
|---|---|---|
| Header / navigation | – | Logo, nav links, "Get in Touch" button, mobile menu icon |
| Home | `#home` | Introduction, short bio, social icons, call-to-action buttons, profile picture |
| About | `#about` | Personal story and career direction |
| Skills | `#skills` | Web design and development, AI automation, working with AI |
| Achievements | `#achievements` | Google AI Professional Certificate and 7 course certificates with dates, plus a Coursera verification link |
| Projects | `#projects` | Project cards (PunkPort plus further projects) |
| Contact | `#contact` | Form with name, email, phone, subject and message |
| Footer | – | Social icons and copyright |

---

## 5. Design Decisions

**Colour palette**

| Colour | Value | Use |
|---|---|---|
| Orange-red | `orangered` | Home section background, buttons, accents |
| Near-black | `#101010` | Main page background |
| White | `white` | Text |
| Purple | `purple` | Glow on images, hover and focus states, borders |
| Grey | `#bdbdbd` | Secondary text |

**Typography:** Poppins in weights 400–800. Large bold headings with an orange gradient accent word in each title, and regular weight body text for readability.

**Layout:** The Home section is the one bold colour block (orange-red). The rest of the site uses a calm dark background with thin borders, so the content stands out and the page is not overwhelming.

**Imagery:** a round profile picture with a purple glow, used on Home and About.

**Branding:** the "PunkPort" logo, with "Port" in a gradient, and the orange, purple and black colour combination give the site a personal, edgy look rather than a generic template.

---

## 6. Responsive Design

The layout adapts using CSS Grid, Flexbox, `clamp()` sizes and media queries.

| Screen | Breakpoint | Changes |
|---|---|---|
| Desktop | above 991px | Full navigation bar, side-by-side layouts |
| Tablet | up to 991px | Menu icon appears, navigation becomes a dropdown, Home and About stack vertically, images shrink |
| Mobile | up to 480px | Smaller base font, tighter padding, certificate rows stack, contact fields stack in one column |

---

## 7. JavaScript Functionality

File: `Script.js`

**Mobile navigation toggle**
- Clicking the menu icon toggles the `active` class on the navigation, showing or hiding the dropdown.
- The icon switches between the menu and close (X) symbols.
- The menu closes automatically when a link is clicked or the page is scrolled.

Other behaviour (smooth scrolling, hover effects, form validation styling) is done with CSS and HTML5 attributes.

---

## 8. Contact Form

- Fields: full name, email, phone number (optional), subject and message.
- HTML5 validation: `required` on name, email and message, and `type="email"` checks the email format.
- CSS shows a green border for valid email and phone entries, and a red border for an invalid email.
- `type="tel"` and `inputmode="tel"` bring up the number keypad on phones.

**Known limitation:** the form currently has no back-end, so it does not send messages. To make it fully working, connect it to a form service such as Formspree or Netlify Forms, or add a `mailto:` email link.

---

## 9. Deployment on GitHub Pages

1. Create a public repository on GitHub (for example `portfolio`).
2. Upload all files: `index.html`, `style.css`, `Script.js`, `PUNKCD.jpeg`, `README.md` and `DOCUMENTATION.md`.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then click **Save**.
6. Wait one to two minutes, then open the link GitHub shows:
   `https://punkcd-14.github.io/YOUR-REPO-NAME/`
7. Test the link in a private/incognito window and check that images, icons and links work.

**Optional – custom domain (bonus +30 marks):** buy a domain, add it under **Settings → Pages → Custom domain**, then add the DNS records GitHub shows at your domain provider. Tick **Enforce HTTPS** once it is available.

---

## 10. Testing Checklist

| Test | Result |
|---|---|
| All navigation links scroll to the correct section | ☐ |
| Mobile menu opens and closes | ☐ |
| Layout works on desktop, tablet and mobile | ☐ |
| GitHub and LinkedIn icons show and open the correct profiles | ☐ |
| Profile picture loads (file name and capitals match) | ☐ |
| Verify on Coursera link opens | ☐ |
| Live GitHub Pages link works in incognito mode | ☐ |
| No broken links or missing images | ☐ |

---

## 11. Mapping to the Assignment Requirements

| Requirement | How it is met |
|---|---|
| HTML5, CSS3 and JavaScript | `index.html`, `style.css`, `Script.js` |
| Required sections | Home, About, Skills, Achievements, Projects, Contact |
| Responsive layout | Grid, Flexbox and media queries at 991px and 480px |
| JavaScript interactive feature | Mobile navigation toggle |
| Public GitHub repository | https://github.com/PUNKCD-14/YOUR-REPO-NAME |
| GitHub Pages deployment | See Section 9 |
| Own design, not a template | Custom colours, logo, layout and branding (Section 5) |
| Real and personal content | My bio, my Google AI certificates and my links |
| README with required sections | `README.md` |
| AI and external resources referenced | References section in `README.md` and Section 12 below |

---

## 12. Use of AI and External Resources

In line with Section 2.3 of the assignment brief, these are declared in full:

| Resource | How it was used |
|---|---|
| **Claude (Anthropic)** | Helped me clean up and debug my HTML and CSS (wrong class names, broken tags, icon link), adjust the design after my feedback, write the JavaScript menu toggle, draft the Skills, Achievements and About Me text based on my certificates, and write this documentation and the README. I reviewed and edited the output. |
| **Boxicons** | Icon font for social, menu and skill icons. |
| **Google Fonts (Poppins)** | Website font. |
| **Coursera / Google AI Professional Certificate** | Source of the achievements, dates and verification link. |
| *(Add tutorials, videos or templates)* | *(Describe how you used them.)* |

---

## 13. Known Limitations and Future Improvements

- Connect the contact form to a service so that messages are actually delivered.
- Replace the placeholder project cards with real projects and links.
- Add an Education/Experience section.
- Add a dark/light mode switch and scroll animations.
- Add a custom domain.
