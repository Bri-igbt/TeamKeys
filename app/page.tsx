import DataTable from '@/components/DataTable';
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className="h-screen max-h-screen">
      <div>
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
}

export default Home