import React from 'react';

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onToggle}
        className="bg-neutral-800 px-4 py-2 rounded-full focus:outline-none text-gray-200 hover:bg-neutral-900 transition-colors duration-150 border-[1px] border-gray-500"
      >
        {/*Add a conditional statement to toggle the button text based on the unit value */}
        {unit === 'metric' ? 'Switch to °F' : 'Switch to °C'}
      </button>
    </div>
  );
};

export default UnitToggle;
