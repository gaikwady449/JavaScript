function Summation(Arr)
{
    let iSum = 0
    for(i=0;i<Arr.length;i++)
    {
        iSum = iSum + Arr[i]
    }
}
function main()
{
    let i =0
    let iRet = 0
    

    let Arr =[10,20,30,40,50]

    iRet = Summation(Arr)

    console.log("Summation is :"+iRet)
}
main();