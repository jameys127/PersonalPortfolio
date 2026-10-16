# Personal Portfolio

My personal portfolio site, live at **[jeremiahsheehy.dev](https://jeremiahsheehy.dev)**. It showcases my projects to visitors and doubles as a private dashboard where I can log in to add, edit, and remove projects without touching the code.

## Features
<img width="2879" height="1799" alt="fontpage" src="https://github.com/user-attachments/assets/70ba9ccb-8312-4608-9a41-d8d17b097e64" />

**Public site**
- Homepage with an intro, project cards, and an About page
- Individual project pages with an image carousel, description, and links to GitHub and live demos
- Animated page transitions
- Links to my resume, Github, and Linkedin profile

**Private dashboard**
- Login protected by JWT authentication, with short-lived access tokens and an HTTP-only refresh-token cookie
- Create, edit, and delete projects from the browser
- Text editor for project descriptions, sanitized before rendering
- Image uploads stored in AWS S3

## Tech Stack

| Layer | Tools |
| --- | --- |
| Frontend | Next.js, React, Material UI |
| Backend | Node.js, Express |
| Database | PostgreSQL |
| Hosting | AWS S3, AWS Amplify, AWS EC2 |

