/*
Complete these tasks which shoudl be review from previous problems.

****************************************************
****** Submit via github before 10AM Monday. *******
****************************************************

Remember to do your own work.

You may add elements to the html unless otherwise told to use only javascript in a specific task.

Overview: The user will be able to type their name and choose from a list one of the three job titles. When they slick submit, they will see their name and the job title in a div and an image based on the job title they chose.

X Task 1: Create an input element in html and store the user's typed name in a javascript variable when they press the submit button.

X Task 2: Create an empty select element in the html. Add any 3 job types as options of the selector via javascript (i.e Fireman, Mage, Doctor, Robot).

X Task 3: When the user presses submit, if there is no name in the input field, an error message should say "Please enter your name first"

 Task 4: When the user presses submit, if there is a name in the input field, the input field, submit button, and select element should go away and a div should say the job the person chose followed by their name (i.e. Doctor Fred). There is no way to enter the information again.

Task 5: When the user presses submit, in addition to what occured in Task 4, an image should also display via an img tag underneath their name. The image should be based on the job chosen (i.e. Robot Bob should show a picture of a robot under the text "Robot Bob")

Each task is worth 20 points for a total of 100 points on the assignment.
*/

/* Arrow Function

let name = (parameter(s)) => {
  //code to be executed
}

*/

'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const surveyButton = document.getElementById('submit');
	const input = document.getElementById('input');

	const possibleJobs = ['Fireman', 'Mage', 'Doctor', 'Robot'];

	const jobSelector = document.createElement('jobs');
	for (let i = 0; i < possibleJobs.length; i++) {
		const jobOption = document.createElement('options');
		jobOption.innerHTML = possibleJobs[i];
		jobSelector.appendChild(jobOption);
		console.log(jobOption, possibleJobs);
	}

	surveyButton.addEventListener('click', () => {
		if (input.value === '') {
			const errorDiv = document.getElementById('error');
			errorDiv.innerHTML += 'Error: Please enter your first name.';
		} else {
			const contentDiv = document.getElementById('content');
			contentDiv.innerHTML += 'Hello Dr. ' + jobSelector + input.value;
		}
		//console.log(input.value);
	});
});

//Function to hide a div
let hide = () => {
	const hideDiv = document.getElementById('hideDiv');
	if (hideDiv.style.display === 'none') {
		hideDiv.style.display = 'block';
	} else {
		hideDiv.style.display = 'none';
	}
};
