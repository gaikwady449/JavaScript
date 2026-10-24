class Arithmatic
{
    constructor(A,B)
    {
        this.no1=A;
        this.no2=B;
    }

    Addition()
    {
        return this.no1 + this.no2

    }

    Subtraction()
    {
        return this.no1 - this.no2

    }
}

function main()
{
    let lobj = new Arithmatic(11,10)

    console.log(lobj.Addition())
    console.log(lobj.Subtraction())

}