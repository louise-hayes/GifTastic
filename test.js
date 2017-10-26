var boardGames = ["Monopoly", "Connect4", "Operation", "Battleships", "Snakes and Ladders", "Blokus", "Cludo"];

// create buttons using HTML

/* <button data-boardGames="boardGames[0]">boardGames[0]</button>; */

<button type="button">test</button>


// {/* <button data-animal="cat">meow</button> */}

// for (var i = 0; i < boardGames.length; i++) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        boardGames[0] + "&api_key=dc6zaTOxFJmzC&limit=10";

    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    // boardGame + "&api_key=f45979fff08df9a1f846784ccd90eafd&limit=10";
    // q= means query request, between & are query parameters, limit = 10...thats why only 10

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
        console.log("in response");

        //    the image information is inside of the data key,
        // make a variable named results and set it equal to response.data
        var results = response.data;
    });