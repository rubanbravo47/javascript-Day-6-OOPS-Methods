//1) class - movie 
//a.q

class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

var  movieDetails = new movie("keep moving forward","disney", "PG-14");
console.log(movieDetails);

//output
/* title : 'keep moving forward',
   studio : 'disney ',
   rating : 'PG-14'
*/

//b.q 
    class movies {
        constructor(title , studio , rating = "PG")
        {
            this.title  = title;
            this.studio = studio;
            this.rating = rating; 

        }
    } 
var movie1 = new movies("Nun","Dc");
console.log(movie1);

//output
/*rating: 'PG' 
studio: 'Dc' 
title: 'Nun'
*/

//C.q

class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Moviee("Thunivu", "Zee studios", "PG");
let moviee2 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Moviee("Kantara", "KRG Studios", "PG");
let movie4 = new Moviee("Vikram", "Raj kamal films", "PG-13");
let movie5 = new Moviee("veeram", "Vijaya production", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies);


//d.Q

class movieM{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

var casinoRoyal = new movieM ("casino royal" , "eon productions" , "PG-13");
 console.log(casinoRoyal);


  /*OUTPUT:
    rating: "PG-13"
    studio: "Eon Productions"
    title: "Casino Royale"*/

    //---------------------------------------------------------------------------------------------

    //2.Circle

    class Circle {
        constructor(radius = 1.0, color = "red") {
          this._radius = radius;
          this._color = color;
        }

        get radius()
        {  
            return this._radius;

        }

    set radius(radius){
        this._radius = radius;

    }

    get color(){
        return this._radius;
    }

    set color(color){
        this._colorcolor = color ;
    }
      toString(){
        return `cricle[radius = ${this._radius} , color = ${this._color}]`;
      }
    getArea(){
        return Math.PI * Math.pow(this._radius,2);
    }
    getcircumference(){
        return 2 *Math.PI * this._radius;
    }
}

var circle1 = new Circle(2,"green");
var cricle2 = new Circle(5,"yellow");

console.log(circle1.toString());
console.log("Area:" , circle1.getArea());
console.log("circumference:" , circle1.getcircumference());

console.log(cricle2.toString());
console.log("Area:", cricle2.getArea());
console.log("circumference:", cricle2.getcircumference());

/*

circle1--->output
cricle[radius = 2 , color = green]
script.js:133 Area: 12.566370614359172
script.js:134 circumference: 12.566370614359172

circle2--->output
script.js:136 cricle[radius = 5 , color = yellow]
script.js:137 Area: 78.53981633974483
script.js:138 circumference: 31.4159265358979*/


