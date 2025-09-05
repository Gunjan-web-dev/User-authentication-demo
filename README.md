# User-authentication-demo

Login & Registration System

This is a simple Login and Registration system built using HTML, CSS, and JavaScript. It allows users to register with a username and password, stores the data in the browser's localStorage, and then lets them log in to access a welcome page.

🚀 Features

User Registration (stores username & password in localStorage)

User Login (validates stored credentials)

Simple Welcome Page after login

Responsive and styled with CSS

Alerts for validation and success messages

📂 Project Structure
├── login.html        # Login Page  
├── registration.html # Registration Page (not uploaded but referenced)  
├── welcome.html      # Welcome Page (not uploaded but referenced)  
├── style.css         # Styling for pages  
├── main.js           # JavaScript logic for registration & login  

⚙️ How It Works

Registration

User enters a username & password.

Credentials are saved in the browser’s localStorage.

Redirects to the login page.

Login

User enters username & password.

Credentials are verified with localStorage.

On success → Redirects to welcome.html.

On failure → Shows error message.

🖼️ Screenshots

Login Page – Input fields for username & password.

Registration Page – Allows new users to sign up.

Welcome Page – Displays after successful login.

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling

JavaScript (ES6) – Logic & validation

📌 Usage

Clone or download the project.

Open registration.html in your browser to register a user.

Log in using login.html.

On success, you’ll be redirected to welcome.html.
