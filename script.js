// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  // Check if there are stored preferences in cookies
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  // If saved preferences exist, apply them to the body
  if (savedFontSize) {
    document.body.style.fontSize = `${savedFontSize}px`;
  }
  if (savedFontColor) {
    document.body.style.color = savedFontColor;
  }

  // Get the form elements
  const form = document.querySelector("form");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Event listener for the form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Get the values from the input fields
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Set cookies for font size and color (expires in 7 days)
    setCookie("fontsize", fontSize, 7);
    setCookie("fontcolor", fontColor, 7);

    // Apply the new preferences to the body
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.color = fontColor;

    // Alert user that preferences are saved
    alert("Preferences saved!");
  });

  // Helper function to set a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  // Helper function to get a cookie by name
  function getCookie(name) {
    const nameEq = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEq) === 0) {
        return c.substring(nameEq.length, c.length);
      }
    }
    return "";
  }
});
