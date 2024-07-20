## Lesson of the Day: HTML5 Form Enhancements

### Overview
HTML5 introduces several enhancements for forms that make it easier to gather input from users. These enhancements include new input types and attributes that provide better control over data entry and improve user experience.

### New Input Types
HTML5 includes a variety of new input types that cater to specific data needs, reducing the need for additional JavaScript validation:
- `email`: Validates that the entered text is an email address.
- `url`: Ensures the text entered is a URL.
- `date`, `time`, `datetime-local`: Allows users to enter a date, time, or both, using a native date/time picker.
- `number`: Facilitates the input of numerical values, with controls for incrementing and decrementing.
- `range`: Creates a slider to select a value within a specific range.
- `color`: Provides a color picker to select a color.

### New Attributes
New attributes enhance the functionality of form elements:
- `placeholder`: Shows a hint to the user about what to enter in the input field.
- `required`: Specifies that an input field must be filled out before submitting the form.
- `pattern`: Defines a regex pattern that the input field value must match.
- `autocomplete`: Helps the browser predict the user’s input based on previous inputs.
- `autofocus`: Automatically focuses the input when the page loads.
- `multiple`: Allows multiple values/file selections for `input` types like `email` or `file`.

### Example Usage
Here's an example form utilizing HTML5 enhancements:

```html
<form action="/submit" method="post">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required placeholder="Enter your email">
    
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="18" max="100">
    
    <label for="homepage">Homepage:</label>
    <input type="url" id="homepage" name="homepage" placeholder="https://example.com">
    
    <input type="submit" value="Submit">
</form>
```

### Exercise
Modify the above form by adding a new input field for selecting a date of birth with appropriate validations.