import StackedAreaChart from '@/components/dashboardCharts/StackedAreaChart';
import TinyAreaChart from '@/components/dashboardCharts/TinyAreaChart';
import { Container, Flex, Grid } from '@radix-ui/themes';
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
              <TinyAreaChart className="h-[218px]" chartClassName="h-[160px]" />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <TinyAreaChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
