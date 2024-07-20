## Lesson of the Day: HTML5 Interactive Elements

### Overview
Interactive elements in HTML5 are designed to engage users directly, allowing them to perform actions like submitting forms, clicking buttons, or navigating through links. Understanding these elements is crucial for any web developer aiming to enhance user interaction on a webpage.

### Key Interactive Elements
1. **`<button>`**: Used to create a clickable button, which can be used for forms, dialogs, and more.
2. **`<a>`** (Anchor Tag): Primarily used for linking to other pages or sections within the same page. It can also be used to download files or define areas within an image map.
3. **Interactive Forms**: Beyond basic inputs, HTML5 supports dynamically changing form behaviors using attributes like `disabled`, `readonly`, and JavaScript events like `onchange`.

### Example Usage
Here's how these elements can be integrated into an HTML5 document:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Interactive Elements</title>
</head>
<body>
    <h1>Welcome to Our Site!</h1>
    <a href="https://www.example.com">Visit Our Homepage</a>
    <br><br>
    <button onclick="alert('Thank you for clicking!')">Click Me!</button>
    <br><br>
    <form action="/submit">
        <label for="user_input">Your Input:</label>
        <input type="text" id="user_input" name="user_input" onchange="alert('Input changed!')">
        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

### Exercise
Enhance the provided HTML by adding an anchor tag that links to a downloadable PDF and a button that toggles the visibility of a `<div>` element containing additional content.