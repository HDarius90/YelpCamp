const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.querry.value;
    const config = { params: { q: searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImagees(res.data);
    form.elements.querry.value = '';
})


const makeImagees = (shows) => {
    for (const result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}