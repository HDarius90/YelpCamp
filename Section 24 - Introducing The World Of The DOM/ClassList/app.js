/* In index.html, you'll find 6 <li> elements, two of which have the 'highlight' class applied to them. 

Please use JavaScript and the classList property to invert which elements have the highlight class.  */

const listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle('highlight');
    
}