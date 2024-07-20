## Homework Assignment: Lesson 5 - Basic Multimedia Controls in HTML5

### Objective:
Learn to embed multimedia content using HTML5 and create simple custom controls for playback using only HTML and basic JavaScript.

### Instructions:
1. **Review the Lesson**: Familiarize yourself with the basic use of `<video>` and `<audio>` tags in HTML5. Understand how these tags can be controlled programmatically using JavaScript.

2. **Setup Your Environment**:
   - Use a text editor, such as VS Code or Sublime Text.
   - Ensure you have a sample video and audio file. If you need files, use royalty-free samples available online.

3. **Tasks**:
   - **Embed a Video and an Audio File**:
     Use the `<video>` and `<audio>` tags to add a video and an audio file to your HTML document. Make sure these media files play when the webpage loads.
   - **Create Basic Controls**:
     Add simple buttons that control the playback of the video and audio. You only need to implement play and pause buttons.
   - **Implement JavaScript for Controls**:
     Write minimal JavaScript to handle the play and pause actions.

4. **Code Example**:
   ```html
   <!-- HTML for embedding media and basic controls -->
   <video id="videoPlayer" src="sample_video.mp4" controls></video>
   <audio id="audioPlayer" src="sample_audio.mp3" controls></audio>
   <div>
     <button onclick="document.getElementById('videoPlayer').play()">Play Video</button>
     <button onclick="document.getElementById('videoPlayer').pause()">Pause Video</button>
     <button onclick="document.getElementById('audioPlayer').play()">Play Audio</button>
     <button onclick="document.getElementById('audioPlayer').pause()">Pause Audio</button>
   </div>
   ```

5. **Submission Guidelines**:
   - Submit your HTML file.
   - Ensure the video and audio play correctly when the play buttons are pressed, and pause when the pause buttons are pressed.
   - Submit your assignment via the designated platform by the deadline.

### Deadline:
Please submit your completed assignment by next weeks Lesson.

### Additional Resources:
- [HTML5 Multimedia Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Using Audio and Video in HTML](https://www.w3schools.com/html/html5_video.asp)