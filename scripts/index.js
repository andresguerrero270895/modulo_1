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
  }

  getAllActivities(){
    return this.activities;
  }

  createActivity(title, description, imgUrl){
    const id = Date.now ();
    const newActivity = new Activity(id, title, description, imgUrl);
    this.activities.push(newActivity);
    return newActivity;
  }

  deleteActivity(id) {
    this.activities = this.activities.filter (
      activity => activity.id !== id
    )
  }
}