const list = document.querySelector('ul');
const button = document.querySelector('#button');

const getDadJoke = async () => {

    try {
        const config = { headers: { Accept: 'application/json' } }
        const dadJoke = await axios.get('https://icanhazdadjoke.com/', config)
        return dadJoke.data.joke;
    } catch (error) {
        return 'NO JOKES AVAILABLE! SORRY :('
    }
}


const displayNewJoke = async () => {
    const newDadJoke = await getDadJoke();
    const newLI = document.createElement('li');
    newLI.append(newDadJoke);
    list.append(newLI);
}

button.addEventListener('click', displayNewJoke)