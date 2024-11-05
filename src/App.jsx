
import CardContainer from './components/CardContainer';

const App = () => {
  return (
    <div>
      <h1>Ejemplo de CardContainer</h1>
      <CardContainer>
        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Tarjeta 1</div>
        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Tarjeta 2</div>
        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Tarjeta 3</div>
      </CardContainer>
    </div>
  );
};

export default App;
