## Lesson of the Day: Integrating CSS with HTML5

### Overview
Cascading Style Sheets (CSS) are used to style and lay out web pages — for example, to alter font sizes, colors, and spacing. CSS enhances user experience by making web applications more visually appealing and easier to navigate.

### CSS Basics
- **Selectors**: Define which part of the HTML structure the CSS rules will affect.
- **Properties**: Attributes you want to change, like color, font, width, etc.
- **Values**: Specific settings applied to properties.

### Styling HTML Elements
You can apply CSS directly inline, via internal styles within `<style>` tags, or through external stylesheets.

### Example Usage
Here's a simple example demonstrating how to style HTML elements with CSS:

```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS and HTML5</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        .highlight {
            color: red;
            font-weight: bold;
        }
        #welcome {
            background-color: blue;
            color: white;
            padding: 20px;
        }
    </style>
</head>
<body>
    <h1 id="welcome">Welcome to Our Site!</h1>
    <p class="highlight">This text is highlighted in red and bold.</p>
    <button style="background-color: green; color: white;">Click Me!</button>
</body>
</html>
```

### Exercise
Extend the CSS in the provided example by adding a hover effect to the button that changes its background color. Additionally, create a new class that increases the font size of text when the user hovers over it, and apply it to the paragraph tag.
