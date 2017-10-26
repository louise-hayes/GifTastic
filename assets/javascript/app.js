var boardGames = ["Monopoly", "Connect4", "Operation", "Battleships", "Snakes and Ladders", "Blokus", "Cludo"];
var boardGame = "monopoly";


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
    
        //   add this dynamically but for giffys

        //   <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif"
        //   data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">
        // //   =======================
        // var state = $(this).attr("data-state");
        // console.log(state);
        // if (state === "still") {

        //     dataAnimate = $(this).attr("data-animate");
        //     console.log(dataAnimate);

        //     $(this).attr("src", $(this).attr("data-animate"));
        //     $(this).attr("data-state", "animate");


        //     // console.log ($(this).attr("<img> src=" + data-animate));
        // } else {
        //     $(this).attr("src", $(this).attr("data-still"));
        //     $(this).attr("data-state", "still");
        // }


        // for (var i = 0; i < results.length; i < 10) {
            // Make a div with jQuery
    //         var gameDiv = $("<div>");
    //         // Make a paragraph tag with jQuery 
    //         var p = $("<p>").text("Rating: " + results[0].rating);
    //         // Set the inner text of the paragraph to the rating of the image in results[i].
    //         // Make an image tag with jQuery and store it in a variable 
    //         var gameImage = $("<img>");
    //         // Set the image's src to results[i]'s fixed_height.url.
    //         gameImage.attr("src", results[0].images.fixed_height.url);
    //         // Append the p variable to the gameDiv variable.
    //         gameDiv.append(p);
    //         // Append the gameImage variable to the gameDiv variable.
    //         gameDiv.append(gameImage);
    //         // Prepend the gameDiv variable to the element with an id of "boardGameDiv".
    //         $("#boardGameDiv").prepend(gameDiv);
    //     // }
    });
    

// } //end for loop of board games