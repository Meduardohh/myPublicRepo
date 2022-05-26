const Placing = (props) => {
  return (
    <div>
      {props.data.map((e, i) => {
        return i < 3 ? <div key={`id-${i}`}>{`${i+1}.helyezés: ${e}`}</div>: e;
      })}
    </div>
  );
};

export default Placing;
