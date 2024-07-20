## Lesson of the Day: Creating an Image Map for Navigation in HTML5

### Overview
An image map allows you to associate clickable areas on an image with different destinations, making it a visually appealing alternative to traditional text-based menus. This technique can be particularly effective for graphical interfaces or when a visual representation adds value to the user's navigation experience.

### HTML5 Image Map Basics
- **`<map>`**: This element is used to define a clickable area on an image.
- **`<area>`**: Specifies the shape, coordinates, and hyperlink target for each clickable area.
- **Shapes**: The areas within a map can be rectangles (`rect`), circles (`circle`), or polygons (`poly`).

### Example Usage
Let's create an image map for a website that has different sections represented by various parts of an image. Suppose we have an image with four quadrants, each representing a different page: Home, About Us, Services, and Contact.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Image Map Example</title>
</head>
<body>
    <h1>Website Navigation</h1>
    <img src="menu.jpg" alt="Navigation Menu" usemap="#menuMap" style="width: 400px; height: 300px;">
    <map name="menuMap">
        <area shape="rect" coords="0,0,200,150" href="#home" alt="Home">
        <area shape="rect" coords="200,0,400,150" href="#about" alt="About Us">
        <area shape="rect" coords="0,150,200,300" href="#services" alt="Services">
        <area shape="rect" coords="200,150,400,300" href="#contact" alt="Contact">
    </map>
</body>
</html>
```

### CSS Styling (Optional)
To enhance the user experience, you can add visual cues when users hover over different areas of the image:

```css
area:hover {
    background-color: rgba(255, 255, 255, 0.5);
}
```

### Exercise
1. Create your own image representing a fictional website layout.
2. Define clickable areas that correspond to different pages or sections of the site.
3. Use the `<map>` and `<area>` tags to link these areas to actual sections within your HTML document.