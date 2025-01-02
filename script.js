//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
  const nameEq = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEq) === 0) return c.substring(nameEq.length, c.length);
  }
  return "";
}

// Function to apply saved preferences to the page
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

// Event listener for form submission
document.getElementById('preferences-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting and page reloading
  
  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;
  
  // Save the preferences in cookies
  setCookie('fontSize', fontSize, 30); // Save for 30 days
  setCookie('fontColor', fontColor, 30);
  
  // Apply the new preferences
  applyPreferences();
});

// Apply preferences when the page loads
window.onload = function() {
  applyPreferences();
};
