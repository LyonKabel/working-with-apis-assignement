'use strict';
(() => {
    const url = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`;


    const setupElement = document.querySelector(".joke-setup");
    const deliveryElement = document.querySelector(".joke-delivery");
    const loadButton = document.querySelector(".load-button");
    const laughElement = document.querySelector(".laugh-now");

    const laugh = ["Hehehehe", "LoL", "Lmao", "HAHAHHAHAH", "That was so darn funny", "Cheesy but very good"];

    
    function fetchJoke() {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch joke.');
                }
                return response.json();
            })
            .then(data => {
                setupElement.textContent = data.setup;
                deliveryElement.textContent = data.delivery;
            })
            .catch(error => {
                console.error('Error:', error);
                setupElement.textContent = 'Failed to fetch joke.';
                deliveryElement.textContent = '';
            });
            const randNum = Math.floor(Math.random() * 6);
            laughElement.textContent = laugh[randNum];

    }

    
    fetchJoke();

    
    loadButton.addEventListener('click', fetchJoke);


})()