// var calculateInterest = function (total,year,rate) {
//     var interest = rate/100+1;
//     return parseFloat((total*Math.pow(interest,year)).toFixed(4));
// }

// var answer = calculateInterest(915,13,2);
// console.log(answer)
class Bike {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  let date = new Date();
  let year = date.getFullYear();
  
  let mybike = new Bike("Pulser", 2011);
  console.log("My Bike is " + mybike.age(year) + " years old.");