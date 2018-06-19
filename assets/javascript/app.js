var townName = "";
var townURL = "";
$(document).ready(function() {
    $("#search").on("click", function(event){

        event.preventDefault();
        console.log("buttonclicked");
        

        var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=1213&entity_type=city&q=Chinese&count=5";
    
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
            "user-key": "7ff4d2a00a9a157c9274e38a293b1ad9"
            }
            


   
            })

    .then(function(response){
        //response = JSON.stringify(response);
        console.log(response.restaurants);
        var length = response.restaurants.length;
        var restArr = response.restaurants;
    
            for(var i = 0; i < length; i++) {
                var townName = $("<h1>").text(restArr[i].restaurant.name);
                console.log (townName)
                // var linkTo= Object.values(response.restaurants.restaurant[i])[3];
                // console.log (linkTo)
                var townURL = $("<a target='_blank' href=' " + restArr[i].url + ">" + "</a?>");
                console.log (townURL);
                
                $("#townResponse").append(townName, townURL);
                // $("#townResponse").append(townURL);
                

            }
        })
    })
   
})
