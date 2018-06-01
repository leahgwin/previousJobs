// Use Object.create() to define objects for every place that you've worked before NSS.

const moonRiver = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "Moon River Music Festival"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "10-10-2017"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "10-10-2017"
    },
    position: {
        enumerable: true,
        writable: false,
        value: "Live Social Media Specialist"
    }
})

const UMG = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "Universal Music Group"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "01-11-2016"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "05-13-2016"
    },
    position: {
        enumerable: true,
        writable: false,
        value: "Digital Marketing and Streaming Analytics Inter"
    }
})

const lyft = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "Lyft"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "06-13-2016"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "03-24-2017"
    },
    position: {
        enumerable: true,
        writable: false,
        value: "Social Media Customer Experience Associate"
    }
})

const inflammo = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "Inflammo"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "03-27-2017"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "05-18-2017"
    },
    position: {
        enumerable: true,
        writable: false,
        value: "Branding and Engagement Manager"
    }
})

let newJob = {};

const jobMaker = (businessName, startDate, endDate, title) => {
    // Define desired object
    newJob = Object.create({}, {
        business: {
            enumerable: true,
            writable: false,
            value: businessName
        },
        employmentStart: {
            enumerable: true,
            writable: false,
            value: startDate
        },
        employmentEnd: {
            enumerable: true,
            writable: false,
            value: endDate
        },
        position: {
            enumerable: true,
            writable: false,
            value: title
        }
    })
    // Return it
    return newJob;
  }

jobMaker("Good Grit", "01/01/2016", "01/01/2017", "Freelance Writer");

console.log(newJob);

var jobArray = [];
jobArray.push(moonRiver, UMG, lyft, inflammo);
console.log(jobArray);

// Iterate over the array, and use document.createElement() to build an <article> element representing each job. The id property of the element should be the name of the business.

for (let i = 0; i < jobArray.length; i++) {
    //this line makes an article element represented by 'ar'
    let ar = document.createElement("article");
    //this line sets the article id to the value that comes from the array's business line
    ar.setAttribute("id", jobArray[i].business);
    //then we wanted to add text to the screen, so we created text node and grabbed the array's position for the text
    let p = document.createTextNode(jobArray[i].position);
    // then appended the text node to the article so it would go on the screen
    ar.appendChild(p);
    //then we assigned 'sect' to the practice section we query selected
    let sect = document.querySelector('#practice');
    //and then appended the article to the section we queryselected above
    sect.appendChild(ar);
    }
