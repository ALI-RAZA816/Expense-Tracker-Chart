import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import ChartContainer from './components/ChartContainer';
import FormSidebar from './components/FormSidebar';
import Progress from './components/Progress';
import TransactionRecords from './components/TransactionRecords';
import {useState} from 'react';

function App() {


  const months = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  const date = new Date();

  const budget = 5000;
  const [transactions, setTransactions] = useState([]);
  const [Desc, setDesc] = useState('');
  const [Amount, setAmount] = useState('');
  const [Type, setType] = useState('Expenses');
  const [Category, setCategory] = useState('');
 

  return (
    <>
      <Header/>
      <main>
        <section className="analyticMain">
          <div className="left">
            <Cards/>
            <ChartContainer/>
            <Progress budget = {budget}/>
          </div>
          <div className="right">
            <FormSidebar/>
          </div>
        </section>
      </main>
      <TransactionRecords/>
    </>
  )
}

export default App
