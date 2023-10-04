EVERY_DAY_SPENDING = 15.3


let userName = "Andrew"
let userAge = 21
let userBalance = 1200


let pets = ["Cat","Dog", "Hamster"]

everyDaySpendingPerPet = 6
daysSurvived = 0

function nameVertical(name){
    console.log(name)
    for(i in name){
        console.log(name[i])
    }
}

function code(n) {
    return (n < 100)? "Not a valid code" :
            (n < 200)? "Informational response" :
            (n < 300)? "Successful responses" :
            (n < 400)? "Redirection messages" :
            (n < 500)? "Client error response" :
            (n < 600)? "Server error response" :
            "Not a valid code"
 }

 function compareVariables(var1, var2) {
    console.log("var1 type:", typeof(var1) + "; " + "var2 type:", typeof(var2))
    if(var1 == var2 && typeof(var1) == typeof(var2)){
        console.log("The two variables have the same value and type")
    
    }
    else if (var1 == var2 && typeof(var1) != typeof(var2)){
        console.log("The two variables have the same value but not the same type")
    }
    else if (var1 != var2 && typeof(var1) == typeof(var2)){
        console.log("The two variables do not have the same value but have the same type")
    }
    else {
        console.log("The two variables do not have the same value nor the same type")
    }
}

function fibonacci(n) {
    let out = 0
    let one_step_back = 0
    let two_steps_back = 0
    let counter = 1
    while(n >= counter){
        console.log(out)
        if (counter == 1){
            one_step_back = 1
            counter = counter + 1
            out = 1
            continue
        }
        
        out = one_step_back + two_steps_back
        two_steps_back = one_step_back
        one_step_back = out
        counter = counter + 1
        
    }
}


function main(){
    //console.log("Text", variable) allows you to write to the console
    console.log("User Name", userName)
    console.log("User Age", userAge)
    console.log("User balance", userBalance)
    console.log("User pets", pets)
    console.log("Spending per pet", everyDaySpendingPerPet)
    console.log("User days survived", daysSurvived)

    while (userBalance > 0) {
        let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * pets.length
        userBalance -= spending
        daysSurvived++
    }

    console.log("User have sufficient money for " + daysSurvived + " days")

    nameVertical("Sarah")
    console.log(code(50))
    console.log(code(105))
    console.log(code(245))
    console.log(code(312))
    console.log(code(476))
    console.log(code(599))
    console.log(code(665))

    let a = 1
    let b = "1"

    compareVariables(a,b)

    fibonacci(6)
}

main()