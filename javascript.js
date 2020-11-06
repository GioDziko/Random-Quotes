$(document).ready(function(){


    var randomQuote;
    var randomNumber;

    function getQuote(){
        var quotes=["You are never too old to set another goal, or to dream a new dream.",
        "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
        "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
        "Don’t Let Yesterday Take Up Too Much Of Today.","It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
        "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
        "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
        "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
        "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
        "Whether You Think You Can Or Think You Can’t, You’re Right.",
        "The Man Who Has Confidence In Himself Gains The Confidence Of Others.",
        "Creativity Is Intelligence Having Fun.",
        "Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.",
        "The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle.",
        "You Don’t Have To Be Great To Start, But You Have To Start To Be Great.",
        "There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking.", 
    ];
        
        var author=[
        "- C.S. Lewis" , 
        "- Walt Disney",
        "– Winston Churchill,",
        "– Will Rogers",
        "– Vince Lombardi",
        "– Steve Jobs",
        "– Rob Siltanen",
        "– Og Mandino",
        "– Johann Wolfgang Von Goethe",
        "–Henry Ford",
        "– Hasidic Proverb",
        "– Albert Einstein",
        "– Brian Tracy",
        "– Steve Jobs",
        "– Zig Ziglar",
        " – Brian Tracy",
    ];
    
        randomNumber=Math.floor(Math.random()*quotes.length);
    
        randomQuote=quotes[randomNumber];
        var randomAuthor=author[randomNumber]; 
        console.log(randomQuote);


        $(".quote-text").animate({
            opacity:0
        },500,function(){
            $(".quote-text").animate({opacity:1},500);
            $("#text").text(randomQuote);
          
        })
        
        $(".quote-author").animate({
            opacity:0
        },500,function(){
            $(".quote-author").animate({opacity:1},500);
           
            $("#author").text(randomAuthor);
        })
        
        
    }
    
    function getColor(){
        var colors=[
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'];
        
        var randomNumber=Math.floor(Math.random()*colors.length);
        var randomColor=colors[randomNumber];
        
          
        $(".body").animate({
            backgroundColor:randomColor,
            color:randomColor
        },1000);

        $("#new-quote").animate({
            backgroundColor:randomColor
        },1000);

        $(".button").animate({
            backgroundColor:randomColor
        },1000);


        
    }   

    $("#new-quote").on('click',function(){
        getColor();
        getQuote();
        
    });

    
});