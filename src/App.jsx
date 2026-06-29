// Import global CSS styles
import './App.css';

// Import all page components
import Header from './components/Header';
import Cards from './components/Cards';
import ChartContainer from './components/ChartContainer';
import FormSidebar from './components/FormSidebar';
import Progress from './components/Progress';
import TransactionRecords from './components/TransactionRecords';
import { useEffect, useState } from 'react';
import ConfirmBox from './components/ConfirmBox';
import EditForm from './components/EditForm';
import Sussessful from './components/Sussessful';

// Import the Context Provider and the Context itself (though only the Provider is used)
import AppContextProvider, { AppContext } from './context/context';

/**
 * App Component
 * The root component that wraps the entire application.
 * It provides global state via AppContextProvider and structures the main layout.
 */
function App() {

  return (
    <>
      {/* Provide global application state to all child components */}
      <AppContextProvider>
        {/* Main container with max width and centered */}
        <div style={{ maxWidth: '1550px', width: '100%', margin: '0 auto' }}>
          
          {/* Header section: application navigation */}
          <header style={{ padding: "0 .5rem" }}>
            <Header />
          </header>

          {/* Main content area */}
          <main style={{ padding: "0 .5rem" }}>
            {/* Analytical dashboard section: cards, chart, and progress */}
            <section className="analyticMain">
              {/* Left column: Cards, Chart, Progress */}
              <div className="left">
                <Cards />
                <ChartContainer />
                <Progress />
              </div>
              {/* Right column: Add transaction form and filters */}
              <div className="right">
                <FormSidebar />
              </div>
            </section>

            {/* Transaction list section */}
            <TransactionRecords />
          </main>

          {/* Modal overlays: Delete confirmation and Edit transaction */}
          <ConfirmBox />
          <EditForm />
          {/* Success/Error notification toaster */}
          <Sussessful />
        </div>
      </AppContextProvider>
    </>
  );
}

export default App;