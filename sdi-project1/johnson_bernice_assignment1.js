//Bernice Johnson
//May 30, 2012
//Deliverable 1

alert("Day one of our trip to Washington D.C.");

//Required Variables
//string
//string with escapes
//number
//Boolean

////Initial Variables 10

var timeToGetUp = "It\'s 7 am and my alarm clock is blowing up my iphone.", //string escape
    daughterName = "Emma", //string
    meAndEmma = "We both run downstairs and get her duffle bag packed with clothes and some toys", //string
    getInCar = "so we get in the car and make a quick stop at the local convenience store.", //string
    breakfast = "her favorite coffee kakes for breakfast.", //string
    goodbye = "a big hug and kiss goodbye before my trip.", //string
    myHouse = "I am finally back at my house.", //string
    directions = "We print out the directions from our house to the Washington Hilton", //string
    costOfGas = 35, //number
    cash = 40,  //number
    enoughGasMoney = true,  //boolean
    gasMoneyLeft = 0, //number
    placeGoingTo = "Washington";



////console.log outputs

console.log(timeToGetUp + " I swipe the snooze button and zzz for a minute and then think...It's vacation day YAY!");
console.log("We are going to " + placeGoingTo + ".");
console.log("I get out of bed and wake up my daughter " + daughterName + " and I get her dressed for school.");
console.log(meAndEmma + " she will be taking to her dads house after school.");
console.log(daughterName + " is all ready for school now " + getInCar);
console.log("She picks out " + breakfast);
console.log("I walk " + daughterName + " to the school door and give her " + goodbye);
console.log(myHouse +  " Esther and I finished getting all our things packed for our trip today.");
console.log(directions +  " then load up the car.");
console.log("It looks like we need gas first. Gas will cost " + "$" + costOfGas + ".");
console.log("We have " + "$" + cash + " cash."); 
console.log("Is it true we have enough gas money? " + enoughGasMoney);

if (enoughGasMoney === true) {
	        console.log("We have enough money for gas, now we can fill up the tank.");
	   if (cash > costOfGas){
		     gasMoneyLeft = cash - costOfGas;
		     console.log("We will have $" + gasMoneyLeft + " left after we buy gas. Cool we can both get munster drinks now and drive to " + placeGoingTo + ".");
	
	} else {
	         console.log("No gas or munster drinks for us. darn.");
        
	};

} else {
	   if (placeGoingTo === "Washington") {
		     console.log("We are not ready to go to" + placeGoingTo);

	   } else {
		     console.log("Looks like we still have to wait longer until we can go to" + placeGoingTo + "now.");
	   };
	

};


	








