import {useState} from 'react';

/* TODO
  O componente abaixo está com problemas. Existem muitos códigos desnecessários.
  Resolva, Refatore o código e simplifique.
*/

export const Desafio3 = ()=> {
  const [list, setList] = useState([
    1, 2
  ])

  const quantidade = list.length;

  return (
    <div>
      <span> quantidade: {quantidade}</span>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            item: {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

/*
  Resposta: existem funções anonimas desnecessárias para
  renderização de tags, além da ausencia de key na listagem
  dos items
*/
