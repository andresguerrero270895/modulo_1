// Get references to form and container
const activityForm = document.getElementById("activity-form");
const activitiesContainer = document.getElementById("activities-container");

// Listen to form submit
activityForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop page reload

  // Get values from inputs
  const titleInput = document.getElementById("title-input");
  const descriptionInput = document.getElementById("description-input");
  const imageInput = document.getElementById("image-input");

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const imageUrl = imageInput.value.trim();

  if (!title || !description || !imageUrl) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Create card
  const card = document.createElement("article");
  card.classList.add("activity-card");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = title;

  const body = document.createElement("div");
  body.classList.add("activity-card-body");

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = description;

  body.appendChild(h3);
  body.appendChild(p);
  card.appendChild(img);
  card.appendChild(body);

  activitiesContainer.appendChild(card);

  // Clear inputs
  titleInput.value = "";
  descriptionInput.value = "";
  imageInput.value = "";
});