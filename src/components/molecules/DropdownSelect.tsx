'use client'

import { useState, useEffect } from "react";

interface DropdownSelectProps {
  label?: string;
  items?: string[];
  onItemSelect?: (item: string) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  label = "Select Item",
  items = [],
  onItemSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownItems, setDropdownItems] = useState<string[]>(items);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    setDropdownItems(items); // aggiorna se items cambia da fuori
  }, [items]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleItemSelect = (item: string) => {
    setSelectedItem(item);
    onItemSelect?.(item);
    setIsOpen(false);
  };

  return (
    <div className=" flex flex-col items-center justify-center p-4">
      <div className="w-full relative inline-block text-left">
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex  justify-end w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none "
        >
          {selectedItem || label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 min-w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <div className="py-2 p-2" role="menu" aria-orientation="vertical">
              {dropdownItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemSelect(item)}
                  className={`block w-full text-left px-4 py-2 mb-1 text-sm rounded-md hover:bg-gray-100 ${
                    item === selectedItem
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "text-gray-700 bg-white"
                  }`}
                  role="menuitem"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownSelect;
