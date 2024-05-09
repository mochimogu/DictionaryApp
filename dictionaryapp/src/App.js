
import Nav from './routes/nav';
import Dictionary from './routes/content';


function App() {
  return (
    <div className="App">
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
      </div>
      <div>
        <div className='d-flex flex-direction-row'>
          <div style={{width : "15%"}}>
            <Nav></Nav>
          </div>
          <div style={{width : "85%"}}>
            <Dictionary></Dictionary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
