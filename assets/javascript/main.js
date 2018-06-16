// var ingredientsURL = "http://food2fork.com/api/get?key=151d95c298ae0cc6c3a40e9e47fc437a&rId=" + ingredientInput;
// var ingredientInput = [];
$(document).ready (function() {
    $("#search").on("click",function(event) {
        event.preventDefault();
        // storing the search input
        var search = $("#search-input").val().trim();
        // resetting input to blank value
        // $("#search-input").val('');

        // calling ajax
        getRecipe(search);
        // removing element from array after its searched
    });

    function getRecipe(search) {
    var baseURL ="https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search/";
    //   var baseURL = "http://food2fork.com/api/search/";
        var apiKey = "151d95c298ae0cc6c3a40e9e47fc437a";
        var count = "&count=5";
        var newURL = baseURL + "?key=" + apiKey + "&q=" + search + count;
        console.log(newURL)
        // var response = Request(newURL)
        $.ajax({
            url: newURL,
            method: "GET",
            headers: {"Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Origin": "<origin>",
            "accept":"application/json" }
        })
        .done(function(response) {

            response = JSON.parse(response);
            console.log(response);
            for (var i = 0; i < response.recipes.length; i++) {
            // for (var i = 0; i < recipe.lenght; i++) {
                //   var recipeTitle = $("<h1>").text(response.recipes[i].title);
                // console.log(recipeTitle);'
                var recipeLink = $("<a target='_blank' href='" + linkTo + "'>" + response.recipes[i].title + "</a>");
                var recipeImage = $("<img>").attr("src", response.recipes[i].image_url);
                var linkTo = Object.values(response.recipes[i])[3];
                console.log(linkTo);
                // if(response.recipes[i].title.toLowerCase().includes(search) && limitTo < 5){
                
                $("#result").append(recipeLink, recipeImage);
                }
                console.log(response);
                console.log(recipeLink);

        // }
            

        });

        $("form").trigger("reset");
        };
});    