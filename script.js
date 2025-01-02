// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Now your code to add event listeners can go here

  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;
    
    // Logic to save preferences or apply them
    setCookie('fontSize', fontSize, 30);
    setCookie('fontColor', fontColor, 30);
    
    // Apply preferences to the page
    applyPreferences();
  });
  
  // Function to set a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  // Function to get a cookie
  function getCookie(name) {
    const nameEq = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEq) === 0) return c.substring(nameEq.length, c.length);
    }
    return "";
  }

  // Apply preferences when the page loads
  function applyPreferences() {
    const fontSize = getCookie('fontSize');
    const fontColor = getCookie('fontColor');
    
    if (fontSize) {
      document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
      document.getElementById('fontsize').value = fontSize;
    }
    
    if (fontColor) {
      document.documentElement.style.setProperty('--fontcolor', fontColor);
      document.getElementById('fontcolor').value = fontColor;
    }
  }

  // Apply preferences when the page loads
  applyPreferences();
});
