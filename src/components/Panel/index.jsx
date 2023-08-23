function Panel({ caption, children }) {
  return (
    <div className='panel'>
      {caption && <div className='caption'>{caption}</div>}
      {children}
    </div>
  );
}

export default Panel;
