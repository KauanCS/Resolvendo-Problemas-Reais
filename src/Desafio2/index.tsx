import {useState} from 'react';

/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:

*/

export const Desafio2 = ()=> {
  const [list, setList] = useState([
    1, 2
  ]);

  return (<ul>{list.map((item, index) => <li key={index}>item: {item}</li>)}</ul>)
}

/*
  Resposta: Quando renderizamos uma lista de componentes
  é necessário adicionar uma key para cada item, para que o React
  consiga identificar o componente atualizado, evitando re-renders
  e consequentemente melhorando a performance e estabilidade
*/