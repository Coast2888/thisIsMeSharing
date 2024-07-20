### Lesson 10: Building an Image Carousel with HTML5 and CSS

#### Objective
In this lesson, we'll learn how to create a simple image carousel using HTML, CSS, and optional JavaScript. This component is widely used on websites to showcase multiple images in a confined space efficiently.

#### Materials Needed
- Text editor (e.g., VS Code, Sublime Text)
- Basic knowledge of HTML and CSS
- Images for the carousel

#### Lesson Outline

1. **Introduction**
   - Discuss the purpose and utility of an image carousel on websites.
   - Overview of the technologies used: HTML, CSS, and JavaScript.

2. **Setting Up the HTML Structure**
   - Explain the basic structure of the carousel.
   - Code example:
     ```html
     <div class="carousel">
       <div class="carousel-items">
         <div class="carousel-item active"><img src="image1.jpg" alt="Image 1"></div>
         <div class="carousel-item"><img src="image2.jpg" alt="Image 2"></div>
         <div class="carousel-item"><img src="image3.jpg" alt="Image 3"></div>
         <!-- Add more items as needed -->
       </div>
     </div>
     ```

3. **Styling with CSS**
   - Introduction to styling the carousel for proper layout and visibility.
   - Code example:
     ```css
     .carousel {
       position: relative;
       width: 100%;
       overflow: hidden;
     }

     .carousel-items {
       display: flex;
       transition: transform 0.5s ease;
     }

     .carousel-item {
       min-width: 100%;
       transition: opacity 0.5s ease;
     }

     .carousel-item img {
       width: 100%;
       display: block;
     }

     .active {
       opacity: 1;
     }
     ```

4. **Adding JavaScript for Automatic Sliding**
   - Optional: Adding simple JavaScript to automate the sliding of images.
   - Code example:
     ```javascript
     document.addEventListener('DOMContentLoaded', function() {
       const items = document.querySelectorAll('.carousel-item');
       let currentIndex = 0;

       function cycleItems() {
         const item = items[currentIndex];
         item.classList.remove('active');

         currentIndex = (currentIndex + 1) % items.length;
         items[currentIndex].classList.add('active');
       }

       setInterval(cycleItems, 3000);
     });
     ```

5. **Discussion and Customization**
   - Encourage students to customize their carousels.
   - Discuss potential additions such as navigation arrows, pagination dots, or touch swipe functionalities.

6. **Assignment**
   - Students create their own customized image carousel and integrate it into a sample web page.

#### Learning Outcomes
By the end of this lesson, students should be able to:
- Understand the structure and function of an image carousel.
- Apply CSS properties to manage layouts and animations in web components.
- Implement basic JavaScript to add interactive elements to web pages.

### Additional Resources

#### Advanced CSS Animations
1. **CSS Tricks - A Guide to CSS Animation**: This comprehensive guide covers all aspects of CSS animations, from keyframes to animation properties. [Read more on CSS Tricks](https://css-tricks.com/almanac/properties/a/animation/)
2. **MDN Web Docs - Using CSS Animations**: A detailed tutorial by Mozilla’s developer network that explores creating complex animations using CSS. [Explore MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
3. **Web.dev - Introduction to complex animations**: This resource dives into advanced techniques for building sophisticated animations in web design. [Learn from Web.dev](https://web.dev/animation/)

#### Examples of Real-World Websites Using Image Carousels
1. **Airbnb**: Often uses carousels to showcase property photos, providing a seamless browsing experience. [Visit Airbnb](https://www.airbnb.com/)
2. **Netflix**: Utilizes horizontal scrolling carousels for navigating through vast libraries of movies and TV shows. [Explore Netflix](https://www.netflix.com/)
3. **Apple Product Pages**: Apple’s product pages frequently feature beautifully designed carousels to display product features and variations effectively. [See Apple’s Design](https://www.apple.com/iphone-12/)
