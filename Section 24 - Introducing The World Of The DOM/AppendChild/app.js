const container = document.querySelector('#container');

for(let i = 0; i < 100; i++){
    const newButton = document.createElement('button');
    newButton.append('CLICK ME');
    container.appendChild(newButton);
}