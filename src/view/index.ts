import { PersonController } from '../controller/personController';
import '../style.css';
import { initializeDOM } from './DomHeadler';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <button id="clear-people">Limpar Lista</button>
    <h1>Lista de Presença</h1>
    <form id="person-form">
      <input type="text" id="name" placeholder="Nome" maxlength="35" required />
      <input type="number" id="age" placeholder="Idade" max="120" required />
      <input type="text" id="cpf" placeholder="CPF" minlength="12" maxlength="12"  required />
      <button type="submit">Adicionar Presença</button>
    </form>
    <div class="person-list">
      <h2>Lista de Pessoas Presentes</h2>
      <ul id="people"></ul>
    </div>
  </div>
`;

initializeDOM();
PersonController.loadPeople();
