// src/app/agents/page.tsx
import Link from 'next/link';
import botData from '../../../public/data/agents.json';

export default function AgentsPage() {
  return (
    <div>
      <h1>Agents</h1>
      <ul>
        {botData.map((bot) => (
          <li key={bot.href}>
            <Link href={`/agents/${bot.href}`}>{bot.bot}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}