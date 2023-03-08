import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Other from '../../pages/Other';
import NoMatch from '../../pages/NoMatch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<Other />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
