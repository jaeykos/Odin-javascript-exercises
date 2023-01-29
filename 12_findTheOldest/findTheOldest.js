const findTheOldest = function(people) {

    let oldestPersonName= 'none'
    let maxAge = 0
    currentYear= new Date().getFullYear()

    for (var i = 0; i < people.length; i++){
        if (typeof(people[i].yearOfDeath) == "undefined"){
            age = currentYear - people[i].yearOfBirth
        }else{
            age = people[i].yearOfDeath - people[i].yearOfBirth
        }

        
        if ( age >  maxAge){
            maxAge = age
            oldestPerson =  people[i]
        }
    }
    return oldestPerson
};


// Do not edit below this line
module.exports = findTheOldest;
