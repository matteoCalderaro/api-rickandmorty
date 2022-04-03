const axios = require('axios');

axios.get("https://rickandmortyapi.com/api/character/1,2,3,11,12,14")
.then((response)=> {
    // console.log(response.data);
	let characters = response.data
    console.log(characters);

    characters.forEach((character) => {
        axios.get(character.episode[0])
        .then((response) => {
            // console.log(character.status);

            let cardWrapper = document.querySelector("#cardWrapper")
                let cardElement = document.createElement("div")
                cardElement.classList.add("card")
                cardElement.innerHTML = `
                    <img class="w-full lg:w-64 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none" src="${character.image}" alt="">

                    <div class="flex flex-col justify-between py-2">
                        <div class="ml-3">
                            <p class="text-3xl text-white font-extrabold hover:text-hover">${character.name}</p>
                            <span class="text-white flex items-center space-x-2">
                                <svg class="${character.status === 'Alive' ? 'iconGreen' : 'iconRed'}" viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"/></svg>
                                <span>${character.status}</span>
                                <span>-</span>
                                <span>${character.species}</span>
                            </span>
                        </div>

                        <div class="ml-3 my-7 lg:my-0">
                            <p class="text-gray-400">Last known location:</p>
                            <p class="text-l font-thin text-white hover:text-hover">${character.location.name}</p>
                        </div>
                        <div class="ml-3 mb-7 lg:my-0">
                            <p class="text-gray-400">First seen in:</p>
                            <p class="text-l font-thin text-white hover:text-hover">${response.data.name}</p>
                        </div>
                    </div>
                    `
                cardWrapper.appendChild(cardElement)
        });
    });
});