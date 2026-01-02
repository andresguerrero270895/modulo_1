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