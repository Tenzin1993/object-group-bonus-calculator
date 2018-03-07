const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

//console.log(employees);

$( document ).ready(function(){

});

class Employee {
  constructor(emp){
    this.name = emp.name;
    this.employeeNumber = emp.employeeNumber;
    this.annualSalary = emp.annualSalary;
    this.reviewRating = emp.reviewRating;
    this.bonusPercentage = bonus(emp);
    this.totalCompensation = totalComp(emp);
    this.totalBonus = totalBonus(emp);
  }
}

function swag(person){
  let supaSwag = new Employee(person);
  return supaSwag;
}

function totalBonus(employee){
  let blue = parseInt(employee.annualSalary);
  return blue * (bonus(employee)/100);
}

function totalComp(employee){
  let blue = parseInt(employee.annualSalary);
  return blue + (blue * (bonus(employee)/100));
}

function bonus(employee){
  let bonusPercentage = 0;
  if(employee.employeeNumber.length == 4){
    bonusPercentage += 5;
  }
  if(parseInt(employee.annualSalary) > 65000){
    bonusPercentage -= 1;
  }
  if(employee.reviewRating <= 2 ) {
    let bonusPercentage = 0;
  } else if(employee.reviewRating == 3){
  bonusPercentage += 4;
  } else if(employee.reviewRating == 4){
  bonusPercentage += 6;
  } else if (employee.reviewRating == 5){
  bonusPercentage += 10;
  }
  if (bonusPercentage > 13){
    let bonusPercentage = 13;
  }
  if (bonusPercentage < 0){
    let bonusPercentage = 0;
  }
  return bonusPercentage;
}

for(let i=0; i<employees.length; i++){
  $('#onDaDom').append(console.log(swag(employees[i])));

}
