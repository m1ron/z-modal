import React from 'react';

export interface Deployment {
  id: string;
  created: string;
  agent: string;
  model: string;
  type: 'Testing' | 'Production';
  state: 'Running' | 'Failed' | 'Aborted';
}

interface DeploymentsTableProps {
  deployments: Deployment[];
  header: string[];
}

type BadgeStatus = Deployment['type'] | Deployment['state'];

function StatusBadge({status}: { status: BadgeStatus }) {
  const styles = {
    Running: 'bg-green-50 text-green-600 border border-green-200',
    Failed: 'bg-red-50 text-red-600 border border-red-200',
    Aborted: 'bg-gray-100 text-gray-600 border border-gray-200',
    Testing: 'bg-purple-50 text-purple-600 border border-purple-200',
    Production: 'bg-purple-50 text-purple-600 border border-purple-200',
  };

  const hasDot = status === 'Running' || status === 'Failed';
  const dotColor = status === 'Running' ? 'bg-green-500' : 'bg-red-500';

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
      {hasDot && <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}/>}
      {status}
    </span>
  );
}

export default function Table({deployments, header}: DeploymentsTableProps) {
  return (
      <div className="w-full rounded-l-lg rounded-r-lg overflow-x-auto scrollbar-hidden">
        <table className="min-w-full">
          <thead>
          <tr className="border-b border-gray-100">
            {header.map((column) => (
              <th key={column} className="px-4.5 pt-3.5 pb-3 text-xs font-semibold text-left text-gray-medium-light bg-lightest">
                {column}
              </th>
            ))}
          </tr>
          </thead>
          <tbody>
          {deployments.map((deployment) => (
              <tr key={deployment.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="px-6 py-4 text-xs text-gray-600">{deployment.created}</td>
                <td className="px-6 py-4">
                  <a href="#" className="text-xs text-primary hover:underline font-medium">
                    {deployment.agent}
                  </a>
                </td>
                <td className="px-6 py-4 text-xs text-gray-900">{deployment.model}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={deployment.type}/>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={deployment.state}/>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}
