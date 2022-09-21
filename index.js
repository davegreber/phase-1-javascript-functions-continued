// code your solution here


function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(stuff = "go to the office"){
    return `This Monday, I will ${stuff}.`
}


// function wrapAdjective (special = "*"){
//     return function (
//         //string 
//         "You are "
//     )

//     wrapAdjective("%")("a dedicated programmer");

function wrapAdjective(arg="*") {
    return function(adj="special") {
        return `You are ${arg }${adj}${arg}!`;
        }
    }