import * as React from "react";
import { useState } from 'react';
import Header from "@site/static/img/header.svg";
import Header2 from "@site/static/img/header2.svg";

const icons = [
  { id: 1, name: 'globe', svg: <Header /> },
  { id: 2, name: 'globe2', svg: <Header2 /> },
];

const IllustrationItem = ({ name, className }) => {
    const selectedPath = icons.find(illustration => illustration.name === name).svg;
    return (
      <>
        {selectedPath}
      </>
    );
};

const Illustrations = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredIcons = icons.filter(illustration => 
      illustration.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Search icons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-[var(--ifm-heading-color)] text-lg p-4 rounded border-none focus:outline-none bg-[var(--ifm-background-color-subtle)] focus:ring focus:ring-[var(--ifm-color-primary)]"
        />
        {filteredIcons.length === 0 && 
        <div className="flex flex-col gap-3 justify-center items-center h-96">
          <IllustrationItem name="globe"/>
          <div>No icons found</div>
        </div>
        }
        {filteredIcons.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {filteredIcons.map(icon => (
              <div key={icon.id} className="flex flex-col gap-2 items-center">
                <div className="flex justify-center items-center p-6 rounded bg-[var(--ifm-background-color-subtle)] w-full">
                    <IllustrationItem name={icon.name} />
                </div>
                <p>{icon.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default Illustrations;