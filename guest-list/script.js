const people = [
  'Chris',
  'Anne',
  'Colin',
  'Terri',
  'Phil',
  'Lola',
  'Sam',
  'Kay',
  'Bruce',
];
const notInvited = ['Phil', 'Lola'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refused: ';

const addToList = (name, action) => {
  action.textContent += ` ${name},`;
};

for (const name of people) {
  notInvited.includes(name) ? addToList(name, refused) : addToList(name, admitted);
}

admitted.textContent = admitted.textContent.slice(0, -1) + '.' ;
refused.textContent = refused.textContent.slice(0, -1) + '.' ;
