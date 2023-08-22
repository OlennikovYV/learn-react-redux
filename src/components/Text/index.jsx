function Text(props) {
  const { text } = props;
  return (
    <div className='text'>
      <span>{text}</span>
    </div>
  );
}

export default Text;
