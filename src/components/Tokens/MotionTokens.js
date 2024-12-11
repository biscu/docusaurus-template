import React, { useState } from 'react';

const AnimatedBox = ({ duration, easing, isPlaying }) => (
  <div className="overflow-hidden relative w-[400px] h-16 bg-gray-100 rounded-lg">
    <div 
      className={`h-full w-16 bg-blue-500 rounded-lg transform ${isPlaying ? 'translate-x-[300px]' : ''}`}
      style={{ 
        transition: `transform ${duration}ms ${easing}`,
        transitionDelay: '0ms'
      }}
    />
  </div>
);

const MotionCard = ({ name, duration, easing, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), duration + 100);
  };

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-sm font-medium text-gray-600">{name}</h4>
          <span className="block font-mono text-xs text-gray-500">
            {duration}ms • {easing}
          </span>
          <span className="block mt-1 text-sm text-gray-500">
            {description}
          </span>
        </div>
        <button 
          onClick={handlePlay}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg transition-colors hover:bg-blue-600"
        >
          Play
        </button>
      </div>
      <AnimatedBox duration={duration} easing={easing} isPlaying={isPlaying} />
    </div>
  );
};

const MotionRow = ({ title, items }) => (
  <div className="flex flex-col gap-8">
    <h3 className="m-0 text-xl font-semibold">{title}</h3>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {items.map((item) => (
        <MotionCard key={item.name} {...item} />
      ))}
    </div>
  </div>
);

const MotionTokens = () => {
  const durations = [
    
    {
      name: 'Duration-100',
      duration: 100,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Quick micro-interactions, like button hover states'
    },
    {
      name: 'Duration-200',
      duration: 200,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Simple transitions, like color changes'
    },
    {
      name: 'Duration-300',
      duration: 300,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Complex transitions, like sliding panels'
    },
    {
      name: 'Duration-500',
      duration: 500,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Large transitions, like full page animations'
    }
  ];

  const easings = [
    {
      name: 'Ease-Linear',
      duration: 300,
      easing: 'linear',
      description: 'Constant speed from start to end'
    },
    {
      name: 'Ease-In',
      duration: 300,
      easing: 'cubic-bezier(0.4, 0, 1, 1)',
      description: 'Start slow, end fast'
    },
    {
      name: 'Ease-Out',
      duration: 300,
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Start fast, end slow'
    },
    {
      name: 'Ease-In-Out',
      duration: 300,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Start and end slow, fast in the middle'
    }
  ];

  return (
    <div className="flex flex-col gap-16">
      <MotionRow title="Duration" items={durations} />
      <MotionRow title="Easing" items={easings} />
    </div>
  );
};

export default MotionTokens;
