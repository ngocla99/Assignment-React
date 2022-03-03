import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import UnderConstruction from './pages/UnderConstruction';
import Email from './pages/Email';
import EmailPreview from './pages/EmailPreview';
import EmailDetail from './pages/EmailDetail';

import messages from './messages.json';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Email />}></Route>
        <Route path='/messages/:userId' element={<Email />}>
          <Route path=':subject' element={<EmailPreview messages={messages} />}>
            <Route path=':id' element={<EmailDetail />}></Route>
          </Route>
        </Route>
        <Route path='/contacts' element={<UnderConstruction />}></Route>
        <Route path='/preferences' element={<UnderConstruction />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
