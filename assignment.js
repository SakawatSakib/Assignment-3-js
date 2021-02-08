
//https://github.com/SakawatSakib/Assignment-3-js
//Solution-1-Kilometer-to-meter-convertion---Start

function kilometerToMeter(km) {

    if (km > 0) {
        const meter = 1000 * km;
        return ("your total value is : " + meter + ' m');
    }
    else {
        return "Error !!!!!";
    }

}


//Solution-1-Kilometer-to-meter-convertion---------------------------------End

//Solution-2-budgetCalculator--------Start


function budgetCalculator(watch, mobile, laptop) {
    if (watch > 0 || mobile > 0 || laptop > 0) {
        let totalWatchResult = watch * 50;
        let totalMobileResult = mobile * 100;
        let totalLaptopResult = laptop * 500;
        var totalWoodResult = totalMobileResult + totalWatchResult + totalLaptopResult;
        return "Sir, Your total value is : " + totalWoodResult;
    }

    else {
        return "Sir, You have given wrong value or you have gone mad ! "
    }


}
//Solution-2-budgetCalculator---------------------------------------------End
//Solution-3--------hotelCost-----Start

function hotelCost(totalDays) {
    
    if (totalDays==0) {

        return 'Sir, You have given zero value !';
    }
        

        if (totaldays>0 && totalDays <= 10) {
            var oneToTenDays = totalDays*100;
            return "Sir, Your total cost: " + oneToTenDays + ' .Thanks for visiting';

        }

        else if (totalDays>10 && totalDays <= 20) {
            var elevenToTwentyDays = (totalDays-10)*80+1000;
            return "Sir, Your total cost: " + elevenToTwentyDays + ' .Thanks for visiting';
        }

        else if (totalDays>20) {
            var afterTwentyDays = (totalDays-20)*50+10*80+1000;
            return "Sir, Your total cost: " + afterTwentyDays * 50 + ' .Thanks for visiting';
        }
    

    else {
        return "Sir, You have given wrong value or you have gone mad";
    }



//Solution-3--------hotelCost-------------------------------------End


//Solution-4------megaFriend-------Start




function megaFriend(friendsName){

    if(friendsName.length!=0){
        var largeName= friendsName[0];
        for(var i=1;i<friendsName.length;i++)
        {
            var countBig=friendsName[i];
            if(countBig.length>largeName.length)
            {
                largeName=countBig;
            }   
        }
        return "Tiny Friend Name Is:"+largeName;
    }
    else{
        return "Put Some Values";
    }
}
