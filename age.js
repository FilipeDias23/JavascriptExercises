const votingAge = function (age) {
   
    if (age >= 18 ) {
      console.log("You have the age to vote")
    }
    else {
      console.log("You dont have the age to vote")
    }
    ;
    if (age < 21 ) {
      console.log("You cant be elected as president")
    }
    else {
      console.log("You can be elected as President")
    }
    
  }
  
  console.log(votingAge(18))
  
  // Porque é que me aparece undefined ? //