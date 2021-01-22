//PROBLEM NO. 01
function kilometerToMeter(kilometer)
{
    var inputType=typeof(kilometer);
    inputType=""+inputType;

    if(kilometer<0 || inputType!="number")
    {
        return"\nError: kilometer value is negative or not in number form.\n";
    }
    else
    {
        var meter=kilometer*1000;
        //return meter value
        return meter;
    }
}


//PROBLEM NO. 02
function budgetCalculator(numberOf_watch, numberOf_mobile, numberOf_laptop)
{
    var inputTypeFor_watch  = typeof(numberOf_watch);
    var inputTypeFor_mobile = typeof(numberOf_mobile);
    var inputTypeFor_laptop = typeof(numberOf_laptop);

    inputTypeFor_watch  = "" + inputTypeFor_watch;
    inputTypeFor_mobile = "" + inputTypeFor_mobile;
    inputTypeFor_laptop = "" + inputTypeFor_laptop;

     //checking whether the number of watch or mobile or laptop is negative or not in number.
    if(numberOf_watch<0 || numberOf_mobile<0 || numberOf_laptop<0)
    {
        return "\nError: Number of watch or mobile or laptop is negative.\n";
    }
    else if(inputTypeFor_watch!="number" || inputTypeFor_mobile!="number" || inputTypeFor_laptop!="number")
    {
        return "\nError: Number of watch or mobile or laptop is not in number.\n";
    }

    //priceOfEach_watch=50, priceOfEach_mobile=100, priceOfEach_laptop=500;
    var budgetFor_watch  = numberOf_watch*50;
    var budgetFor_mobile = numberOf_mobile*100;
    var budgetFor_laptop = numberOf_laptop*500;

    //checking whether the number of watch is fraction or not.
    // and doing the same thing for mobile and laptop.
    if(budgetFor_watch%50==0 && budgetFor_mobile%100==0 && budgetFor_laptop%500==0)
    {
        var totalBudget=budgetFor_watch + budgetFor_mobile + budgetFor_laptop;
        //return total budget
        return totalBudget;
    }
    else
    {
        return "\nError: Number of watch or mobile or laptop is in fraction.\n";
    }
} 


//PROBLEM NO. 03
function hotelCost(numberOf_day)
{
    //using floor function to make fraction value in integer
    var floorValueOf_day=Math.floor(numberOf_day);

    var inputTypeFor_day = typeof(numberOf_day);
    inputTypeFor_day = "" + inputTypeFor_day;
    
    //error case checking 
    if(numberOf_day<0 || inputTypeFor_day!="number" || floorValueOf_day!=numberOf_day)
    {
        return "\nError: Number of day is negative or in fraction or not in number form.\n"
    }
    
    var quotient= parseInt(numberOf_day/10);
    var remainder = numberOf_day%10;
    var totalRent=0;
    
    //calculating total rent
    if(quotient==0)
    {
        totalRent = remainder*100;
    }
    else if(quotient==1)
    {
        totalRent = 10*100 + remainder*80;
    }
    else if(quotient==2)
    {
        totalRent = 10*100 + 10*80 +remainder*50;
    }
    else
    {
        totalRent = 10*100 + 10*80 + ((numberOf_day-20)*50);
    }
    
    //return total rent
    return totalRent;
}


//PROBLEM NO. 04
function megaFriend(friendList)
{
    var maxLength=0;
    var bigFriend="";
    var arrayOf_Friend=[];

    //removing white-space from each name.
    for(var i=0;i<friendList.length;i++)
    {
        var eachFriend=friendList[i];
        var temp="";
        for(var j=0;j<friendList[i].length;j++)
        { 
            //checking name only contain alphabates
            if((eachFriend[j]>="a" && eachFriend[j]<="z") || (eachFriend[j]>="A" && eachFriend[j]<="Z"))
            {
                temp=temp+eachFriend[j];
            }
        }
       arrayOf_Friend.push(temp);
    }

    //finding mega friend
    for(var i=0;i<arrayOf_Friend.length;i++)
    {
         if(arrayOf_Friend[i].length>maxLength)
         {
             maxLength =arrayOf_Friend[i].length;
             bigFriend = arrayOf_Friend[i];
         }
     }

     //error massage
     if(friendList.length==0 || maxLength==0)
     {
        return "\nError: friendList array is empty or name is in alphanumeric.\n"
     }
     //return desired mega friend
     return bigFriend;
}