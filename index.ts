import inquirer from 'inquirer';

interface Student {
  name: string;
  id: number;
  courses: { name: string, id: number, tutionFee: number }[];
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

let isRunning: boolean = true
while (isRunning) {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [
        'Add Student',
        'View Students',
        'Manage Student',
        'Exit',
      ]
    }
  ])

  switch (answers.action) {
    case 'Add Student':
      // add new student
      const newUserInput = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter student name?'
        },
        {
          type: 'number',
          name: 'balance',
          message: 'Enter student balance?'
        }
      ])
      students.push({
        name: newUserInput.name,
        id: 10000 + students.length,
        balance: newUserInput.balance,
        courses: []
      })
      console.log(newUserInput.name + ' has been added.')
      break;
    case 'View Students':
      // console.table(students)
      // students.forEach((student) => {
      //   console.log(student.name)
      // })
      for (let student of students) {
        console.log(student.name)
      }
      break;

    case 'Manage Student':
      const choices = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What do you want to do?',
          choices: [
            'Enroll In A Course',
            'Pay Fee',
            'Update Balance',
            'Exit',
          ]
        }
      ])
      switch (choices.action) {
        case 'Enroll In A Course':
          console.log('Available Courses: ')
          console.table(courses)
          console.log('Available Students: ')
          console.table(students)
          const courseInput = await inquirer.prompt([
            {
              type: 'number',
              name: 'courseId',
              message: 'Enter course id?'
            },
            {
              type: 'number',
              name:'studentId',
              message: 'Enter student id?'
            }
          ])
          students[courseInput.studentId - 10000].courses.push(courses[courseInput.courseId])
          console.log(students[courseInput.studentId - 10000].name +' has been enrolled in '+ courses[courseInput.courseId].name)
          break;
        case 'Pay Fee':
          break;
        case 'Update Balance':
          break;
        case 'Exit':
          break;
        default:
          break;
      }
      break;
    case 'Exit':
      isRunning = false
      break;

    default:
      isRunning = false
      break;
  }


}