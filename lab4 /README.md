Lab 4

Part 1) My json file compiled correctly. It is semantically correct because it is an array of tracks, 5 in total, and each track had a key value that was a descriptior such as song, artist, and so on. The value for each corresponding key is the data for the playlist. This makes sense because of the way it can easily be referenced. The itteration is in three steps, Track[i], Key, Value. This allows for easy query ability 

Part 2) The Javascript is formatted in a organized top down manner starting with a simple function on the button click in the html file after the document is loaded. Many console.log output have been added for bugging purposes. Once the .getJSON is called, a function to get the data executes, then it iterates with .each over the document and finds 5 tracks. With annother .each a loop goes over each tracks key and values. The value of each element (v.Song, v.Artist) is concatenated to a string with a section tag and appended to a div. 

https://github.com/TheChicken/ITWS.git 