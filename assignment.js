function kilometerToMeter(kilometer)
{
    console.log(typeof(kilometer));
    if(kilometer<0)
    {
        console.log("\nSir,your inputed kilometer value is invalid, please try again.Thank you.\n");
    }
    else
    {
        var meter=kilometer*1000;
        console.log("In meter of inputed kilometer value is: ",meter,"meter");
        return meter;
    }
}
var m=-10;
kilometerToMeter(m);

function budgetCalculator(numberOf_watch, numberOf_mobile, numberOf_laptop)
{
    // static priceOfEach_watch=50;
    // static priceOfEach_mobile=100;
    // static priceOfEach_laptop=500;

    var budgetFor_watch  = numberOf_watch*50;
    var budgetFor_mobile = numberOf_mobile*100;
    var budgetFor_laptop = numberOf_laptop*500;

    // budgetFor_watch%50==0 checking whether the number of watch is fraction or not.
    // budgetFor_watch>=0    checking whether the number of watch is negative or not.
    // and doing the same thing for mobile and laptop.

    if((budgetFor_watch%50==0 && budgetFor_watch>=0) && (budgetFor_mobile%100==0 && budgetFor_mobile>=0) && (budgetFor_laptop%500==0 && budgetFor_laptop>=0 ))
    {
        var totalBudget=budgetFor_watch + budgetFor_mobile + budgetFor_laptop;
         console.log(totalBudget);
        return totalBudget;
    }
    else
    {
        console.log("\nSir,your inputed value(s) is invalid, please try again.Thank you.\n");
    }
    
} 

budgetCalculator(1,1,1);


function hotelCost(numberOf_day)
{
    
    var quotient=parseInt(numberOf_day/10);
    var remainder=numberOf_day%10;

    // console.log(quotient," ",remainder);
    // if(numberOf_day<0 || remainder)

    if(quotient==0)
    {
        var totalRent=remainder*100;
    }
    else if(quotient==1)
    {
        var totalRent=10*100 + remainder*80;
    }
    else if(quotient==2)
    {
        var totalRent=10*100 + 10*80 +remainder*50;
    }
    else
    {
        var totalRent=10*100 + 10*80 + ((numberOf_day-20)*50);
    }
    return totalRent;
}
console.log(hotelCost(40));

function megaFriend(arrayOf_friends)
{
    var maxLength=0;
    var bigFriend="";
    for(var i=0;i<arrayOf_friends.length;i++)
    {
        if(arrayOf_friends[i].length>maxLength)
        {
            maxLength = arrayOf_friends[i].length;
            bigFriend = arrayOf_friends[i];
        }
        // console.log(maxLength," ",bigFriend);
    }
    // console.log(maxLength," ",bigFriend);
    return bigFriend;
}

var arr=["akash","ratul","sonar","quazi","toaha","rahman","fahim","mehedy"];
console.log(megaFriend(arr));