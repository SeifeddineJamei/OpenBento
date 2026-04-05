import * as React from 'react';
import * as Lucide from 'lucide-react';
const { CloudRain, FileText, GitBranch } = Lucide;
import { motion } from 'framer-motion';
import type { Widget } from '../../data/dashboard-config';

function Weather() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col items-center h-full">
      <CloudRain className="text-blue-400 h-12 w-12 mb-4" />
      <p className="text-zinc-400 text-xs">Current Temp</p>
      <p className="text-2xl font-bold">22°C</p>
      <p className="text-sm text-zinc-500 mt-1">Sunny</p>
    </div>
  );
}

function Tasks() {
  const tasks = ['Review PR #42', 'Fix bento grid', 'Add theme toggle'];
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col h-full">
      <p className="text-sm font-semibold mb-4">Today's Tasks</p>
      <div className="space-y-2 flex-1">
        {tasks.map((task, i) => (
          <motion.div
            key={task}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 p-2 bg-zinc-800/50 rounded-xl"
          >
            <div className="w-5 h-5 bg-emerald-500 rounded-full flex-shrink-0" />
            <span className="text-sm">{task}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Notes() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
      <FileText className="text-purple-400 mb-4 h-12 w-12" />
      <p className="text-zinc-400 text-xs">Quick Notes</p>
      <p className="text-lg font-medium mt-2">Design system review tomorrow</p>
    </div>
  );
}

function PersonalGitHubStats() {
  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl">
          <GitBranch className="h-6 w-6 text-purple-400" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-200">GitHub Stats</h3>
          <p className="text-zinc-500 text-sm">@yourusername</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Stars</span>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="font-bold text-2xl text-yellow-400"
          >
            1.2k
          </motion.div>
        </div>
        <div className="flex justify-between">
          <span>Forks</span>
          <span className="font-bold text-emerald-400">420</span>
        </div>
        <div className="flex justify-between">
          <span>PRs</span>
          <span className="font-bold text-blue-400">89</span>
        </div>
      </div>
      <div className="pt-4 border-t border-zinc-800">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          View Profile
        </motion.button>
      </div>
    </div>
  );
}

export function PersonalDashboard(): Widget[] {
  return [
    {
      id: 'personal-github',
      size: '2x2',
      component: <PersonalGitHubStats />
    },
    {
      id: 'personal-weather',
      size: '1x1',
      component: <Weather />
    },
    {
      id: 'personal-tasks',
      size: '2x1',
      component: <Tasks />
    },
    {
      id: 'personal-notes',
      size: '1x1',
      component: <Notes />
    }
  ];
}
