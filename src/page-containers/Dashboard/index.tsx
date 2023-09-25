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
import { financialData } from '@/data/analysis/financial';

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12 lg:gap-x-4 lg:gap-y-0 gap-y-3">
        <div className="lg:col-span-9 col-span-12 space-y-4">
          <div className="grid grid-cols-12 lg:gap-x-4 lg:gap-y-0 gap-y-3">
            <div className="lg:col-span-4 col-span-12">
              <TinyAreaChart data={incomeData} />
            </div>
            <div className="lg:col-span-4 col-span-12">
              <TinyAreaChart data={expensesData} />
            </div>
            <div className="lg:col-span-4 col-span-12">
              <TinyAreaChart data={investmentData} />
            </div>
          </div>
          <div className="grid grid-cols-12 lg:gap-x-4 lg:gap-y-0 gap-y-3">
            <div className="lg:col-span-8 col-span-12">
              <StackedAreaChart
                data={analysisData}
                className="h-[315px]"
                chartClassName="h-[234px]"
              />
            </div>
            <div className="lg:col-span-4 col-span-12">
              <BarChart data={financialData} className="h-[290]" chartClassName="h-[200px]" />
            </div>
          </div>
          <div className="grid grid-cols-12 lg:gap-x-4 lg:gap-y-0 gap-y-3">
            <div className="lg:col-span-4 col-span-12">
              <PieChart className="h-auto" />
            </div>
            <div className="lg:col-span-4 col-span-12">
              <Transactions className="h-[300px]" />
            </div>
            <div className="lg:col-span-4 col-span-12">
              <Investment className="h-[300px]" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-12">
          <div className="grid grid-cols-1 gap-y-4">
            <div className="col-span-1">
              <PaymentCard />
            </div>
            <div className="col-span-1">
              <QuickTransfer className="h-[250px]" />
            </div>
            <div className="col-span-1">
              <GoalsCard className="h-[250px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
