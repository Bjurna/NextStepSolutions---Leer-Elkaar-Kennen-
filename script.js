// Wait for the document to load before running the script
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("intro-form");
  const introList = document.getElementById("intro-list");

  // Handle form submission
  form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Get values from the form inputs
      const name = document.getElementById("name").value;
      const hobby = document.getElementById("hobby").value;
      const funFact = document.getElementById("fun-fact").value;

      // Create a new introduction item
      const introItem = document.createElement("div");
      introItem.classList.add("intro-item");
      introItem.innerHTML = `
          <strong>${name}</strong><br>
          Favorite Hobby: ${hobby}<br>
          Fun Fact: ${funFact}
      `;

      // Add the new item to the intro list
      introList.appendChild(introItem);

      // Clear the form after submission
      form.reset();
  });
});
