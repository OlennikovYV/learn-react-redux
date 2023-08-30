import * as React from "react";

interface TextProps {
  text: string;
}

function Text({ text }: TextProps) {
  return (
    <div className='text'>
      <span>{text}</span>
    </div>
  );
}

export default Text;
