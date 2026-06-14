/*
	DOM manipulation notes and examples

	Selection methods:
		- getElementById(id) -> returns a single Element (fast)
		- getElementsByClassName(class) -> returns an HTMLCollection (live)
		- querySelector(selector) -> returns the first matching Element
		- querySelectorAll(selector) -> returns a static NodeList

	HTMLCollection vs NodeList:
		- HTMLCollection updates when the DOM changes (live)
		- NodeList from querySelectorAll is static and won't update automatically

	Examples below show reading/writing, traversal, creating elements, and events.
*/

// --- Selections ---
const headingCollection = document.getElementsByClassName('heading'); // HTMLCollection (live)
const paragraph = document.getElementById('para'); // single element
const myButton = document.getElementById('myButton');
const myButton2 = document.getElementById('myButton2');
const firstDiv = document.querySelector('.div1'); // first .div1
const allDivs = document.querySelectorAll('.div1'); // NodeList of .div1

console.log('headingCollection (HTMLCollection):', headingCollection);
console.log('paragraph (Element):', paragraph);

// --- Read / Write ---
paragraph.style.backgroundColor = 'rgba(255,0,0,0.06)';
if (headingCollection.length > 0) {
	headingCollection[0].style.color = '#ff7f50';
	headingCollection[0].innerText = 'We changed the heading text';
}
paragraph.innerText = 'This paragraph text was updated by script.js';

// --- Traversal examples ---
console.log('parentElement of paragraph:', paragraph.parentElement);
console.log('children of firstDiv:', firstDiv.children);
console.log('previousElementSibling:', paragraph.previousElementSibling);
console.log('nextElementSibling:', paragraph.nextElementSibling);

// --- Create + append elements ---
function addNote(text) {
	const note = document.createElement('p');
	note.className = 'note';
	note.innerText = text;
	firstDiv.appendChild(note);
	return note;
}
addNote('New note appended using createElement() and appendChild()');

// --- Events ---
myButton.addEventListener('click', () => {
	// Toggle a CSS class for visual feedback
	paragraph.classList.toggle('highlight');
});

myButton2.addEventListener('click', () => {
	// Insert a small reminder after the paragraph
	const reminder = document.createElement('small');
	reminder.innerText = 'Reminder: practice DOM traversal!';
	reminder.style.display = 'block';
	paragraph.insertAdjacentElement('afterend', reminder);
});

// Notes:
// - Use textContent when inserting plain text only (safer and faster).
// - Use innerHTML only when you need to insert HTML markup.
// - Prefer addEventListener for multiple handlers and clearer separation.