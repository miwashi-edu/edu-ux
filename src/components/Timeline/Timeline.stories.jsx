import React from 'react';
import { Timeline } from './Timeline';

export default {
  title: 'Data Display/Timeline',
  component: Timeline,
};

const sampleEvents = [
  {
    time: '09:00',
    title: 'Project Kickoff',
    description: 'Initial meeting with the team and stakeholders.'
  },
  {
    time: '10:30',
    title: 'Design Review',
    description: 'Review wireframes and design mockups.'
  },
  {
    time: '13:00',
    title: 'Development Start',
    description: 'Begin implementation of core features.'
  },
  {
    time: '16:00',
    title: 'Testing',
    description: 'Run unit and integration tests.'
  },
  {
    time: '17:30',
    title: 'Deployment',
    description: 'Deploy to staging environment.'
  }
];

export const Default = {
  render: () => <Timeline events={sampleEvents} />,
};

export const Empty = {
  render: () => <Timeline events={[]} />,
};

export const Dense = {
  render: () => (
    <Timeline
      events={[
        { time: '08:00', title: 'Breakfast', description: 'Start the day with a healthy meal.' },
        { time: '08:30', title: 'Emails', description: 'Check and respond to emails.' },
        { time: '09:00', title: 'Standup', description: 'Daily team standup meeting.' },
        { time: '09:30', title: 'Code Review', description: 'Review pull requests.' },
        { time: '10:00', title: 'Feature Work', description: 'Work on new features.' },
        { time: '12:00', title: 'Lunch', description: 'Take a break and eat.' },
        { time: '13:00', title: 'Client Call', description: 'Discuss requirements with client.' },
        { time: '14:00', title: 'Bug Fixes', description: 'Fix reported issues.' },
        { time: '15:30', title: 'Documentation', description: 'Update project docs.' },
        { time: '17:00', title: 'Wrap Up', description: 'Summarize the day.' },
      ]}
    />
  ),
};

export const WithIconsAndColors = {
  render: () => (
    <Timeline
      events={[
        { time: '08:00', title: 'Start', description: 'Project started', icon: '🚀', color: '#10b981' },
        { time: '09:00', title: 'In Progress', description: 'Work in progress', icon: '🔧', color: '#3b82f6' },
        { time: '12:00', title: 'Review', description: 'Code review', icon: '🔍', color: '#f59e0b' },
        { time: '15:00', title: 'Blocked', description: 'Issue found', icon: '⛔', color: '#ef4444' },
        { time: '17:00', title: 'Done', description: 'Project completed', icon: '✅', color: '#6366f1' },
      ]}
    />
  ),
};

export const Horizontal = {
  render: () => (
    <Timeline
      mode="horizontal"
      events={[
        { time: 'Phase 1', title: 'Design', description: 'Design phase', icon: '🎨', color: '#3b82f6' },
        { time: 'Phase 2', title: 'Development', description: 'Development phase', icon: '💻', color: '#10b981' },
        { time: 'Phase 3', title: 'Testing', description: 'Testing phase', icon: '🧪', color: '#f59e0b' },
        { time: 'Phase 4', title: 'Launch', description: 'Launch phase', icon: '🚀', color: '#ef4444' },
      ]}
    />
  ),
};
