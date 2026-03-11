import './App.css';
import Header from './components/Header';
// import recharts from "recharts";
import AnalyticMain from './components/AnalyticMain';
import Cards from './components/Cards';
import ChartContainer from './components/ChartContainer';
import FormSidebar from './components/FormSidebar';

function App() {


  return (
    <>
      <Header/>
      <main>
        {/* <AnalyticMain/> */}
        <section className="analyticMain">
          <div className="left">
            <Cards/>
            <ChartContainer/>
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
