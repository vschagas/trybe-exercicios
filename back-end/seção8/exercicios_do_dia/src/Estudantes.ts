export default class Estudante {
  // enrolment: number
  // name: string
  rates: number[] 
  // projects: number[]

  constructor(rates: number[]/* , name: string = "Trybe" */) {
    this.rates = rates
    // this.name
  }
  // constructor(public rates: number[]) {}

  finalGrades () {
    return this.rates.reduce((acc, crr)=> acc + crr)
  }

  AverageGrades () {
    return this.finalGrades() / this.rates.length
  }
}

const estudante1 = new Estudante([ 8, 5])
const average = estudante1.AverageGrades()

console.log(estudante1);
console.log(average);

