let food={
    food1:"بيتزا",
    food2:"سوشي",
    food3:"برجر",
};

let menu = prompt("ماهو طلبك؟");

if(menu == "1" )  {console.log(food.food1);}

if(menu == "2") { console.log(food.food2); }

    if(menu == "3" ){ console.log(food.food3); }
    if(menu=="4"){console.log("طلبك غير متوفر حاليا"); }

            // switch
            switch(menu) {
                case"1":
                console.log(food.food1);
             break;
             case"2":
             console.log(food.food2);
          break;
          case"3":
                console.log(food.food3);
             break;
             default:
                console.log("طلبك غير متوفر حاليا");
             break;
            }

            // اله حاسبه

         let number1 = prompt("ادخل الرقم الاول")

            let number2 = prompt("ادخل الرقم الثاني")

            let type = prompt("ادخل العمليه * - / + ")

let x = parseInt(number1);
let y = parseInt(number2);
let answer = null;
if (x && y) {
    if(type == "*"){
        answer = x*y;
        console.log(answer);
    }else if (type == "+"){
        answer = x + y;
        console.log(answer);
    }else if (type == "-"){
        answer = x -y;
    console.log(answer);
    } else if(type == "/"){
        answer = x / y;
        console.log(answer)
    } else {
        console.log("العمليه غير صحيحه");
    }
    
}else {
    console.log("احد الارقام غير صحيحه")
}


let age1 = prompt("يرجى ادخال العمر")
let age =15
console.log(age);
 
if(age >= 4 && age < 6){
console.log("روضه")

}else if(age >= 6 && age <= 17){

    console.log("مدرسه")

    }else if(age >= 18 && age < 27) {
        console.log("جامعه")
        }

