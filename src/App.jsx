import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import ChartContainer from './components/ChartContainer';
import FormSidebar from './components/FormSidebar';
import Progress from './components/Progress';

function App() {

  return (
    <>
      <Header/>
      <main>
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
      </main>
    </>
  )
}

export default App
