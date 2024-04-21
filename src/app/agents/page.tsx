// src/app/agents/page.tsx
import Link from 'next/link';
import botData from '../../../public/data/agents.json';
import SuccessfulCampaigns from '@/components/SuccessfulCampaigns';

export default function AgentsPage() {
  return (
    <div>
      <SuccessfulCampaigns />
    </div>
  );
}