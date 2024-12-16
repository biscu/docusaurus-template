import * as React from "react";
import { useState } from 'react';
import Globe from "@site/static/img/icons/globe.svg";
import User from "@site/static/img/icons/user.svg";
import Cart from "@site/static/img/icons/cart.svg";

const icons = [
  { id: 1, name: 'globe', svg: <Globe /> },
  { id: 2, name: 'cart', svg: <Cart /> },
  { id: 3, name: 'user', svg: <User /> },
];

const IconItem = ({ name, className }) => {
    const selectedSvg = icons.find(icon => icon.name === name).svg;
    return (
        <>
            {selectedSvg}
        </>
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
          className="text-[var(--ifm-heading-color)] text-lg p-4 rounded border-none focus:outline-none bg-[var(--ifm-background-color-subtle)] focus:ring focus:ring-[var(--ifm-color-primary)]"
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
                <div className="flex justify-center items-center p-6 rounded bg-[var(--ifm-background-color-subtle)]">
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