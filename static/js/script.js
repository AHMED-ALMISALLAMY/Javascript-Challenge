// challenge 1: Your Age In Days

function ageInDays() {
    var birthYear =  prompt('What Year Were You Born... Good Friend?');  // Ask user about his age
    var ageInDayss = (2022 - birthYear) * 365;   // Get Your Age in Days
    var h1 = document.createElement('h1');    // Create h1 Element
    var textAnswer = document.createTextNode('You are ' + ageInDayss  + ' days old.');  
    h1.setAttribute('id', 'ageInDays');    // Set id To h1
    h1.appendChild(textAnswer);         // Append textAnswer In h1
    document.getElementById('flex-box-result').appendChild(h1);     // Append h1 Element To the div id.
}

function reset() {
    document.getElementById('ageInDays').remove();  // To Remove Text In h1
}


// challenge 2: Cat Generation

function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}