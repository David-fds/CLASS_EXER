function fizzbuzz(){
    var string3;
    var string5;
    var msg;

    for(var i = 1;i <= 100; i++){
        var flag3 = 0;
        var flag5 = 0;
        var flag15 = 0;
        var quotient3 = i / 3;
        var quotient5 = i / 5;
        string3 = quotient3.toString;
        string5 = quotient5.toString;

        if(string3.length <= 2){
            flag3 = 1;
        }

        if(string5.length <= 2){
            flag5 = 1;
        }

        if(flag3 == 1 && flag5 == 1){}

       
    }
}

fizzbuzz();