function CountSmall(str)
{
    let i =0
    let iCount=0

    for(i = 1 ;i<str.length;i++)
    {
    
        if( str[i] >= 'a' && str[i] >= 'z')
        {
            iCount++

        }
    }

    return iCount

}
function main()
{

    let name = "Marvellous"
    let iRet = 0

    iRet=CountSmall(name)

    console.log("Small Charecter Are :"+iRet)

    
}
main();