## Book Store

### __Instalação__

Requisitos
* __node: >=10.0.0__
* __npm: >=6.0__ ou __yarn: >=1.0.0__

Para rodar o projeto:

* Clone o projeto
* Rode `yarn` para instalar as dependencias
* `yarn start` para rodar a aplicação em `localhost:3000`

Para rodar os testes:

* yarn test
* npx cypress open/run para rodar os testes do cypress

### __Sobre a Aplicação__

Algumas funcionalidades não foram finalizadas, o scroll infinito para carregar os dados a aplicação dos filtros na busca faltaram alguns testes unitários

Conforme fui estudando a stack fui descobrindo realmente como deveria organizar o código, acabei não tendo o tempo que queria pra chegar em algo melhor.

### __Sobre os Testes__

A parte de testes comecei utilizando o enzyme e logo depois abandonei ele, ainda fiquei na dúvida da melhor forma de testar certas coisas, quis usar o __react-dom/test-utils__ por ser fornecido pelo react imaginei que era mais confiavel, mas não consegui aproveitar o melhor que tinha da lib.

Adicinei alguns testes com Cypress, mas nada muito elaborado, o legal seria pensar em alguma jornada de usuário para ter um teste bonito de verdade

### __Próximos passos__

Para o scroll infinito estava caminhando para um caminho onde iria colocar ele dentro de um reducer, e manter as respostas dos books dentro de uma store.

Isso para facilitar o compartilhamento dos dados entre os components, e para fácilitar a forma de fazer os filtros da busca também.

(Só depois notei tambem que com a reposta da API não teria como fazer todos os filtros )

Os Styled Components também pode ser melhor aproveitados, não chguei a descobrir a melhor forma de organizar/estruturar eles.