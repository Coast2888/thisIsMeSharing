## Lesson of the Day: Combining HTML5 and CSS Features

### Overview
In this lesson, we will integrate various HTML5 features and CSS styling to create a more complex and interactive webpage. This project will demonstrate how different aspects of HTML5 and CSS can work together to build a functional and visually appealing web application.

### Project Description
We'll create a web page for a fictional event. The page will include a registration form, multimedia content, and interactive elements styled with CSS.

### HTML Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>Fictional Event</title>
    <style>
        body { font-family: Arial, sans-serif; }
        header, footer { background-color: #f8f9fa; padding: 20px; text-align: center; }
        nav { background-color: #343a40; padding: 10px 0; }
        nav a { color: white; margin: 0 15px; text-decoration: none; }
        .content { margin: 20px 10%; }
        button:hover { background-color: #007bff; color: white; }
        .highlight:hover { font-size: 18px; }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to Our Fictional Event</h1>
    </header>
    <nav>
        <a href="#home">Home</a>
        <a href="#register">Register</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="content">
        <section id="home">
            <h2>About the Event</h2>
            <p>Join us for a day of learning and fun! This event will cover a range of topics and activities.</p>
            <video controls>
                <source src="intro.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </section>
        <section id="register">
            <h2>Register Now</h2>
            <form>
                <input type="text" placeholder="Name" required>
                <input type="email" placeholder="Email" required>
                <button type="submit">Submit</button>
            </form>
        </section>
        <section id="contact">
            <h2>Contact Us</h2>
            <p>Have questions? Contact us at <a href="mailto:info@example.com">info@example.com</a>.</p>
        </section>
    </div>
    <footer>
        <p>Copyright © 2024</p>
    </footer>
</body>
</html>
```

### Exercise
Your task is to add interactive JavaScript that displays a welcome message when the user clicks on the registration button. Also, enhance the contact section with a dynamic map showing the event location using an iframe or a suitable API.