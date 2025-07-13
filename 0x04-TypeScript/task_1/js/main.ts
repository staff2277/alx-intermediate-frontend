interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};


console.log(printTeacher("Zack", "Miney"));  


interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Ryan',
  lastName: 'Lewis',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


const teacher3: Teacher = {
  firstName: 'Aku ',
  fullTimeEmployee: false,
  lastName: 'Sika',
  location: 'Ghana',
  contract: false,
};

console.log(teacher3);

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('Young', 'Jeezy');
console.log(student.displayName());      
console.log(student.workOnHomework());   
