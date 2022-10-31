import { Stats } from 'fs';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Person from './components/Person';
import { PersonList } from './components/PersonList';
import Status from './components/Status';
import Oscar
 from './components/Oscar';
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
  </div>
);
}

export default App;
