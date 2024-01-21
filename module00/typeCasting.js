{
    const nbr = Number("sear");
    console.log(nbr); // nan; 
}

{
    const nbr = Number("             12344     ");
    console.log(nbr); // 12344; 
}

{
    const flag = Boolean(" ");
    console.log(flag); // true;

    const flag1 = Boolean(NaN);
    console.log(flag1); // true;
}

{
    const value1 = "5";
    const value2 = 9;
    let sum = value1 + value2;

    console.log(sum); // 59
    console.log(typeof sum); // string
    sum = Number(value1) + value2;
    
    console.log(sum); // 14
    console.log(typeof sum); // Number
}    