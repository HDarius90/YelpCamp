const data = '{"type":"general","setup":"What do you call an alligator in a vest?","punchline":"An in-vest-igator!","id":220}';
const parsedData = JSON.parse(data);

const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const paragraph = document.querySelector('p');
const footer = document.querySelector('footer');

h2.innerText = parsedData.type;
h3.innerText = parsedData.punchline;
paragraph.innerText = parsedData.setup;
footer.innerText = parsedData.id;

console.log(parsedData);