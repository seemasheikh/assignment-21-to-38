// chapter#21 to 25
// q-no-1

// var name=prompt("enter your name");
// var lastName=prompt("enter your last name")
// var fullName=name+lastName;
// console.log(fullName)

// q-no-2

// var mob=["samsung-galaxy-s6-edge-plus"]
// var fav=prompt("enter your fav mobile model")
// for(var i=0;i<mob.length;i++){
// if(fav===mob){
//      alert("right answer")
    
//  }
// }
// console.log(mob[mob.length-1])

// q-no-3

// var text="pakistani";
// console.log(text.indexOf('n'))

// q-n0-4

// var t="hello world";
// console.log(t.lastIndexOf('l'))

// q-no-5

// var st="pakistani";
// console.log(st.charAt(3))

// q-no-6
// var name=prompt("enter name")
// var lName=prompt("enter your last name")
// var FullName=name+ lName;
// alert("my full name is "+name+" binte "+lName)

// q-no-7

// var text="hyderabad";
// var newText=text.replace("hyderabad","islamabad")
// console.log(newText)

// q-no-8

// var message="ali and sami are best friends they play cricket and football together";
// var newMessage=message.replace("and","&")
// console.log(newMessage)

// q-no-9

// var value=472;
// console.log(typeof value)
// console.log(typeof value.toString());

// q-no-10

// var check=prompt("enter your fav nuts")
// var nuts=["peanuts"];
// add=check.toUpperCase();
// for (var i=0;i<check.length;i++){
//     if(check===nuts[i]){
//         alert("pea")
//     }
// }
// console.log(add)

// q-no-11

// var user=prompt("enter a 'javascript' in UPPER CASE")
// var title="javascript";
// var tCase=user.toLowerCase();
// for(var i=0;i<user.length;i++){
//     if(user===title[i]){
        

//     }
// }
// console.log(tCase)

// q-no-12

// var num=35.36;
// console.log("number "+ num)
// num=Math.floor(num)
//  console.log("result "+num+"36")

// q-no-13
// var user=prompt("enter your name with symbol","sara@ashar!")
// var str="sara@ashar!"
// var temp=[]
// for(var i=0;i<str.length;i++){
//     if(str[i]=="@"||str[i]=="!"){
//         temp.push(str[i])
//     }
// }

// for(var j=0;j<temp.length;j++)
// {
        
//     console.log(temp[j]+"ASCII is"+temp[j].charCodeAt(0))
// }



// q-no-14
// var a=["cake","apple-pie","cookie","chips","patties"]
// var b=prompt("welcome to Abc bakery what do you want sir/ma'am")
// for(var i=0;i<a.length;i++){
//     if(b===a[i]){
//         alert(a[i]+ " is available at "+ [i]+" in our bakery")
//     }else{
//         alert("sorry! ma'am/sir this item is not available in our bakery")
//         break;
//     }
// }

// q-no-15

// q-no-16
// var str="universityofkarachi";
// for(var i=str.length;i>=0;i--){

// }
// console.log(str.slice(0,i))

// var text="universityofkarachi"
// var myArray=text.split("")
// var word=myArray[0]
// myArray=myArray[1]



// console.log(myArray) 
// q-no-17
// var uI=prompt("pakistan")
// console.log(uI.charAt(7))


// q-no-18



// function countOccurences(string,word){
//   return string.split(word).length-1;
// }
// var text="the quick brown fox jumps over the lazy dog."
// var count=countOccurences(text,"the")
// console.log(count)

// CHAPTER-26 TO 30--------MATHS METHOD------
// q-no-1

// var no=.45214
// var user=prompt("enter a number")
// user=user+no
// console.log(Number(user))

// console.log(Math.round(user))
// console.log(Math.floor(user))
// console.log(Math.ceil(user))

// q-no-2

// var num=.673
// var user=prompt("enter a negative number",-2)
// user=user+num
// console.log(Number(user))

// console.log(Math.round(user))
// console.log(Math.floor(user))
// console.log(Math.ceil(user))

// q-no-3
// function main(){
//     var num=2
//     var user=prompt("enter a positive or negative number/n")
//     if("%2"===user){

//     }
//     console.log("the absolute value of %2 is %2/ " +num+user)
    
// }
// main()

// q-no-4

// var iRandomNumber;
// var iRollDice;
// var i;
// iRollDice=prompt("how many times do you want to the dice",5)
// for(i=1;i<=iRollDice;i++){
//     iRandomNumber=Math.ceil(Math.random()*6);
//     document.writeln(iRandomNumber+"<br");

// }
// document.writeln("-----Finished------")

// q-n0-5

// var head=1;
// var tail=2;
// var toss=Math.random()*2;
// var floor=Math.floor(toss)
// if(floor===0){
//     document.write("0 <br> Random coin value:Head")
// }else if(floor==1){
//     document.write("1 <br> Random coin value: Tails")
// }

// q-no-6

// var randomNo=Math.floor(Math.random()*100)+1;
// console.log(randomNo)

// q-no-7

// var weight=prompt("enter your weight in kilograms")
// weight=weight
// document.write("The weight of user is "parseFloat(weight)+" kilograms")

// q-no-8

// var randomSecretNo =10;
// var secretNo=prompt("enter a number between 1 and 10")
// secretNo=secretNo

//     if(secretNo>5 === randomSecretNo>9){
//         alert("congratulations you win")

//     }
//     else {
//         alert("Try again")
//     }
    
    



// CHAPTER 31 TO 34------DATE METHOD---------------

// q-no-1
// var rightNow=new Date();
// console.log(rightNow)

// q-no-2

// var rightNow=new Date();
// var newDate=new Date()
// console.log(newDate.getMonth())
// alert("Current month :" +"may")

// q-no-3

// var week=prompt("enter any day")
// var charsInWeek=week.length;
// if(charsInWeek>3){
//     weekAbbrev=week.slice(0,3)
//     console.log("Today is " +weekAbbrev)
// }

// q-no-4

// var rightNow=new Date();
// var newDate=new Date()
// console.log("It's fun day "+newDate.getDay())

// q-n-5
// var usr=prompt("enter what date date is today")
// var month=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// var rightNow=new Date();
// var dt=rightNow;
// for(var i=0;i<month.length;i++){
//     if(usr===month){
//         alert("first fifteen of the month")
//         break;
//     }else if(usr!==month){
//         alert("last day of the month")
//         break;
//     }
// }

// document.write(dt)

// q-no-6

// var date1=new Date("Jan,1,1970");
// var date1Mili=date1.getTime()
// var today=new Date()
// var todayMili=today.getTime()
// var diff=todayMili-date1Mili;
// var diffYear=diff/(1000*60*60*24*30*12)
// document.write("current date "+today,"<br>")
// document.write("Elapsed Milisec Since jan 1 1970 "+diff,"<br>")
// document.write("Elipsed mili sec since jan 1970 "+diffYear)

// q-no-7

// var d=new Date()
// console.log(d.getTime())
// var rightNow=new Date();
// // var date2=new Date("may 25 2022  12:00:00")
// var user=prompt("what time is it")
// if(rightNow===time1){
//     alert("its "+time1+" pm")

// }else{
//     alert("it's"+time1+"am")

// }
// q-no-8

// var rightNow=new Date("apr 22 2020");
//  var laterDate=rightNow
//  console.log(laterDate)


// q-no-9


// var rightNow=new Date("june 18 2015");
// console.log(rightNow)
// alert("171 Dayshave passed since 1st Ramadan"+rightNow)

// q-no-10
// var p="sat dec 05 2015 22:08:16 Gmt+0500(pkt)"
//  var pMili=pMili.getTime()
//  var today=new Date();
//  todayMili=today.getTime()

 
//  var diff= todayMili-pMili
//  var diffYear=diff/(1000*60*60*24*30*12)
//  console.log(diffYear)

//  q-n0-11

// var n=new Date();

// var date2=new Date("may 28,2022 08:37:00")
// console.log (n+"1 hour ago"+date2)

// q-no13

// var dob=newDate=prompt("enter your date of birth","Dec,20,1998")
// var dobMili=dob.getTime();
// var today=newDate();
// var todayMili=today.getTime();
// var diff=todayMili-dobMili;
// var diffYear=diff/(1000*60*60*24*30*12)
// console.log(diffYear)
// var accuAge=math.floor(diffYear)
// console.log(accuAge)


// q-no-14

// var customerName="sana"
// var currentMonth="may"
// var noOfUnits=410;
// var chargesPerUnit=16
// var netAmountPayable=("withInDueDate")
// var latePaymentSurcharge=350
// var grossAmountPayable=("AfterDueDate")
// netAmountPayable=noOfUnits*chargesPerUnit
// console.log(netAmountPayable)
// grossAmountPayable=netAmountPayable+latePaymentSurcharge
// console.log(grossAmountPayable)
// document.write("K-Electric-Bill "+"<br>")
// document.write("Costomer name: "+customerName+"<br>")
// document.write("Month : "+currentMonth+"<br>")
// document.write("no of units: "+noOfUnits+"<br>")
// document.write("Charges per unit: "+chargesPerUnit+"<br>")
// document.write("net amount payable (with in due date): "+netAmountPayable+"<br>")
// document.write("late payment surcharge: "+latePaymentSurcharge+"<br>")
// document.write("Gross amount payable after due date: "+grossAmountPayable+"<br>")










// chapter 31 to 35-----
// q=no=1

// function currentDateTime(){


//     var rightNow=new Date();

//  console.log(rightNow)

    
// }
// currentDateTime()

// q-no-2

// function firstAndLast(fName,LName){
    
//     return fName+LName

// }
// var g=firstAndLast("hello "+" fatima "," binteAhmed")

// console.log(g)


// q-no-3
// var a=prompt("enter a number")
// var b=prompt("enter any number")
// function add(a,b){
//     return a-b
// }
// var g=add(a,b);
// alert (g)

// q-no-4

// function calc(num1,opr,num2){
//     if(opr==="+"){
//         return num1+num2
//     }
//     else if(opr==="-"){
//         return num1-num2
//     }
//     else if(opr==="*"){
//         return num1*num2
//     }
//     else if(opr==="/"){
//         return num1/num2
//     }
//     else if(opr==="%"){
//         return num1%num2
//     }
//     var result=calc(5,"+",5);
//     var result1=calc(4,"-",2);
//     var result2=calc(5,"*",5);
//     var result3=calc(5,"/",5);
//     var result4=calc(5,"%",5);
    
//     document.write(result+"<br>")
//     document.write(result1+"<br>")
//     document.write(result2+"<br>")
//     document.write(result3+"<br>")
//     document.write(result4+"<br>")
    
//     }
//     calc()

    // q-no-5
    // function square(num){
    //     console.log(num*num)
    // }
    // square(4)

    // q-no-6

    // var number=prompt("please enter a number")
    // var fact=1;
    // if(number==0){
    //     console.log("the factorial of "+number+"is 1")
    // }else if(number<0){
    //     console.log("the factorial of -ive number is not possible")
    // }else{
    //     for(var i=1;i<=number;i++){
    //         console.log("the factorial of a"+ number +"is"+fact)
    //     }
    // }



    // q-no-7

//     function statToEnd(a,b=14){
//     var a=prompt("enter a number to start ")
//     var b=prompt("enter a number to end ")


    

    
//         for (var i=0;i<a.length;i++){
            
//         } 
// return a+b
//     }
//     var h=statToEnd()
//     console.log(h)

// q-no-8
// function hypotenuse(a,b){
//     function square(x){
//         return x*x;
//     }
//     return Math.sqrt(square(a)+square(b))
// }
// console.log(hypotenuse(3,4))

// q-no-9

// var w=250;
// var h=750
// function areaCalculate(w,h){
//     console.log(w*h)

// }
// areaCalculate(w,h)

// q-no-10
function pal()
{
    var x=document.getElementById("a").value;
    var y="";
    for(var i=x.length-1;i>=0;i--){
        y=y+x[i]
    }
    if(x==y){
        document.getElementById("b").value=x+"is a palindrome";

    }
    else{
        document.getElementById("b").value=x+"is not a palindrome"
    }
}


// q-no-11




// q-no-12


// function longestLength(str){
//     var temp=str.split(" ")
//     var lengthTemp=[];
//     for(var i=0;i<temp.length;i++){
//         lengthTemp.push(temp[i].length)
//     }
//     return lengthTemp

// }
// var ans=longestLength("web developement tutorial")
// console.log(ans)

// q-no-13

// function Letter(str){
//     var str="JSResources.com"+"o"
//             return str

  
// }
//  var s=Letter("JSResources.com"+"o")
//       console.log(s)
// q-no-14
// function calcCircumfrances(radius){
//     var ans= 2*3.142*radius;
//     return ans
// }
// function calcArea(radius){
//     var ans=3.142*radius*radius;
//     return ans
// }
// console.log(calcCircumfrances(2))
// console.log(calcArea(2))



    



