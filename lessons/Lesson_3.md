## Lesson of the Day: HTML5 Multimedia Handling

### Overview
HTML5 provides built-in support for multimedia elements, which makes embedding audio and video content into web pages simpler and more efficient without the need for external plugins.

### HTML5 Video and Audio
- **`<video>`**: This element is used to embed video content. It supports multiple source files to ensure compatibility across different browsers.
- **`<audio>`**: Similar to the `<video>` element, but used for embedding sound content. It also supports multiple source formats.

### Attributes for Multimedia Tags
Both audio and video tags share some common attributes that enhance their functionality:
- `controls`: Displays the browser's default play, pause, and volume controls.
- `autoplay`: Automatically starts playing the media when the page loads (use with caution, as it can be intrusive).
- `loop`: Repeats the media continuously.
- `muted`: Mutes the audio output.
- `preload`: Specifies how the video is loaded when the page loads. Options are `none`, `metadata`, or `auto`.

### Example Usage
Here’s a simple example that demonstrates how to embed a video and an audio file:

```html
<video controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>

<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

### Exercise
Create a web page that includes both video and audio elements. Ensure that the video has controls enabled and includes at least two source formats for compatibility.
