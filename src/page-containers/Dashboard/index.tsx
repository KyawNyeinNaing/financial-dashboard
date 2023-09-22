import BarChart from '@/components/dashboard/charts/BarChart';
import GoalsCard from '@/components/dashboard/GoalsCard';
import Investment from '@/components/dashboard/Investment';
import PaymentCard from '@/components/dashboard/PaymentCard';
import PieChart from '@/components/dashboard/charts/PieChart';
import QuickTransfer from '@/components/dashboard/QuickTransfer';
import StackedAreaChart from '@/components/dashboard/charts/StackedAreaChart';
import TinyAreaChart from '@/components/dashboard/charts/TinyAreaChart';
import Transactions from '@/components/dashboard/Transactions';
import React from 'react';
import { expensesData, incomeData, investmentData } from '@/data';
import { analysisData } from '@/data/analysis';

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-9 space-y-4">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-4">
              <TinyAreaChart data={incomeData} />
            </div>
            <div className="col-span-4">
              <TinyAreaChart data={expensesData} />
            </div>
            <div className="col-span-4">
              <TinyAreaChart data={investmentData} />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-8">
              <StackedAreaChart
                data={analysisData}
                className="h-[290]"
                chartClassName="h-[220px]"
              />
            </div>
            <div className="col-span-4">
              <BarChart className="h-[290]" chartClassName="h-[200px]" />
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
