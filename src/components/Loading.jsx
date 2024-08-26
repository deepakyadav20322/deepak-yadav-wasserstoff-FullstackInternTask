import React from 'react';

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[24rem] mt-8">
      <div className="w-12 h-12 border-4 border-t-4 border-white border-opacity-50 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;
