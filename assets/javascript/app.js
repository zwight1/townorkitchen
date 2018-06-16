//var city_id = ""
var townName = "";
var townURL = "";
$(document).ready(function() {
    $("#search").on("click", function(event){

        event.preventDefault();
        //console.log("buttonclicked");
        

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




        // var search = $("#townSide").val();
        //  var search1 = $("#townType").val();
        // console.log(search);
        // console.log(search1)
     //curl -X GET --header "Accept: application/json" --header "user-key:
    // 7ff4d2a00a9a157c9274e38a293b1ad9"
    //  "https://developers.zomato.com/api/v2.1/search?entity_id=1213&entity_type=city&q=Chinese&count=5"

    // What we wnted to do was get the information from the ajax call to aid the next and the next.  As it was not working we hard coded the actual city.  
    // this is the code we were attempting. 
    // var queryURL = "https://developers.zomato.com/api/v2.1/locations?query="  + search; 

    //     $.ajax({
    //         url: "https://developers.zomato.com/api/v2.1/locations?query=" + search,
    //         method: "GET",
    //         headers: {
    //             "user-key": "7ff4d2a00a9a157c9274e38a293b1ad9"
    //         }
    //     })
    // .then(function (response) {
    //         console.log(response)
    //    var city_id= response.city_id
    // 	$.ajax({
    //         url: "https://developers.zomato.com/api/v2.1/cuisines?"	+ city_id,
    //         method: "GET",
    //         headers: {
    //             "user-key": "7ff4d2a00a9a157c9274e38a293b1ad9"
    //         }
    //     }).then(function (response) {
    //         console.log(response)
    // 		$.ajax({
    //         url: "https://developers.zomato.com/api/v2.1/search?cuisines= 55&entity_id=94741&entity_type=zone",
    //         method: "GET",
    //         headers: {
    //             "user-key": "7ff4d2a00a9a157c9274e38a293b1ad9"
    //         }
    //     }).then(function(res){
    // 	console.log("YAY", res)
    // 		})
    // })
    //     })
            
