import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Random from './Random';
import NotFound from './NotFound';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />}/>
        <Route path='random' element={<Random/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
