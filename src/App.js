import './App.css';
import Card from './componentes/teste';
import Button from "./componentes/button";
import '../src/componentes/test.css'

function App() {
  return (
    <div className='container'>
      <section className='cardContainer'>
        <Button label='baixar CV'/>
        <Card color='red' text='Esse é um texto.' />
      </section>
    </div>
  );
}

export default App;
