import { useState } from 'react';

import SelectedOrder from './components/SelectedOrder';
import UserTable from './components/UserTable';
import Pagination from './components/Pagination';

import Data from './users.json';

const PAGE_SIZE = 10;
const MAX_PAGE_NUMBER = Math.ceil(Data.length / PAGE_SIZE);

const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

function App() {
  const [users, setUsers] = useState(Data);
  const [order, setOrder] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const orderHandler = (order) => {
    setOrder(order);

    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.sort((a, b) => {
        if (a[order] > b[order]) {
          return 1;
        }
        if (a[order] < b[order]) {
          return -1;
        }
        return 0;
      });

      return updatedUsers;
    });
  };

  const filterHandler = (feature) => {
    if (!order) {
      return;
    }

    setUsers(() => {
      const updatedUsers = [...Data];
      return updatedUsers.filter((user) => {
        const item = String(user[order]).toLowerCase();
        // return user[order].includes(feature);
        return item.includes(feature.toLowerCase());
      });
    });
  };

  const paginateHandler = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  return (
    <>
      <h1>A Simple Web App</h1>
      <SelectedOrder onOrder={orderHandler} onFilter={filterHandler} />
      <UserTable users={paginate(users, PAGE_SIZE, pageNumber)} />
      <Pagination
        pageNumber={pageNumber}
        onPaginate={paginateHandler}
        maxPageNumber={MAX_PAGE_NUMBER}
      />
    </>
  );
}

export default App;
