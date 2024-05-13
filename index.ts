import inquirer from 'inquirer';

interface Student {
  name: string;
  id: number;
  courses: string[];
  balance: number;
}

let students: Student[] = []

let courses: { name: string, id: number, tutionFee: number }[] = [{
  name: 'BS',
  id: 0,
  tutionFee: 1000
}, {
  name: 'MS',
  id: 1,
  tutionFee: 1500
}, {
  name: 'DAE',
  id: 2,
  tutionFee: 2000
}]

let isRunning : boolean = true
while (isRunning) {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [
        'Add Student',
        'View Students',
        'Exit',
      ]
    }
  ])
  
  switch (answers.action) {
    case 'Add Student':
      console.log('Add Student case')
      break;
    case 'View Students':
      console.log('View Student case')
      break;
    case 'Exit':
      console.log('Exit case')
      isRunning = false
      break;
  
    default:
      break;
  }


}