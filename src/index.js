// Main entry point for the application
console.log('Application started');

// Get the app container
const app = document.getElementById('app');

// Create and add content
const content = document.createElement('div');
content.innerHTML = `
    <h1>Welcome to My Webpack App</h1>
    <p>If you can see this message, your application is working correctly!</p>
    <button id="testButton">Click Me</button>
`;

app.appendChild(content);

// Add some interactivity
document.getElementById('testButton').addEventListener('click', () => {
  alert('Button clicked! The app is working!');
});
