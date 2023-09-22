import BarChart from '@/components/dashboard/BarChart';
import Investment from '@/components/dashboard/Investment';
import PaymentCard from '@/components/dashboard/PaymentCard';
import PieChart from '@/components/dashboard/PieChart';
import StackedAreaChart from '@/components/dashboard/StackedAreaChart';
import TinyAreaChart from '@/components/dashboard/TinyAreaChart';
import Transactions from '@/components/dashboard/Transcations';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-9 space-y-4">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-4">
              <TinyAreaChart />
            </div>
            <div className="col-span-4">
              <TinyAreaChart />
            </div>
            <div className="col-span-4">
              <TinyAreaChart />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-8">
              <StackedAreaChart className="h-[218px]" chartClassName="h-[160px]" />
            </div>
            <div className="col-span-4">
              <BarChart className="h-[218px]" chartClassName="h-[160px]" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-4">
              <PieChart className="h-auto" chartClassName="h-[241px]" />
            </div>
            <div className="col-span-4">
              <Transactions className="h-[300px]" />
            </div>
            <div className="col-span-4">
              <Investment className="h-[300px]" />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <PaymentCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
