// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const today = new Date();
const hour = today.getHours();
const Name = CONFIG.name;

const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

let greeting = '';

if (hour >= 23 || hour < 5) {
	greeting = gree1;
} else if (hour >= 6 && hour < 12) {
	greeting = gree2;
} else if (hour >= 12 && hour < 17) {
	greeting = gree3;
} else {
	greeting = gree4;
}

// replace any name templates with the users name
greeting = greeting.replace("{name}", Name)

document.getElementById('greetings').innerText = greeting;