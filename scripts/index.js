
// This function reprensents the class activity 
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id,
    this.title = title,
    this.description = description,
    this.imgUrl = imgUrl
  }
}

class Repository { 
  constructor() {
    this.activities = [];
    this.idCounter = 1;
  }

  getAllActivities(){
    return [...this.activities];
  }

  createActivity(title, description, imgUrl){
    const activity = new Activity(
      this.idCounter++,
      title,
      description,
      imgUrl
    )
    this.activities.push(activity);
  }

  deleteActivity(id) {
    this.activities = this.activities.filter (
      activity => activity.id !== id
    )
  }
}

const repository = new Repository();

function createActivityCard(activity) {
  const card = document.createElement("div");
  card.className = "activity-card";

  const title = document.createElement("h3");
  title.textContent = activity.title;

  const description = document.createElement("p");
  description.textContent = activity.description;

  const image = document.createElement("img");
  image.src = activity.imgUrl;
  image.alt = activity.title;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    repository.deleteActivity(activity.id);
    renderActivities();
  });

  card.append(title, description, image, deleteButton)
  return card;
}