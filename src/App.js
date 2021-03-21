import logo from './logo.svg';
import './App.css';
import {connect, Provider} from 'react-redux';
import {Container} from 'reactstrap';
import store from './store';
import BibleQuote from './components/BibleQuote';
import colors from './components/colors';
import {useEffect} from 'react';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab);
function App() {
  
  return (
    <Provider store={store}>
      <div className="App" >
       
          <Container >
<BibleQuote/>
     </Container>
        
     
        
      </div>
    </Provider>
    
  );
}

export default App;