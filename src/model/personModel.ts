export interface Person {
  name: string;
  age: number;
  cpf: string;
}

export class PersonModel {
  static get People(): Person[] {
    const people = localStorage.getItem('people');
    return people ? JSON.parse(people) : [];
  }

  static savePeople(people: Person[]): void {
    localStorage.setItem('people', JSON.stringify(people));
  }

  static addPerson(person: Person): void {
    const people = PersonModel.People;
    people.push(person);
    PersonModel.savePeople(people);
  }

  static clearPeople(): void {
    localStorage.removeItem('people');
  }
}
