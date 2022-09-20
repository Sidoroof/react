import logo from './logo.svg';
import './App.css';

function App() {
  const massege = 'Привет МИР!!!'
  return (
    <div className='App'>
      <Mymassege sms={massege} />
    </div>
  );
}
////////////////////////////////
export default App;
const Mymassege = (props) => {
  return (
    <div className="stile-form">
      <h1 className="stile-text"> Я на связи. {props.sms}</h1>
    </div>
  )

}