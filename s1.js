class Bankaccount {
    constructor(accno, accname, date,total) {
      this.accno = accno;
      this.accname = accname;
      this.total = total
      //this.iniamt = iniamt
      this.date = new Date
      // this.total = total
    }
     calculateInterest(year,rate) {
           var interest = rate/100+1;
           return this.total = parseFloat((this.total*Math.pow(interest,year)).toFixed(4));
  }
    deposite(depo )
    {
      return (this.total = this.total + depo)

    }
    withdrawal(withamt)
    {
      return (this.total = this.total - withamt)
    }


 
}
let date = new Date();
let year = date.getFullYear();


let bacc1 = new Bankaccount(1234567891234, "keethu", 12-01-2000,1000);
let bacc2 = new Bankaccount(12345678902,"shaa",15-03-2000,10000)
console.log("total balance of " +bacc1.accname +" is "+ bacc1.calculateInterest(13,2))

console.log("after depositing the total balance of "+bacc1.accname + " is " + bacc1.deposite(1000))
console.log("after withdrawing the total balance of "+bacc1.accname + " is " + bacc1.withdrawal(1000))

console.log(bacc1)

class casa extends Bankaccount{
  constructor(accno, accname , total , type)
  {
    super(accno ,accname , date, total)
      this.type = type
  }
  balance()
  {
    let curr_date = new Date()
    let pre_date = this.date
    let pre_year = pre_date.getFullYear()
    let curr_year = curr_date.getFullYear()
    let diff = curr_year - pre_year
    if(this.type = "savings")
    {
      let interest = (this.total *diff*3.5)/100
      console.log(this.total)
      let total_balance = this.total +interest
      console.log(`your total balance of ${bacc1.accname} in saving account is ${total_balance}`)

    }
    else{
      let interest = (this.total*diff*3.5)/100
      let total_balance = this.total+interest
      console.log(`your total balance in current account is ${total_balance}`)
    }
  }
}
cobj = new casa(1234567891234, "keethu",5000, "savings")
cobj.balance()


class deposite extends Bankaccount{
  constructor(accno, accname , total , type)
  {
    super(accno ,accname , date, total)
      this.type = type
  }
  balance()
  {
    let curr_date = new Date()
    let pre_date = this.date
    let pre_year = pre_date.getFullYear()
    let curr_year = curr_date.getFullYear()
    let diff = curr_year - pre_year
    if(this.type = "Fixed")
    {
      let interest = (this.total *diff*3.5)/100
      console.log(this.total)
      let total_balance = this.total +interest
      console.log(`your total balance of ${bacc2.accname} in fixed account is ${total_balance}`)

    }
    else{
      let interest = (this.total*diff*3.5)/100
      let total_balance = this.total+interest
      console.log(`your total balance in current account is ${total_balance}`)
    }
  }

}
obj1 = new deposite(1234567891234, "keethu",8000, "Fixed")
obj1.balance()

// class bman{
//   constructor(accno,a)
//   {
//     this.accno =  
// class bmang{
//   constructor(bacc1){
//     this.accountlist = bacc1
//   }
  
//   append(element)
//     {
//       this.listData[this.listsize++] = element
//     }
//   find(element) {
//     for (var i=0; i<this.listData.length; i++)
//       {
//         if(this.listData[i]== element){
//           return i
//       }
//   } 
//   return -1
// }
// }
// var ids = new List()
// ids.append()

class loan {
  constructor(accno, accname, date,total)
   {
    this.accno = accno;
    this.accname = accname;
    
    //this.iniamt = iniamt
    this.date = new Date
    this.total = total
    // this.total = total
  }

  calculateInterestloan(months,rate) {

   let interest = (this.total * (rate * 0.01))/months;
   return  this.total = ((this.total/months) + interest);
  }
}
lobj = new loan(1234567891234, "keethu",22-02-2000, 5000)
//lobj.balance()
console.log("loan interest of  " +bacc1.accname +" is "+ lobj.calculateInterestloan(12,2))


// class transfer extends Bankaccount{
//   constructor(fromBankAcc,toBankAccNum){
//     this.fromBankAcc = fromBankAcc
//     this.toBankAccNum = toBankAccNum
//   }


// }




// class transfer extends Bankaccount{
//   constructor(fromBankAcc, toBankAccNum)
//   {
//     super(accno ,accname , total)
      
//   }
//   transferr()
//   {
//      this.accno = this.accno
//      this.accname = this.accname
//      this.total =total
//   }
// }
// objt = new transfer(12345678901,kee)

class accmanager{
  constructor(managername,acclist){
    thias.acclist = acclist
    this.managername = managername
    this.managerid 
    this.joindate ="UD"
    this.branchname= "Sbi"
  }
  generateuniqueaccountnumber(){
    this.managerid = this.bankname +this.branchname +id
    id++
  }
  printbalance(accno){
    let filteraccount = account.filter((e)=> {
      e.accno == accno
    })
    //filteraccount.length > 0 ? console.log(`${filteraccount[0].name} balance ${filteraccount[0].amount}`)
  }
}
