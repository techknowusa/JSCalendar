console.log("script running")

const wrapper = document.querySelector('.cardBody .row')
console.log(wrapper)

var preferences = {
  'location': [],
  'session': [],
  'course': []
}
var courses = []

fetch("https://raw.githubusercontent.com/jolson615/JSCalendar/master/schedule.json")
  .then(r => r.json())
  .then(data => {
    populatePage(data)
    courses = data
  }).catch(e => console.log("Error"))

function populatePage(courses) {
  courses.forEach(course => {
    addCard(course)
  })
}

function addCard(course) {
  let imagesrc = getImage(course["Class Code"])
  let description = getDescription(course["Class Code"])
  let shortDescription = getShortDescription(course["Class Code"])
  if (course["Area"] == "Queens") {
    console.log("Queens not yet ready to run")
  } else {
    wrapper.innerHTML += `
        <div class="col s12 m6 l4 coursecard" data-session='${course["Session"]}' data-location='${course["Area"]}' data-course='${course["Class"]}' data-age='${course["Max Age"]}'>
          <div class="card sticky-action medium teal darken-2">
            <div class="card-image" style="max-height: 30%; overflow: hidden">
              <img class="activator" src='${imagesrc}'>
              <span class="card-title" style="font-weight: 900; text-shadow: 2px 2px 2px #000">${course["Class"]}</span>
            </div>
            <div class="card-content white-text" style="max-height: 60%">
              <span class="card-title row">${course["Area"]}<i class="material-icons right activator waves-effect waves-light">more_vert</i></span>
              <h6 class="courseLocation row">${course["Location"]}</h6>
              <p class="ugly">${shortDescription}</p>
              <br>
              <div class="row">
                <span class="courseDates">${course["Start Date"]} - ${course["End Date"]}</span><span class="right">Ages ${course["Min Age"]}-${course["Max Age"]}</span>
              </div>
            </div>
            <div class="card-action">
              <a href="https://www.upperlinecode.com/classes" target="_blank">Learn More</a>
              <a href='${course["Link"]}' target="_blank">Register</a>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${course["Class"]}<i class="material-icons right">close</i></span>
              <p class="">${description}</p>

            </div>
          </div>
        </div>
    `
  }
}

function getImage(courseName) {
  if (courseName == "ruby") {
    return("images/ruby.png")
  } else if (courseName == "swift") {
    return("images/ios.png")
  } else if (courseName == "javascript") {
    return("images/javascript.png")
  }
}

function getDescription(courseName) {
  if (courseName == "ruby") {
    return("Back-end languages like Ruby are used to write algorithms that power websites like Airbnb. By the end of this course, students will use core Ruby, HTML, and CSS to build a functional web app.")
  } else if (courseName == "swift") {
    return("It takes months to get an app on the AppStore, but in these two weeks, students build at least 5 basic apps using Swift frameworks and try the apps on their own iPhones.")
  } else if (courseName == "javascript") {
    return("JavaScript brings the web to life: animate webpages, interact with other sites, and create art, games, and virtual realities. In this course, students will build at least two JavaScript-powered web apps.")
  }
}

function getShortDescription(courseName) {
  if (courseName == "ruby") {
    return("Master full-stack programming with Ruby")
  } else if (courseName == "swift") {
    return("Build iPhone apps with Xcode and Swift")
  } else if (courseName == "javascript") {
    return("Engineering meets design with JavaScript")
  }
}
