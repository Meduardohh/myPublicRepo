const DataSheet = (props) => {
  return (
    <>
      <div>ID:{props.data.id}</div>
      <div>Name:{props.data.name}</div>
      <div>Species:{props.data.species}</div>
      <div>Age:{props.data.age}</div>
      {props.data.pedigree && <div>Pedigree:{props.data.pedigree? "has":"hasn't"}</div>}
      {props.data.other && <div>other:{props.data.other}</div>}
      <img src={process.env.PUBLIC_URL+props.data.img} alt="asd"/>
    </>
  );
};

export default DataSheet;
