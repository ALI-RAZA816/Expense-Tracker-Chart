import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import ChartContainer from './components/ChartContainer';
import FormSidebar from './components/FormSidebar';
import Progress from './components/Progress';
import TransactionRecords from './components/TransactionRecords';
import {useEffect, useState} from 'react';
import ConfirmBox from './components/ConfirmBox';
import EditForm from './components/EditForm';
import Sussessful from './components/Sussessful';
import AppContextProvider, { AppContext } from './context/context';

function App() {

  return (
    <>
    <AppContextProvider>
      <header style={{padding:"0 .5rem"}}>
        <Header/>
      </header>
      <main style={{padding:"0 .5rem"}}>
        <section className="analyticMain">
          <div className="left">
            <Cards/>
            <ChartContainer/>
            <Progress/>
          </div>
          <div className="right">
            <FormSidebar/>
          </div>
        </section>
      <TransactionRecords/>
      </main>
      <ConfirmBox/>
      <EditForm/>
      <Sussessful/>
      </AppContextProvider>
    </>
  )
}
export default App
