// Murk Bookshop Karachi.
var TotalBill = 0;
// Add Item
var BookPrice1: number = 200;
var BookPrice2: number = 550;
var BookPrice3: number = 200;
var BookPrice4: number = 400;
var BookPrice5: number = 400;
var BookPrice6: number = 200;
var BookPrice7: number = 700;
var BookPrice8: number = 1400;
var BookPrice9: number = 500;
var BookPrice10: number = 1000;

console.log("Failure Is The First Step Of Success Rs:", BookPrice1);
console.log("Learn By Yourself Rs:", BookPrice2);
console.log("Basic Sindhi Grammar Rs:", BookPrice3);
console.log("Basic English Grammar Rs:", BookPrice4);
console.log("Bequest Of Bhattai Rs:", BookPrice5);
console.log("I love you Rs:", BookPrice6);
console.log("Dadu Zelo Tarikh Je Aaene Main Rs:", BookPrice7);
console.log("History of the Prophet Rs:", BookPrice8);
console.log("Shah Latif (Novel) Rs:", BookPrice9);
console.log("Shah Jo Resalo Rs:", BookPrice10);
console.log(".................");

TotalBill =
  BookPrice1 +
  BookPrice2 +
  BookPrice3 +
  BookPrice4 +
  BookPrice5 +
  BookPrice6 +
  BookPrice7 +
  BookPrice8 +
  BookPrice9 +
  BookPrice10;
console.log("Your Total Bill is =", TotalBill);

/*var TotalBill = 5550;
var precent = 25;
var discount = TotalBill % precent;
console.log("After Discount Your Total Bill is =", discount); */

// Subtraction
var YourTotalBill: number = TotalBill - BookPrice10 - BookPrice3;
console.log("After Removing Items, Your Total Bill is =", YourTotalBill);

// Multiplication
var Books = BookPrice1;
var quantity = 5;
var FailureIsTheFirstStepOfSuccess = Books * quantity;
console.log(
  "five Books of (Failure is the first step of success) Rs:",
  FailureIsTheFirstStepOfSuccess
);

//console.log("After Adding Item Now Your Total Bill is =", YourTotalBill+FailureIsTheFirstStepOfSuccess);
// Addition
TotalBill = YourTotalBill + FailureIsTheFirstStepOfSuccess;
console.log("After Adding Item Now Your Total Bill is", TotalBill);

// Division
var TotalBill = 5350;
var Devide = 2;
var Discount = TotalBill / Devide;
console.log("After Discount Your Total Bill is", Discount);

var moneyInHand: number = 2000;
var discount = 2675;
var paidBill = discount - moneyInHand;
console.log("how much money is need for paying bill ", paidBill);

moneyInHand++;
console.log("line 62 Money in Hand = ", moneyInHand);

console.log("line 66 Money in Hand = ", moneyInHand++); //post increment
console.log("line 67 Money in Hand = ", ++moneyInHand); // pre increment

console.log("line 80 Money in Hand = ", moneyInHand--); //post 	Decrement
console.log("line 81 Money in Hand = ", --moneyInHand); // pre 	Decrement

moneyInHand--;
console.log("line 84 Money in Hand = ", moneyInHand);

moneyInHand--;
console.log("line 84 Money in Hand = ", moneyInHand);

// Assigment Operators 
moneyInHand+=700; 
console.log("total amount in hand After adding 500 = ",moneyInHand);

var moneyInHand = 2699 
var previousBill  = 2675
var AfterPayingBill   =moneyInHand - previousBill;
console.log("After paying bill return amount is in head =", AfterPayingBill,"Rupies",); 
AfterPayingBill -=20;
console.log("After paying bill i return amount to person. now I have in my pocket =", AfterPayingBill,"only.",); 


