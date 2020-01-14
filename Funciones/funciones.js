function square(x){
    return x*x;
}

const power = function(base, exponente){
    let result=1;
    for(let count =0;count < exponente;count++){
        result *=base;
    }
    return result;
};

const hipotenusa = (a, b) =>{
    let result =Math.sqrt(a*a+b*b);
    return result;
};

const hola = () =>{
    return "hola a todos";
}

console.log(square(6));
console.log(power(2, 4));
console.log(hipotenusa(3, 4));
console.log(hola());