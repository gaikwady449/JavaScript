function Reverse(no)
{
    let Fact=1

    for(let i =1 ;i<=no;i++)
    {
        
        Fact= Fact*i
    }

    return Fact
}
function main()
{
    let Value=5
    let Ret=0
    Ret=Reverse(Value)

    console.log("Factorial of Number is "+Ret)
}

main()