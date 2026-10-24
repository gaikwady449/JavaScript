function CheckEven(no)
{

    if(no % 2 == 0)
    {
        return true
    }
    else
    {
        return false
    }
}
function main()
{
    let  value = 10
    let bRet = false

    bRet= CheckEven(value)

    if(bRet == true)
    {
        console.log(`${value} is Even Number`)
    }
    else
    {
        console.log(`${value} is odd Number`)
    }

}

main();



