import React from 'react';

const ColorCard = ({ color, name }) => (
  <div 
    className="flex flex-col gap-1 justify-end p-3 py-6 w-full rounded-lg min-h-16"
    style={{ backgroundColor: color }}
  >
    {/* <span className="text-sm font-medium text-gray-700">{name}</span> */}
  </div>
);

const ColorRow = ({ title, colors }) => (
  <div className="flex flex-col gap-4">
    <h3 className="m-0 text-xl font-semibold">{title}</h3>
    <div className="flex flex-row gap-2">
      {Object.entries(colors).map(([name, color]) => (
        <ColorCard key={name} color={color} name={name} />
      ))}
    </div>
  </div>
);

const ColorTokens = () => {
  const neutralColors = {
    'neutral-50': '#fafafa',
    'neutral-100': '#f5f5f5',
    'neutral-200': '#e5e5e5',
    'neutral-300': '#d4d4d4',
    'neutral-400': '#a3a3a3',
    'neutral-500': '#737373',
    'neutral-600': '#525252',
    'neutral-700': '#404040',
    'neutral-800': '#262626',
    'neutral-900': '#171717',
  };

  const blueColors = {
    'blue-50': '#eff6ff',
    'blue-100': '#dbeafe',
    'blue-200': '#bfdbfe',
    'blue-300': '#93c5fd',
    'blue-400': '#60a5fa',
    'blue-500': '#3b82f6',
    'blue-600': '#2563eb',
    'blue-700': '#1d4ed8',
    'blue-800': '#1e40af',
    'blue-900': '#1e3a8a',
  };

  const redColors = {
    'red-50': '#fef2f2',
    'red-100': '#fee2e2',
    'red-200': '#fecaca',
    'red-300': '#fca5a5',
    'red-400': '#f87171',
    'red-500': '#ef4444',
    'red-600': '#dc2626',
    'red-700': '#b91c1c',
    'red-800': '#991b1b',
    'red-900': '#7f1d1d',
  };

  const greenColors = {
    'green-50': '#f0fdf4',
    'green-100': '#dcfce7',
    'green-200': '#bbf7d0',
    'green-300': '#86efac',
    'green-400': '#4ade80',
    'green-500': '#22c55e',
    'green-600': '#16a34a',
    'green-700': '#15803d',
    'green-800': '#166534',
    'green-900': '#14532d',
  };

  return (
    <div className="flex flex-col gap-8">
      <ColorRow title="Neutral" colors={neutralColors} />
      <ColorRow title="Blue" colors={blueColors} />
      <ColorRow title="Red" colors={redColors} />
      <ColorRow title="Green" colors={greenColors} />
    </div>
  );
};

export default ColorTokens;