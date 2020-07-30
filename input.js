const inquirer = require('inquirer')

inquirer.prompt([
    {
    name: 'name',
    message: 'What is your name',
    },
    {
    name: 'faveColor',
    message: 'What is your favorite color?',
    },
])

.then(answers => {
    console.log(`Hi ${answers['name']} your fav color is ${answers['faveColor']}!`)

})



