// Login button functionality
document.getElementById("login-btn").addEventListener("click", () => {
  const userId = prompt("Enter User ID:");
  const password = prompt("Enter Password:");
  if (userId && password) {
      alert(`Login details:\nUser ID: ${userId}\nPassword: ${password}`);
  }
});

// Search bar functionality
document.getElementById("search-btn").addEventListener("click", () => {
  const searchQuery = document.getElementById("search-input").value;
  if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // Add search functionality or API integration here
  } else {
      alert("Please enter a search query.");
  }
});

// Responsive navigation toggle
document.getElementById("nav-toggle").addEventListener("click", () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
});


