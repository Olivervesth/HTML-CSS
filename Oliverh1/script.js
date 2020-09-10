//This is where i can add all the functions i like to use
//The js file is linked in the index file so i dont have to mix my js inside my html that would be a mess


function changesite($url){//When we are only working with HTML&CSS and javascript ofc this is a easy way to redirect the user to other html files/pages
    location.replace($url+'.html')//Basically just doing what it says its replacing the url with the incoming input ive added a .html in the back so i only have to give the file name.
}

function navbarfunction(){//This function makes it much easier to write the same code many places. Ofc everytime we want a new page on our site we want to have a navigationbar and that is what this function is doing
    //Here we are using getelementbyid this is really good to use if we want to get a specific object. Then we use innerhtml this will allow us to input code into the object.
    document.getElementById('navbar').innerHTML = '<div class="navbar"> <a href="#" class="navbarcontent" onclick="changesite(\'index\')">Home</a> <a href="#" class="navbarcontent" onclick="changesite(\'news\')">News</a> <a href="#" class="navbarcontent" onclick="changesite(\'readabout\')">ReadAbout</a> </div>';
}