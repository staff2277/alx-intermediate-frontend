interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}

const teacher3: Teacher = {
  firstName: 'Aku ',
  fullTimeEmployee: false,
  lastName: 'Sika',
  location: 'Ghana',
  contract: false,
};

console.log(teacher3);

