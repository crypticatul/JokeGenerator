document.getElementById('joke-button').addEventListener('click', generateJoke);
document.getElementById('share-button').addEventListener('click', shareJoke);
document.getElementById('contact-button').addEventListener('click', contactUs);
document.getElementById('email-button').addEventListener('click', contactUs);
document.getElementById('meme-button').addEventListener('click', generateMeme);

function generateJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = data.joke;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('joke').innerText = 'Oops! Something went wrong...';
        });
}

function shareJoke() {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this joke!',
            text: document.getElementById('joke').innerText,
            url: window.location.href,
        })
        .catch(console.error);
    } else {
        alert('Your browser does not support the Share API');
    }
}

function contactUs() {
    window.location.href = 'mailto:your-email@example.com';
}

function generateMeme() {
    const memeTemplates = [
        "aag", "ackbar", "afraid", "bender", "biw", "blb", "cbg", "ch", "crazypills",
        "dodgson", "dsm", "dwight", "fry", "fwp", "gandalf", "hagrid", "happening",
        "hipster", "icanhas", "imsorry", "inigo", "interesting", "ive", "iw", "jetpack",
        "joker", "jw", "keanu", "live", "ll", "mordor", "morpheus", "neo", "nice",
        "officespace", "older", "oprah", "philosoraptor", "red", "remembers", "sb",
        "sf", "ski", "soa", "sohappy", "sohot", "soup-nazi", "sparta", "stew", "taken",
        "tried", "ugandanknuck", "whatyear", "winter", "wonka", "xy", "yallgot", "yodawg",
        "yuno"
    ];
    const randomIndex = Math.floor(Math.random() * memeTemplates.length);
    const memeUrl = `https://api.memegen.link/images/${memeTemplates[randomIndex]}/_.png`;
    let imgTag = document.createElement('img');
    imgTag.src = memeUrl;
    imgTag.alt = "Random meme";
    document.getElementById('meme').innerHTML = '';
    document.getElementById('meme').appendChild(imgTag);
}
