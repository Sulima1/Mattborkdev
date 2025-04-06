import React, { useState } from 'react';

const Collapsible = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="card">
        <div>
          <div className="border-bottom d-flex justify-content-between">
          <button type="button" className="btn" onClick={handleFilterOpening}>
            <h6 className="text-2xl font-bold text-[#D2931B]">{title}</h6>
            </button>
          </div>
        </div>

        <div className="border-bottom">
          <div>{isOpen && <div className="p-3">{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;