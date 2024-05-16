const URL = 'https://api.chucknorris.io/jokes/random'
const jokeWrapper = document.querySelector(".joke-wrapper");
const btn = document.querySelector(".button-78");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    getAJoke();
})

async function getAJoke() { 
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    const joke = data.value
    const icon = data.icon_url

    jokeWrapper.innerHTML = `
        <div class="text-wrapper">
            <p class="quote">"${joke}"</p>
        <div>
    `;
    console.log(data.icon_url)
};
