function compute()

{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value; /* created a variable to accept the rate at which the investment is made */
    var years = document.getElementById("year").value;

    var interest = principal * years * rate / 100;

    var year = new Date().getFullYear() + parseInt(years); /*date of maturity of investment in actual years*/
    p = document.getElementById("principal").value;

}


function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
/*Got to question 8 in javascript*/