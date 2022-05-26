const PicComponent = (props) => {
  return (
    <>
      <div className="image-container">
        <div class="image">
          <img src="https://placekitten.com/200/200" />
        </div>
        <div class="image-label">{props.component}</div>
      </div>
    </>
  );
};

export default PicComponent;
