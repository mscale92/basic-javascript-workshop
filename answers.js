//yay a comment!

//Return the first character of a string.
var firstchar = function(str){
    return str.charAt(0);
};

firstchar("hello");
firstchar("world");
firstchar("");


//Return the last character of a string.
var lastChar = function(str){
    return str.charAt(str.length - 1)
};

lastChar("world");


//Return a string that is at the position of the input num
var positionAtNum = function(str, num){
    return str.charAt(num);
};

positionAtNum("Adieu", 2);


//Return a function that adds two values together
var addition = function(num1, num2){
    return num1 + num2;
};

addition(5, 10);

//when a string is passed, it returns a new string with the number followed by the string.
//e.g. 5 + "a" = "5a"


//Return a function that takes two nums and a string. Based on the string, arithmetic functions occur
var twoNumStr = function(num1, num2, str){
    if(str === "add"){
        return num1 + num2;
    }
    else if(str === "subtract"){
        return num1 - num2;
    }
    else if(str === "mult"){
        return num1 * num2;
    }
    else if(str === "divide"){
        return num1 / num2;
    }
    else{
        return 0;
    }
        
};
    
twoNumStr(2,3,"mult");


//Repeat a string as many times as num is.
var stringRepeat = function(str, num){
    var space = " ";
    var repeatMe = str.concat(space);
    return (repeatMe.repeat(num)).trim();
};

stringRepeat("hello", 3);


//Reverse the order of a string
var stringReverse = function(str){
    var arrayString = str.split('');
    var revString = arrayString.reverse();
    return revString.join('');
    
};

stringReverse("hello");


//Return a factorial, both negative and positive
var factorial = function(num){
    if(num === 0){
        return 1;
    }
    else if (num > 0){
        return num * factorial(num - 1);
    }
    //recursion at its finest. A function calling upon itself to repeat an action until the recursion is broken. In this case, the recursion is broken once the number hits zero, then it returns 1. The recursive action is num being multiplied.
    else{
        return num * factorial(num + 1);
    }
    
};

factorial(-5);


//Return the largest word in a string
var phrase = function(str){
    
    var array = str.split(' ');
    
    var end = "";
   
    for(var i = 1; i < array.length; i++){
        var pos1 = array[i].length;
        var pos2 = array[i-1].length;
        if(pos1 > pos2){
            end = array[i];
        }
        else{
            end = array[i-1];
        }
       
    }
    return end;
};

phrase("hello world! My name is MareBear bitches!");


//Return a string with the first letter of every word capitalized
var capitalize = function(str){
    str = str.toLowerCase();
    var array = str.split(' ');
    var proper = []
    
    for(var i = 0; i < array.length; i++){
        str = array[i].split('');
        str[0] = str[0].toUpperCase();
        proper[i] = str.join('');
    }
    str = proper.join(' ');
    return str;
};

capitalize("heLLo woRLd!");


//Return the largest number in an array
var largest = function(array){
    var bigger = 0;
   
    for(var i = 1; i < array.length; i++){
        if(array[i-1] > array[i]){
            bigger = array[i-1];
            array[i] = bigger;
        }
    }
    return bigger;
};

largest([1,6,5,40,2,3]);


//Return only truthy data points in an array
var sifter = function(falsy){
    return falsy !== false;
    //It is imperative that this statement read as !== false not as === true, they are not the same
    //!== false means everything that is not false. This removes all falsy statements.
};

var filtered = function(array){
    return array.filter(sifter);
};

filtered([9, "hey", false, true]);


//Return the sum of all the numbers in the array
var sumOfAll = function(array){
    var add = [0]
    
    for(var i = 0; i < array.length; i++){
        var digit = add[0] + array[i];
        add[0] = digit;
    }
    return add[0];
    
};


//Compare two arrays and return an array only with non matched data points, in this case numbers
var sifter = function(truthy){
    if (truthy !== false){
        return truthy;
    }
};

var notTheSame = function(arr1, arr2){
    var bigger = [];
    var smaller = [];
    
    if(arr1.length > arr2.length){
        bigger = arr1;
        smaller = arr2;
    }
    else{
        bigger = arr2;
        smaller = arr1;
    }
    
   
   var digit = 0;
    for(var i = 0; i < bigger.length; i++){
        digit = bigger[i];
        
        for(var x = 0; x < smaller.length; x++){
            if(digit === smaller[x]){
                var pos = bigger.indexOf(digit);
                bigger[pos] = false;
                smaller[x] = false;
            }
        }

    }
    
    var combo = bigger.concat(smaller);    
    return combo.filter(sifter);
};

notTheSame([5,2,3,4], [1,2,5]);


//Write a function that takes an array and a function and passes the function on each element within the array
var divideTwo = function(num){  
    return num / 2;
};

//Have the loop exist in the function that takes the array and function parameter. This enables you to not have to repeatedly write loops for the function parameter. Instead, this function loops over whatever the function parameter is.
var loop = function(array, func){
    for(var i = 0; i < array.length; i++){
        array[i] = func(array[i]);
    }
    return array;
};

loop([4,6,10], divideTwo);


