const Pair = (props) => {
  // const theClass = "easy";
  return props.data.map((e,i) => {
    return e % 2 == 0 ? <div key={`thisKey_${i}`} className={props.className}>{e}</div> : e;
  });
};

export default Pair;
