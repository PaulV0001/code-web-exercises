"use strict";


function wait(time) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve();
            console.log("waiting time")
        },
        time)

    });

}


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




const optionalHeaders = {
    headers: {
        'Authorization': 'token 3920c4d2630f33987515bdf0c632f8f7e2eba469'
    }
};

const getCommits = (username) => {
   return fetch('https://api.github.com/users/username/events');
};

let gitHubPromise = getCommits("fmendonzaro");

gitHubPromise.then((promise) => {
    promise.json().then( (response) => {
        console.log(response[0]);
    })
} );