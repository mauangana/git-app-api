// init github

const github = new Github(); // you need to instantiate // instance

const ui = new UI();

// search input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', e => {
    // get inputtext
    const userText = e.target.value;
    if (userText !== ''){
        // make http call
        
        github.getUser(userText)
        .then(data => {
        // check the user's data
            // console.log(data);

            if (data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert('User not found', 'alert alert-danger')
            } else{
                // show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        });
    } else{
        ui.clearProfile();
    }
});