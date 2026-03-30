'use client';

import Header from "@/components/layout/Header";

import Stats from '@/components/pages/deployments/Stats';
import Tabs from '@/components/ui/Tabs';
import Table from '@/components/ui/Table';
import Pagination from '@/components/ui/Pagination';

export default function DeploymentsPage() {
  return (
    <>
      <Header
        title="Deployments"
      />

      <div className="p-4 xl:px-8 xl:py-7">

        {/*
        <Stats items={[
          { value: 18, label: 'Total (All Time)', icon: 'bolt' },
          { value: 3, label: 'Running Now', icon: 'bolt', iconClass: 'text-green-500', variant: 'success' },
          { value: 1, label: 'Failed', icon: 'warning', iconClass: 'text-red-500', variant: 'danger' },
          { value: 4, label: 'Aborted', icon: 'trash', variant: 'muted' },
        ]}/>

        <Tabs
          className="mb-6"
          tabs={['All', 'Running', 'Failed', 'Testing', 'Production']}
          activeTab='All'
        />
        */}

        <div className="bg-white border border-gray rounded-[10px]">
          <Table
            header={['Created', 'Agent', 'Model', 'Type', 'State']}
            deployments={[
              { id: '1', created: '2/26/2026, 17:53:55', agent: 'Watt', model: 'Vibration Model', type: 'Testing', state: 'Running' },
              { id: '2', created: '2/26/2026, 17:50:40', agent: 'Watt', model: 'Vibration Model', type: 'Testing', state: 'Aborted' },
              { id: '3', created: '2/26/2026, 17:30:26', agent: 'Watt', model: 'Temperature Model', type: 'Testing', state: 'Aborted' },
              { id: '4', created: '2/26/2026, 16:42:12', agent: 'Maxwell', model: 'Temperature Model', type: 'Production', state: 'Running' },
              { id: '5', created: '2/26/2026, 10:56:44', agent: 'Maxwell', model: 'Temperature Model', type: 'Testing', state: 'Failed' },
              { id: '6', created: '2/26/2026, 10:19:50', agent: 'Maxwell', model: 'Temperature Model', type: 'Testing', state: 'Aborted' },
              { id: '7', created: '2/25/2026, 14:57:29', agent: 'Maxwell', model: 'Temperature Model', type: 'Testing', state: 'Aborted' },
              { id: '8', created: '2/24/2026, 14:25:30', agent: 'Faraday', model: 'Temperature Model', type: 'Testing', state: 'Aborted' },
              { id: '9', created: '2/24/2026, 13:21:24', agent: 'Faraday', model: 'Temperature Model', type: 'Production', state: 'Aborted' },
            ]}
          />

          <Pagination
            currentPage={1}
            totalPages={10}
          />
        </div>

      </div>
    </>
  );
}