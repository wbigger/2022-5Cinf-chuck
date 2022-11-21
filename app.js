let onSuccess = function(data) {
    console.log("Success");
    // $("img").attr("src",data.icon_url);
    $("img").attr("src","https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png");
    $("span").text(data.value);
}

let onError = function() {
    console.log("Something went wrong :(");
}

let getRandom = function() {
    console.log("Get Random Chuck");
    $.getJSON("https://api.chucknorris.io/jokes/random")
    .done(onSuccess)
    .fail(onError);
}