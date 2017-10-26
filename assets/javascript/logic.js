// Variables ++++++++++++++++++++++++++++++++++++++++++++

var boardGames = ["Monopoly", "Connect4", "Operation", "Battleships", "Snakes and Ladders", "Blokus",
    "Leaping Frogs"
];
console.log(boardGames);

// Functions ********************************************

function renderButtons() {
    $("#gameButtonsDiv").empty();

    // Building the game buttons from boardGames[]
    for (i = 0; i < boardGames.length; i++) {
        var r = $('<input/>').attr({
            type: "button",
            class: "game-button",
            value: boardGames[i]
        });

        $("#gameButtonsDiv").append(r);

    } //end for loop to build game buttons

};

function addNewGame() {
    // when a game is entered into the add game input field and submit clicked or enter pressed

    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var gameNew = $("#game-input").val().trim();

    // The game from the textbox is then added to our array
    //  if text entered  a new button will appear - this will prevent blank buttons
    if (gameNew && boardGames.indexOf(gameNew) == -1) {
        boardGames.push(gameNew);
    }
    // clear it after button is added

    $("#game-input").val('');

    // calling init which handles the app processing of our game array
    init();
};

function init() {
    renderButtons();
    // when a game button is clicked
    $(".game-button").on("click", function () {
        // store the name of the game clicked in var game
        var gameClicked = $(this).attr("value");
        console.log("clicked a button " + gameClicked);

        // Build AJAX API URL with Query parameter and search keyword and key
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            gameClicked + "&api_key=dc6zaTOxFJmzC&limit=10";

        console.log(queryURL);

        $.ajax({
                url: queryURL,
                method: "GET"
            })

            // when queryURL comes back we execute this function
            .done(function (response) {

                var results = response.data;
                console.log(results);
                $("#boardGameDiv").empty();

                for (var i = 0; i < results.length; i++) {
                    // Make a div with jQuery
                    var gameDiv = $("<div>");
                    gameDiv.attr("class", "divclass");
                    // p.attr("class", "text-center");
                    // Set the inner text of the paragraph to the rating of the image in results[i].
                    // Make an image tag with jQuery and store it in a variable 
                    var gameImage = $("<img>");
                    // Set the image's src to results[i]'s fixed_height.url.

                    gameImage.attr("src", results[i].images.fixed_height_small_still.url);
                    gameImage.attr("data-still", results[i].images.fixed_height_small_still.url);
                    gameImage.attr("data-animate", results[i].images.original.url);
                    gameImage.attr("data-state", "still");
                    gameImage.attr("class", "gif");
                    // gameImage.attr("class", "resize-image center-block");

                    // Make a paragraph tag with jQuery 
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    p.attr("class", "pclass");

                    // Append the p variable to the gameDiv variable.
                    // gameImage.attr("src", results[i].images.fixed_height.url);

                    // Append the gameImage variable to the gameDiv variable.
                    gameDiv.append(p, gameImage);
                    // gameDiv.append(p);
                    // Prepend the gameDiv variable to the element with an id of "boardGameDiv".
                    $("#boardGameDiv").prepend(gameDiv);


                    $(".gif").on("click", function () {
                        console.log("clicked");
                        var state = $(this).attr("data-state");
                        console.log(state);

                        if (state === "still") {

                            dataAnimate = $(this).attr("data-animate");
                            console.log(dataAnimate);

                            $(this).attr("src", $(this).attr("data-animate"));
                            $(this).attr("data-state", "animate");


                            // console.log ($(this).attr("<img> src=" + data-animate));
                        } else {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                        }


                    });

                } //end for loop

            }).fail(function (err) {
                throw err;
             }); //end .done

    }); //end on click game button


}; //end init

// call the add new game when ever it is clicked
$("#add-Game").click(function (event) {

    addNewGame();
});

// call the game button app
init();