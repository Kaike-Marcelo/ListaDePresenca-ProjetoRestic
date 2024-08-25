import { Person, PersonModel } from '../model/personModel';
import { renderPersonList } from '../view/DomHeadler';

export class PersonController {
  static addPerson(name: string, age: number, cpf: string): void {
    const person: Person = { name, age: parseInt(age, 10), cpf };
    PersonModel.addPerson(person);
    this.updatePersonList();
  }

  static clearPeople(): void {
    PersonModel.clearPeople();
    this.updatePersonList();
  }

  static updatePersonList(): void {
    const people = PersonModel.People;
    renderPersonList(people);
  }

  static loadPeople(): void {
    this.updatePersonList();
  }
}
