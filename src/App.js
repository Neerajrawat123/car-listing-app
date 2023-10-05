/** @format */

import { useState } from 'react';
import Header from './components/header';
import Card from './components/Card';
import { cars } from './constants/dummy-data';
import CarDetail from './pages/CarDetail';
// import Dashboard from './pages/Dashboard';
import './styles/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useMemo } from 'react';
import Pagination from './components/pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;
  const currentDataTable = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    return cars.slice(startIndex, endIndex);
  }, [currentPage]);
  return (
    <>
      <div className='bg-background '>
        <Header />
        <div className='w-11/12 flex m-auto p-4 justify-between flex-wrap'>
          {currentDataTable.map((car) => (
            <Card car={car} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalCount={cars.length}
          pageSize={pageSize}
          onPageChange = {(page) => setCurrentPage(page)}
        />
      </div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/page/:pageno' element ={ <Dashboard />} /> */}
          <Route path='/page/:carid' element={<CarDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
