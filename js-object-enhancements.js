/* Write an ES2015 Version - Same Keys and Values*/

function createInstructor(firstName, lastName){
    return {
      firstName, 
      lastName
    };
  }

/* Write an ES2015 Version- Computed Property Names */

let favoriteNumber = 42;

let instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};

/* Write an ES2015 Version- Object Methods*/

let instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

/* createAnimal */


function createAnimal(species, verb, noise){
    return{
        species,
        [verb](){
            return noise
        }
    }
}

let dog = createAnimal("dog", "bark", "woof woof");
let cat = createAnimal("cat", "meow", "meooow"); 

