import { Routes, Route, useParams } from 'react-router-dom';

import Layout from './components/layout/Layout';
import UnderConstruction from './pages/UnderConstruction';
import Email from './pages/Email';
import EmailPreview from './pages/EmailPreview';
import EmailDetail from './pages/EmailDetail';

import messages from './messages.json';

import { useState, useEffect } from 'react';

function App() {
  const changeUserIdHandler = (id) => {
    console.log(id);
  };

  return (
    <Layout>
      <Routes>
        <Route
          path='/'
          element={<Email onChangeUserId={changeUserIdHandler} />}
        ></Route>
        <Route
          path='/messages/:userId'
          element={<Email onChangeUserId={changeUserIdHandler} />}
        >
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
