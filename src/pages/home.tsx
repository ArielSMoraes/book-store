import * as React from 'react'

import CategoryBooks from '../components/categoryBooks'
import FindInput from '../components/findInput'
import { GlobalRules } from '../styled-components/globalRules'

const Home = () => (
  <GlobalRules>
    <FindInput />
    <CategoryBooks category='Aventura' search='subject:adventure' />
    <CategoryBooks category='Infantil' search='subject:juvenile'/>
    <CategoryBooks category='Destaques' search='turma da monica+inauthor:mauricio de sousa' highlight={true} />
    <CategoryBooks category='Ação' search='subject:action' />
  </GlobalRules>
)

export default Home
