  //3.Write a “person” class to hold all the details.

  class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
  getPersondetails(){
    return `Name : ${this.firstName} ${this.lastName}
                  age : ${this.age} depatment :${this.department}
                  email : ${this.email} mobile :${this.mobile}
                  city : ${this.city} ` ; 

  }
}

var person1 = new Person("ruban","bravo","23","catring ","rubanonemore@gmail.com","7339120624","chennai-49");
var person2 = new Person("chandru","selva","23","catring","chandruselva47@gmail.com","7339120635","vellour=12");
 console.log(person1.getPersondetails());
 console.log(person2.getPersondetails());

 //output
 /*Name : ruban bravo
                  age : 23 depatment :catring 
                  email : rubanonemore@gmail.com mobile :7339120624
                  city : chennai-49 
script2.js:25 Name : chandru selva
                  age : 23 depatment :catring
                  email : chandruselva47@gmail.com mobile :7339120635
                  city : vellour=12 */


                   //4.write a class to calculate the uber price

                   class UberPrice {
                    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
                      this.distance = distance;
                      this.duration = duration;
                      this.baseFare = baseFare;
                      this.costPerMile = costPerMile;
                      this.costPerMinute = costPerMinute;
                    }

                    totalPrice() {
                        return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
                      }
                }
                const myUber = new UberPrice(5,10,60,14,2);
                console.log(myUber.totalPrice());

                