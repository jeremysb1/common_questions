// Creating a function that will reverse a string using JavaScript
// Input will be a string; for example, "fuddy duddy"
//Output will be the input reversed "yddud ydduf"

// this is an iterative way of solving the problem

function reverseString(str) {
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'enter a better input';
	}
	const backwards = [];
	const totalItems = str.lenght - 1;
	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}
	return backwards.join('');
}

