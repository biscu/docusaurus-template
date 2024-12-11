import * as React from "react";
import { useState } from 'react';
import { name } from '../../../node_modules/estree-util-is-identifier-name/lib/index';

const icons = [
  { id: 1, name: 'globe', path: "M4.252 10a8.047 8.047 0 0 0 0 4h3.166a13.8 13.8 0 0 1 0-4H4.252Zm.818-2h2.795a13.6 13.6 0 0 1 1.719-3.629A8.02 8.02 0 0 0 5.07 8ZM12 4.48A11.7 11.7 0 0 0 9.972 8h4.056A11.7 11.7 0 0 0 12 4.48ZM14.557 10H9.443a11.8 11.8 0 0 0 0 4h5.114a11.802 11.802 0 0 0 0-4Zm2.025 4a13.797 13.797 0 0 0 0-4h3.166A8 8 0 0 1 20 12a8 8 0 0 1-.252 2h-3.166Zm-2.554 2H9.972A11.7 11.7 0 0 0 12 19.52 11.7 11.7 0 0 0 14.028 16Zm-4.444 3.629A13.6 13.6 0 0 1 7.864 16H5.07a8.02 8.02 0 0 0 4.514 3.629Zm4.832 0A13.6 13.6 0 0 0 16.136 16h2.794a8.02 8.02 0 0 1-4.514 3.629ZM18.93 8h-2.795a13.601 13.601 0 0 0-1.719-3.629A8.02 8.02 0 0 1 18.93 8ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"},
  { id: 2, name: 'user', path: "M7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM12 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM4.928 20.372a1 1 0 0 1-1.856-.743l.883.353c-.295-.116-.59-.233-.883-.353v-.003l.001-.002.003-.007.008-.018a8.305 8.305 0 0 1 .464-.895c.315-.523.8-1.217 1.495-1.911C6.444 15.39 8.688 14 12 14s5.556 1.391 6.957 2.793a9.998 9.998 0 0 1 1.494 1.911 8.025 8.025 0 0 1 .465.895l.008.018.003.007.001.004a1.003 1.003 0 0 1-.564 1.282 1 1 0 0 1-1.292-.537v.001l.001.001-.001-.002a6.027 6.027 0 0 0-.336-.64 8.002 8.002 0 0 0-1.193-1.526C16.444 17.11 14.688 16 12 16s-4.444 1.109-5.543 2.207c-.458.459-.859.97-1.193 1.526-.125.206-.237.42-.336.639Z"},
  { id: 3, name: 'star', path: "M7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM12 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM4.928 20.372a1 1 0 0 1-1.856-.743l.883.353c-.295-.116-.59-.233-.883-.353v-.003l.001-.002.003-.007.008-.018a8.305 8.305 0 0 1 .464-.895c.315-.523.8-1.217 1.495-1.911C6.444 15.39 8.688 14 12 14s5.556 1.391 6.957 2.793a9.998 9.998 0 0 1 1.494 1.911 8.025 8.025 0 0 1 .465.895l.008.018.003.007.001.004a1.003 1.003 0 0 1-.564 1.282 1 1 0 0 1-1.292-.537v.001l.001.001-.001-.002a6.027 6.027 0 0 0-.336-.64 8.002 8.002 0 0 0-1.193-1.526C16.444 17.11 14.688 16 12 16s-4.444 1.109-5.543 2.207c-.458.459-.859.97-1.193 1.526-.125.206-.237.42-.336.639Z"},
];

const IconItem = ({ name, className }) => {
    const selectedPath = icons.find(icon => icon.name === name).path;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24"
            className={className}
        >
            <path
                fill="currentColor"
                d={selectedPath}
                fillRule="evenodd"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};

const IconTokens = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredIcons = icons.filter(icon => 
      icon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Search icons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-[var(--ifm-heading-color)] text-lg p-4 bg-gray-100 rounded border-none focus:outline-none dark:bg-slate-900 focus:ring focus:ring-[var(--ifm-color-primary)]"
        />
        {filteredIcons.length === 0 && 
        <div className="flex flex-col gap-3 justify-center items-center h-96">
          <IconItem name="globe"/>
          <div>No icons found</div>
        </div>
        }
        {filteredIcons.length > 0 && (
          <div className="flex flex-row gap-3">
            {filteredIcons.map(icon => (
              <div key={icon.id} className="flex flex-col gap-2 items-center">
                <div className="flex justify-center items-center p-6 bg-gray-100 rounded dark:bg-slate-900">
                    <IconItem name={icon.name} />
                </div>
                <p>{icon.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default IconTokens;