import BarChart from '@/components/dashboard/BarChart';
import GoalsCard from '@/components/dashboard/GoalsCard';
import Investment from '@/components/dashboard/Investment';
import PaymentCard from '@/components/dashboard/PaymentCard';
import PieChart from '@/components/dashboard/PieChart';
import QuickTransfer from '@/components/dashboard/QuickTransfer';
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
              <StackedAreaChart className="h-[290]" chartClassName="h-[220px]" />
            </div>
            <div className="col-span-4">
              <BarChart className="h-[290]" chartClassName="h-[210px]" />
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
          <div className="grid grid-cols-1 gap-y-4">
            <div className="col-span-1">
              <PaymentCard />
            </div>
            <div className="col-span-1">
              <QuickTransfer className="h-[240px]" />
            </div>
            <div className="col-span-1">
              <GoalsCard className="h-[240px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
