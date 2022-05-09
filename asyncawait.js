'use strict';
////////////////////////////////////////////////////////////////////////////////
// Async / Await Exercise
// for The Bridge
// by  xavimat
// 2022-05-09
//
////////////////////////////////////////////////////////////////////////////////
// Constants
const APIURL = "https://pokeapi.co/api/v2/pokemon?limit=1&offset=";
const MAX_POKS = 1126;

////////////////////////////////////////////////////////////////////////////////
// DOM
const pokeBall = document.querySelector('#poke-ball');
const pokeH3 = document.querySelector('#poke-h3');
const pokeImg = document.querySelector('#poke-img');

////////////////////////////////////////////////////////////////////////////////
// Globals


////////////////////////////////////////////////////////////////////////////////
// Classes


////////////////////////////////////////////////////////////////////////////////
// Utils
const getRandomInt = (num) => Math.floor(Math.random() * num);
const putSpinner = () => {
    pokeH3.innerHTML = '<h3>&#8635;</h3>';
    pokeImg.src = './assets/img/spinning-loading.gif'
}
const putName = (name) => pokeH3.innerHTML = '<h3>'+name+'</h3>';
const putImg = (url) => pokeImg.src = url;

////////////////////////////////////////////////////////////////////////////////
// Functions
const getImg = async (pokeData) => {
    try {
        const poke = await axios(pokeData.url);
        const pokeImgUrl = poke.data.sprites.front_default;
        putImg(pokeImgUrl);

    } catch (error) {
        console.error(error);
    }
}

const catchEmAll = async () => {
    putSpinner();
    const randId = getRandomInt(MAX_POKS);
    try {
        const res = await axios(APIURL + randId);
        const pokeData = res.data.results[0];
        // console.log(pokeData);
        putName(pokeData.name);
        getImg(pokeData);

    } catch (error) {
        console.error(error);
    }
}

////////////////////////////////////////////////////////////////////////////////
// Listeners
pokeBall.addEventListener("click", catchEmAll);

////////////////////////////////////////////////////////////////////////////////
// Init


