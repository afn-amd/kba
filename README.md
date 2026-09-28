# Dr. Amir's Practice

Build a static, single-page portfolio website for Dr. Khalid Bin Amir, a newly qualified MBBS doctor (graduated 2026, currently a medical intern at a hospital in Kolkata, India). The site is for patients, hospital administrators, and senior doctors who want to know who he is, what he does, and how to reach him. It should feel calm, precise, and trustworthy — modern minimalist with a subtle 3D depth, not a template.

DESIGN SYSTEM
- Accent: #0057FF. Background: #F8F7F4 (warm off-white). Derive a full tint/shade range from the accent; tint all greys slightly warm so they belong with the background. Text in three levels: near-black, mid-grey, light-grey.
- One typeface family (Inter or Manrope). Type scale of 6 sizes; tight line-height on headings, 1.6 on body; body text max ~65 characters per line.
- Radius scale 4 / 8 / 12 only. One consistent soft shadow scale from a single top-left light source. No glassmorphism, no gradient text, no glows, no purple.
- 3D touch: a single subtle 3D element in the hero — a floating, slowly rotating abstract medical form (a stethoscope loop or DNA-like helix in the accent colour) rendered with CSS 3D transforms or Three.js — plus cards that lift on hover with a slight perspective tilt (max 4°). Keep all other motion minimal (150–250 ms, ease-out) and respect prefers-reduced-motion.
- Left-aligned text with a strong left edge; generous whitespace; alternate section density so the page has rhythm (not every section is heading + paragraph + 3-card grid).

SECTIONS (in order)
1. Nav — name/logo left, links (About, Education, Experience, Services, Contact) right, one primary CTA "Book an Appointment".
2. Hero — small overline "MBBS · Medical Intern, [Hospital Name], Kolkata"; headline "Compassionate care, grounded in evidence."; one-line support text; primary CTA + secondary text link "View credentials"; the 3D element on the right. Photo placeholder for a professional headshot of an Indian doctor.
3. About — short bio (3–4 sentences), languages spoken: Bengali, Hindi, English. Registration: "West Bengal Medical Council Reg. No. [XXXXX]".
4. Education — vertical timeline: MBBS, [Medical College Name], Kolkata (2020–2025); Internship, [Hospital Name] (2025–2026); NEET-UG qualified 2019.
5. Experience & Rotations — cards for internship rotations: General Medicine, Surgery, Paediatrics, Obstetrics & Gynaecology, Community Medicine, Emergency. Each with 1 line of duties.
6. Services / Areas of Interest — 4 items (General consultation, Preventive health check-ups, Health education & awareness camps, Telemedicine follow-ups). No icon-in-a-coloured-circle pattern; use a numbered list or plain typographic emphasis.
7. Certifications — BLS/ACLS, any workshops; simple list.
8. Contact — clinic/hospital address in Kolkata, phone (+91 XXXXX XXXXX), email, OPD timings, WhatsApp button, and a simple static form (name, phone, message) that posts to a placeholder action. Embedded Google Map placeholder.
9. Footer — name, "MBBS (2025)", social links (LinkedIn), copyright 2026, and a one-line disclaimer: "This website is for information only and does not replace an in-person consultation."

TECHNICAL
- React + Tailwind (or plain HTML/CSS) with all content in a single data/content.ts (or JSON) file so every detail can be edited in one place.
- Fully responsive; mobile is a re-prioritised layout, not a shrink. Sticky bottom "Call" button on mobile.
- Semantic HTML, WCAG AA contrast, visible focus rings, 44 px tap targets, SEO meta tags, Open Graph image placeholder.
- No lorem ipsum — use the realistic content above. No backend, no auth.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/831bdd7c-095a-4607-99ad-22b4320a14f0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
