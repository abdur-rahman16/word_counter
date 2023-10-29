
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner"
import gradient from "gradient-string";

(async () => {
    await showBanner('Word Counter', 'This app can count the words of any paragraph no matter how long it is!', 'red', 'blue');
})();


async function main() {
    
    let condition = true
    while(condition){
        const {enterParagraph} = await inquirer.prompt([{
            name: "enterParagraph",
            type: "input",
            message: gradient.instagram("Please enter the paragraph or sentence you want to count words of!")
        }])
        let again = [{
            name: "tryAgain",
            type: "confirm",
            message: gradient.rainbow("Do you want to count words again?")
        }]
        
        let words = enterParagraph.split(" ");
        console.log(gradient.summer(`The number of words in this paragraph or sentence is ${words.length}`))
        let {tryAgain} = await inquirer.prompt(again)
        condition = tryAgain
        if(!condition){
            console.log(chalk.yellow("Thank you for using this!"))
        }
    }
}
setTimeout(() => {
    main()
}, 500);