# 🌐 Personal Portfolio Website

A modern and responsive full-stack portfolio website built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**. This portfolio showcases my projects, technical skills, services, and provides an admin dashboard for managing portfolio content.

---

## 🚀 Features

### 👤 Public Portfolio
- Responsive landing page
- About Me section
- Technical Skills
- Services Offered
- Projects Showcase
- Contact Form
- Dark / Light Theme Toggle
- Download Resume
- Developer Quote of the Day (API Integration)

### 🔐 Authentication
- User Signup
- User Login
- Logout
- Password Authentication using Passport.js
- Session Management

### 👨‍💼 Admin Features
- Admin Dashboard
- Add New Projects
- Edit Existing Projects
- Delete Projects
- Protected Routes
- Role-Based Authorization

### 💻 JavaScript DOM Features
- Dynamic Content Updates
- Add / Remove Skills
- Interactive Buttons
- Local Storage (Theme Preference)
- Real-time Form Validation

### 🌐 API Integration
- Fetch Developer Quotes using a Free Quote API
- Dynamic Content Rendering
- Error Handling using Try/Catch

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Passport Local
- Passport Local Mongoose
- Express Session

### Other Packages
- Connect Flash
- Method Override
- EJS Mate

---

## 📂 Project Structure

```
portfolio/
│
├── models/
│   ├── user.js
│   ├── project.js
│   └── contact.js
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── resume/
│
├── routes/
│
├── views/
│   ├── layouts/
│   ├── includes/
│   ├── index.ejs
│   ├── about.ejs
│   ├── skills.ejs
│   ├── projects.ejs
│   ├── services.ejs
│   ├── contact.ejs
│   ├── login.ejs
│   ├── signup.ejs
│   └── dashboard.ejs
│
├── middleware.js
├── app.js
├── package.json
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/vidhya-mewara/portfolio.git
```

### Navigate to Project

```bash
cd portfolio
```

### Install Dependencies

```bash
npm install
```

### Start MongoDB

Make sure MongoDB is running locally.

### Start Server

```bash
node app.js
```

or

```bash
nodemon app.js
```

Open:

```
http://localhost:8080
```

---

## 🔑 Environment

The project currently uses a local MongoDB connection.

```
mongodb://127.0.0.1:27017/portfolioDB
```

---

## 📌 Future Improvements

- Email Integration using Nodemailer
- Admin Analytics Dashboard
- Project Categories
- Search & Filter Projects
- Blog Section
- Image Upload using Cloudinary
- Deployment on Render/Vercel

---

## 👩‍💻 Author

**Vidhya Mewara**

📧 Email: vidhyamewara2@gmail.com

🔗 GitHub: https://github.com/vidhya-mewara

🔗 LinkedIn: Add your LinkedIn Profile

---

## 📄 License

This project is developed for learning purposes and personal portfolio use.
