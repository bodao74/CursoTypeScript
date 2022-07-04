import React, { createContext } from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import './App.css';
import DesctructuringComponent, { Category } from './components/DesctructuringComponent';
import StateComponent from './components/StateComponent';
import Context from './components/Context';
//import logo from './logo.svg';

//  Types

type textOrNull = string | null;

type fixed = 'Isso' | 'Ou' | 'Aquilo';


// API - Interface para o Contexto
interface IAppContext {
  language: string,
  framework: string,
  projects: number
};
export const appContext = createContext<IAppContext | null>(null);
//////API - Interface para o Contexto//////

function App() {
  // 1 - Variaveis
  const name: string = 'Michael';
  const age: number = 47;
  const isWorking: boolean = true;


  // 2 - Funcoes
  const greetingMsg = (name: string): string => {
    return `Olá ${name}!`;
  };

  const mytext: textOrNull = 'Roger that ! ! !';
  const mysecondtext: textOrNull = null;


  let fixo: fixed = 'Ou';


  // API 
  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5
  }


  return (
    <appContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h1>O Nome é: {name}</h1>
        <h1>Idade é: {age}</h1>
        {isWorking && (<div><p>Está Trabalhando !</p></div>)}
        <h2>{greetingMsg(name)}</h2>
        <FirstComponent />
        <SecondComponent name='segundo' />
        <DesctructuringComponent
          title='Primeiro Comentario'
          content='Algum comentário qualquer......'
          commentsQty={40}
          tags={['ts', 'js', 'react']}
          category={Category.JS} />

        <DesctructuringComponent
          title='Outro Comentário'
          content='inteligente......'
          commentsQty={31}
          tags={['Golf', 'Swim', 'IPSC']}
          category={Category.P} />

        <StateComponent />

        {mytext && <p>Tem texto na variável 1</p>}
        {mysecondtext && <p>Tem Texto na variável 2</p>}
        <p>{fixo}</p>

        <Context />
      </div>
    </appContext.Provider>
  );
}
export default App;