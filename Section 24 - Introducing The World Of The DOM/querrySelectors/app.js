/* I've provided you with some simple markup in index.html.  Your task is to use querySelector and querySelectorAll to select some of those elements.

Select all elements that have the class of "done" and save them in a variable called doneTodos.

Select the one checkbox and save it in a variable called checkbox. Be careful, there is more than one input element on the page! You'll need to select using the type attribute. */

const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('input[type="checkbox"]');


doneTodos[0].innerText = 'Play';
doneTodos[1].innerHTML = '<b><i>Play</i></b>';