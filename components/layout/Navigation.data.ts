export interface NavItem {
  name: string;
  href: string;
  icon: string;
  badge?: number;
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}

/**
 * Main navigation
 */
export const navigation: NavSection[] = [
  {
    title: 'Monitor',
    items: [
      { name: 'Dashboard', href: '/', icon: 'dashboard' },
      { name: 'Agents', href: '/agents', icon: 'agents', badge: 3 },
      { name: 'Models', href: '/models', icon: 'models', badge: 6 },
    ],
  },
  {
    title: 'Governance',
    items: [
      { name: 'Lifecycles', href: '/lifecycles', icon: 'lifecycles' },
      { name: 'Deployments', href: '/deployments', icon: 'deployments', badge: 18 },
    ],
  },
  {
    title: 'System',
    items: [
      { name: 'Audit Log', href: '/audit-log', icon: 'auditLog' },
      { name: 'Settings', href: '/settings', icon: 'settings' },
    ],
  },
];