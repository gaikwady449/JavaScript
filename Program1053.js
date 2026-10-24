function Reverse(no)
{
    let Digit =0
    let Rev =0

    while(no != 0)
    {
        Digit = no % 10

        Rev= Rev * 10 + Digit

        no= Math.floor(no/10)
    }
    return Rev

}
function main()
{
    let Value=123
    let Ret=0
    Ret=Reverse(Value)

    console.log("Reverse Number is :" +Ret)


}

main()