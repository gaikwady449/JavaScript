function CheckEven(no)
{
    return(no % 2 == 0)
    
}
function main()
{
    let  value = 11
    let bRet = false

    bRet= CheckEven(value)

    if(bRet)
    {
        console.log(`${value} is Even Number`)
    }
    else
    {
        console.log(`${value} is odd Number`)
    }
}

main();



