// this intend to creat a bank that can accomodated users, wher by the users can deposit , can transfer can request for LockManager, and if the user dosnt have an account he cannot perform any of the function.

let bank={
bankName: "Racy Microfinance bank",
totalBallance : 150000000,
loanLimit : 75000000
}

// whereas the above object is the bank we will have an array that will contian client/users information.

let user =[];

function randomNumber() {
    let accountNumber = "24"
    for (i = 0; i < 8; i++) {
        accountNumber += Math.floor(Math.random() * 10); 
    } return accountNumber;
 }
// this is the requirement to open an account without this you cant open .
function creatAccount(firstName, lastName, age, phoneNumber){
  if (age < 18) {
    console.log("too young")
  } else {   
    let accountNumber = randomNumber()
// this function (push) allow you to add information to the account
   user.push({
    firstName: firstName,
    lastName: lastName,
    age: age,
    phoneNumber: phoneNumber,
    accountBalance: 0,
    loanBalance: 0,
    accountNumber: accountNumber
   })
   
  }
}
// this are the the account holders in the bank
creatAccount("Dyelshak", "Ishaku", 22, "09035249481")
 creatAccount("Emerson", "BTC", 34, "090352492344")
 creatAccount("Val", "funds", 37, "09035249432")
creatAccount("Victory", "money", 20, "090352492341")
creatAccount("Tongzum", "wayawaya", 25, "09035244481")
 creatAccount("Christen", "Dev", 31, "07035249481")


  function requestLoan (amount) {bank.totalBallance -= amount;
    console.log(user[0].accountBalance += amount);
    console.log(user[0].loanBalance -= amount)

}
requestLoan(5000)
console.log(user[0]);

