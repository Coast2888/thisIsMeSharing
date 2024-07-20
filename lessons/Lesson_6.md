## Lesson of the Day: HTML5 Advanced Event Handling

### Overview
Event handling is central to creating interactive web pages. HTML5, in conjunction with JavaScript, allows developers to respond to user actions like clicks, hover effects, and keyboard events, enabling dynamic content updates without reloading the page.

### Commonly Used Event Attributes
- **`onclick`**: Executes JavaScript when a button or link is clicked.
- **`onmouseover`** and **`onmouseout`**: Trigger actions when the mouse enters or leaves an element.
- **`onkeydown`**, **`onkeypress`**, **`onkeyup`**: Detect when the user presses, releases, or taps keys on the keyboard.

### Example Usage
Below is an example demonstrating different event handlers:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Advanced Event Handling</title>
    <script>
        function displayMessage() {
            alert('Hello, welcome to our website!');
        }

        function changeColor(element, color) {
            element.style.backgroundColor = color;
        }
    </script>
</head>
<body>
    <button onclick="displayMessage()">Welcome Message</button>
    <br><br>
    <div onmouseover="changeColor(this, 'yellow')" onmouseout="changeColor(this, 'white')" style="width:200px; height:100px; border:1px solid #000;">
        Hover over me!
    </div>
    <br>
    <input type="text" onkeydown="alert('Key pressed!')" placeholder="Press any key...">
</body>
</html>
```

### Exercise
Modify the above example by adding an `<input>` field that changes its border color when focused and returns to the original color when focus is lost. Use the `onfocus` and `onblur` events to achieve this.