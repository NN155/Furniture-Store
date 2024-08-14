import React from 'react';

export function SectionTitle({ children }) {
  return (
    <div className="d-inline-block">
      <h2 className="gold-underlined fw-600 fz-30 color-black ff-montserrat text-uppercase">
        {children}
      </h2>
    </div>
  );
}