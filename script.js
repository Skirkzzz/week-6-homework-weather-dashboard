//show errors in the code
'strict'

//weatherAPI key
//const APIKey = a7d2e2249e5c96fb03fbcbbd0ecbf0f0
//const city = id
// Assemble: Create/select DOM elements
//var rootEl = $('#root');
//var formEl = $('#new-project-form');
//var citySearch = $('#createSearchBtn');

const today = moment();
$("#date-time").text(today.format("MMM Do, YYYY"));

// current date
setInterval(function() {
    var today = moment();
    $("#date-time").text(today.format("MMM Do, YYYY"));
}, 1000);

//var projectList = $('#projectList');

function setFormError(message) {
    $('#project-warning').text(message);
    $('#project-warning').addClass('show');

    setTimeout(function() {
        $('#project-warning').removeClass('show');
    }, 3000);
}

function newCity() {
    var cityName = $('#city-name').val();
    // var projectType = $('#project-type').val();
    // var hourlyWage = $('#hourly-wage').val();
    // var dueDate = $('#due-date').val();

    if (!cityName) {
        setFormError('Please enter a city name.');
        return;
    }

    // var daysDue = 26; //dueDate.diff(today, 'days');
    // var totalEarned = daysDue * hourlyWage;
    // var deleteOption = `<button class="btn btn-danger" onclick="deleteProject(this)">Delete</button>`;
    // var newCity = $(`<tr><td>${projectName}</td><td>${projectType}</td><td>${hourlyWage}</td><td>${dueDate}</td><td>${daysDue}</td><td>${totalEarned}</td><td>${deleteOption}</td></tr>`);
    // return (newProject);
}

// function onCreateNewCity(event) {
//     event.preventDefault();
//     console.log("onCreateNewCity");

//     // Create a new project
//     var cityWeather = newCity();
//     if (!cityName) {
//         return;
//     }
//     projectList.append(project);

//     // Hide the New Project Modal
//     $('#projectModal').modal('hide');

//     // Reset the form
//     resetNewProjectForm();
// }

function resetNewProjectForm() {
    $('#city-name').val('');
    // $("#project-type").val($("#project-type option:first").val());
    // $('#hourly-wage').val('75');
    // $('#due-date').val('');
}

// function deleteProject(button) {
//     $(button).parent().parent().remove();
// }

// citySearch.on("click", onCreateNewProject);