import { Stats } from 'fs';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Person from './components/Person';
import { PersonList } from './components/PersonList';
import Status from './components/Status';
import Oscar
 from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import { LoggedIn } from './components/states/LoggedIn';
import User from './components/states/User'

function App() {
  const PersonName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = 
    [
      {
        first: 'Bruce',
          last: 'Wayne'
      },
      {
        first: 'Clark',
          last: 'Kent'
      },
      {
        first: 'Princess',
          last: 'Diana'
      },
      {
        first: 'Princess',
          last: 'Diana'
      },
    ]


return (
  <div className="App">
    <Greet name='Fatima' isLoggedIn={true} />
    <Person name={PersonName} />
    <PersonList names={nameList}/>
    <Status status='success'/>
    {/* <Heading>heading heading</Heading> */}
    <Oscar>
    <Heading>Oscar goes to Leornardo!!</Heading> 
    </Oscar>
    {/* event props */}
    <Button handleClick={(event, id) => {
      console.log('Button clicked', event, id)
    }}/>
    <Input value='' handleChange={(event) => {
      console.log(event)
    }}/>

    <Container styles={{border: '1px solid black', padding: '1rem'}}/>
    <LoggedIn/>
    <User/>
  </div>
);
}

export default App;
