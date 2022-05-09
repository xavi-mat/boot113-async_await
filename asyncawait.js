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
const pokeImgSpin = document.querySelector('#poke-img-spin');

////////////////////////////////////////////////////////////////////////////////
// Globals


////////////////////////////////////////////////////////////////////////////////
// Classes


////////////////////////////////////////////////////////////////////////////////
// Utils
const getRandomInt = (num) => Math.floor(Math.random() * num);
const putSpinner = () => {
    pokeH3.innerHTML = `<div class="spinner-border text-primary"></div>
    <div class="spinner-border text-secondary"></div>
    <div class="spinner-border text-success"></div>
    <div class="spinner-border text-danger"></div>
    <div class="spinner-border text-warning"></div>
    <div class="spinner-border text-info"></div>
    <div class="spinner-border text-dark"></div>`;
    pokeImg.src = '';
    pokeImgSpin.innerHTML = `<div class="spinner-border text-primary"></div>
    <div class="spinner-border text-secondary"></div>
    <div class="spinner-border text-success"></div>
    <div class="spinner-border text-danger"></div>
    <div class="spinner-border text-warning"></div>
    <div class="spinner-border text-info"></div>
    <div class="spinner-border text-dark"></div>`;
}
const putName = (name) => pokeH3.innerHTML = name;
const putImg = (url) => {
    pokeImgSpin.innerHTML = '';
    pokeImg.src = url;
};

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


