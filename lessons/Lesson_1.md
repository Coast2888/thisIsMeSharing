## Lesson of the Day: HTML5 Semantic Elements

### Overview
Semantic elements are a key feature of HTML5 that enhance the accessibility and searchability of web pages by clearly describing its structure and content.

### Why Use Semantic Elements?
- **Accessibility:** Assistive technologies like screen readers can interpret the content more accurately.
- **SEO Benefits:** Search engines better understand the page structure and content, improving SEO.
- **Maintainability:** Makes the code easier to read and maintain.

### Key Semantic Elements in HTML5
- `header`: Defines a header for a document or a section.
- `footer`: Specifies a footer for a document or a section.
- `article`: Represents a self-contained composition in a document that is independently distributable or reusable.
- `section`: Defines a section in a document, such as chapters, headers, footers, or any other sections of the document.
- `nav`: Designates navigation links.
- `aside`: Used for content that is tangentially related to the content around it, like a sidebar.

### Example Usage
Here is a simple structure using HTML5 semantic elements:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sample Page</title>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <p>Welcome to my website!</p>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section>
        <h2>About Me</h2>
        <p>This section contains information about me.</p>
    </section>
    <aside>
        <h2>News</h2>
        <p>Latest news related to my interests.</p>
    </aside>
    <footer>
        <p>Copyright © 2024</p>
    </footer>
</body>
</html>
```

### Exercise
Try adding a new `section` element to the provided HTML structure that describes your favorite hobby or a project you are working on.
