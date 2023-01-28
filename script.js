

function generateQuote(){
    var dict = {
        "- Andre Gide":'"The scholar seeks, the artist finds."',
        "- Albert Einstein":'"Creativity is intelligence having fun."',
        "- Sir Ian Hamilton":'"The artist is nothing without the gift, but the gift is nothing without work."',
        "- Madame Benoit":'"I feel a recipe is only a theme, which an intelligent cook can play each time with a variation."',
        "- Thomas Edison":'"Genius is one percent inspiration and ninety-nine percent perspiration."',
        "- Holly Ketchel":'"My happiness derives from knowing the people I love are happy."',
        "- John Lennon":'"Life is what happens to you while you’re busy making other plans."',
        "- George Bernard Shaw":'"You have learned something. That always feels at first as if you had lost something."',
        "- Brendan Francis":'"What a man enjoys about a woman\'s clothes are his fantasies of how she would look without them."',
        "- Nikki Giovanni":'"It is not who you attend school with but who controls the school you attend."'
    };


    var keys = Object.keys(dict);

    var randomKey = keys[Math.floor(Math.random()*keys.length)];

    document.getElementById("quote").innerHTML =dict[randomKey];
    document.getElementById("author").innerHTML = randomKey;
}
