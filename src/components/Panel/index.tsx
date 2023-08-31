import * as React from "react";

interface PanelProps {
  caption?: string;
  children: React.ReactNode;
}

function Panel({ caption, children }: PanelProps) {
  return (
    <div className='panel'>
      {caption && <div className='caption'>{caption}</div>}
      {children}
    </div>
  );
}

export default Panel;
