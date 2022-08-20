
let associateBanker = [56123, 5, 1]; 

if (empYears == 1 )
{    
    if (empChecking >= 1) {
      console.log("Ship $50.00 Amazon Gift Card")
    }    
    else {
      console.log ("Incentives not met")
    }
}

else if (empYears == 2 )
{
    if (empChecking >= 3)
    {
      console.log("Ship $400.00 Visa Gift Card")
    }    
    else {
      console.log("Ship $100.00 Visa Gift Card")
    }
}

else if (empYears == 3 )
{
    if (empChecking >= 2)
    {
      console.log("Ship $700.00 Visa Gift Card")
    }    
    else 
    {
      console.log("Ship $350.00 Visa Gift Card")
    }
}

else if (empYears >= 5 )
{
    if (empChecking !== 0)
    {
      console.log("Ship $3500.00 Visa Gift Card")
    }    
    else 
    {
      console.log("Ship set of knives")
    }
}
else if (empYears == 0) {
  console.log ('Not eligible for gift');
}

console.log(empId + " : Processed")
