$(document).ready(function(){
$("#coverart").click(function callTracks(){
	console.log("in callTracks");
	$.getJSON('lab4.json', function(data){
        console.log("got your file");
        $.each(data, function(){ 
            $.each(this, function(k, v){
                console.log("appending");
                console.log(k, v);
                    $(".playlist .song").append("<p>" + v.Song + "</p>");
                    $(".playlist .artist").append("<p>" + v.Artist + "</p>");
                    $(".playlist .album").append("<p>" + v.Album + "</p>");
                    $(".playlist .release").append("<p>" + v.ReleaseDate + "</p>");
                    $(".playlist .genre").append("<li>" + v.Genre + "</li");
                    $(".playlist .website").append("<p><a href='"+ v.Website +"'>" + v.Website + "</p");
                    $(".playlist .album_cover").append("<p><img src=" + v.AlbumArt + "></p>");
                console.log("appended");
            });
         });
	   });
    });
});


