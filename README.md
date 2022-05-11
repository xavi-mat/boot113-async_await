# boot113-async/await exercise

https://classroom.google.com/u/0/c/NDgwNDYwMTI2OTAz/a/NTE0MTM1MzEwMzIx/details

Async/Await exercise for The Bridge

> Get a random pokémon from the pokeapi and show its name and image.

This exercise about async/await uses the [pokeapi.co](https://pokeapi.co/) to
*catch* a random Pokémon and return the name and one sprite.

First it fetches the main list of Pokémon from the API, with a random offset (0
to 1125) and limited to 1 item. This returns an object with two properties: the
name and another url with more info for that pokémon. The name can be printed on
the screen and the image must still wait.

A second fetch will gety all the info of that pokémon and will use only the
`sprites.front_default` property to put it in the `src` attribute of an `img`
element.

### Technologies used
* HTML5
* CSS (Bootstrap)
* JS
    * [Axios library](https://github.com/axios/axios)

### Author
By [xavi-mat](@xavi-mat).
