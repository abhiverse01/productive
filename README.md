<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productive Chrome Extension</title>
</head>
<body>

<h1>Productive</h1>

<p>A Google Chrome extension to manage and remind you of daily and long-term tasks. This extension helps you enhance your productivity by providing timely notifications for your tasks.</p>

<h2>Features</h2>
<ul>
    <li>Add tasks with specific due dates and times.</li>
    <li>Receive notifications for tasks at the specified times.</li>
    <li>View a list of all tasks.</li>
    <li>Delete tasks when completed or no longer needed.</li>
    <li>Minimalistic and user-friendly interface.</li>
</ul>

<h2>Installation</h2>
<ol>
    <li><strong>Clone or Download the Repository:</strong>
        <pre><code>git clone https://github.com/yourusername/task-manager-extension.git</code></pre>
    </li>
    <li><strong>Open Chrome and Navigate to Extensions:</strong>
        <ul>
            <li>Go to <code>chrome://extensions/</code>.</li>
            <li>Enable "Developer mode" in the top right corner.</li>
        </ul>
    </li>
    <li><strong>Load the Unpacked Extension:</strong>
        <ul>
            <li>Click on "Load unpacked" and select the directory where you cloned/downloaded the repository.</li>
        </ul>
    </li>
    <li><strong>Pin the Extension (Optional):</strong>
        <ul>
            <li>Click on the puzzle icon in the top right corner of Chrome.</li>
            <li>Find "Task Manager" and pin it for easy access.</li>
        </ul>
    </li>
</ol>

<h2>Usage</h2>
<ol>
    <li><strong>Open the Extension:</strong>
        <ul>
            <li>Click on the Task Manager icon in the Chrome toolbar.</li>
        </ul>
    </li>
    <li><strong>Add a Task:</strong>
        <ul>
            <li>Enter the task description in the input field.</li>
            <li>Select the date and time for the task.</li>
            <li>Click "Add Task".</li>
        </ul>
    </li>
    <li><strong>View Tasks:</strong>
        <ul>
            <li>All added tasks will be displayed in a list below the form.</li>
        </ul>
    </li>
    <li><strong>Delete a Task:</strong>
        <ul>
            <li>Click the "X" button next to the task you want to delete.</li>
        </ul>
    </li>
    <li><strong>Receive Notifications:</strong>
        <ul>
            <li>You will receive a notification at the specified time for each task.</li>
        </ul>
    </li>
</ol>

<h2>Development</h2>

<h3>Files and Folders</h3>
<ul>
    <li><code>manifest.json</code>: Defines the extension's properties and permissions.</li>
    <li><code>popup.html</code>: The HTML file for the extension's popup UI.</li>
    <li><code>popup.js</code>: JavaScript file for handling the popup's functionality.</li>
    <li><code>background.js</code>: JavaScript file for handling background tasks like notifications.</li>
    <li><code>icons/</code>: Folder containing icon images for the extension.</li>
</ul>

<h3>Code Overview</h3>
<h4>manifest.json</h4>
<p>Defines the extension's name, version, description, permissions, background scripts, and icons.</p>

<h4>popup.html</h4>
<p>The HTML structure for the extension's popup UI.</p>

<h4>popup.js</h4>
<p>Handles task addition, deletion, and scheduling notifications.</p>

<h4>background.js</h4>
<p>Handles alarms and notifications in the background.</p>

</body>
</html>
