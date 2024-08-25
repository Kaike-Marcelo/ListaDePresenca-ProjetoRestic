import { PersonController } from '../controller/personController';
import { Person } from '../model/personModel';

export function initializeDOM() {
  try {
    const form = document.getElementById('person-form') as HTMLFormElement;
    const clearButton = document.getElementById(
      'clear-people'
    ) as HTMLButtonElement;

    if (!form) {
      console.error('Formulário não encontrado.');
      return;
    }

    if (!clearButton) {
      console.error('Botão de limpar pessoas não encontrado.');
      return;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const age = (document.getElementById('age') as HTMLInputElement).value;
      const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
      PersonController.addPerson(name, age, cpf);
      form.reset();
    });

    clearButton.addEventListener('click', () => {
      PersonController.clearPeople();
    });
  } catch (error) {
    console.error('Erro ao inicializar o DOM:', error);
  }
}

export function renderPersonList(people: Person[]): void {
  try {
    const peopleList = document.getElementById('people') as HTMLUListElement;

    if (!peopleList) {
      console.error('Elemento da lista de pessoas não encontrado.');
      return;
    }
    peopleList.innerHTML = '';
    people.forEach((person) => {
      const li = document.createElement('li');
      li.textContent = `Nome: ${person.name}, Idade: ${person.age}, CPF: ${person.cpf}`;
      peopleList.appendChild(li);
    });
  } catch (error) {
    console.error('Erro ao renderizar a lista de pessoas:', error);
  }
}
