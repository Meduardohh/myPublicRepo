

const initialConfig = (config) => {
    if (!config.initialSpeed) throw new Error("No initial speed in config");
    if (!config.position) throw new Error("No position in config");
    console.log(
      `Sebesség: ${config.initialSpeed} x,y coordinák: ${config.position.x}, ${config.position.y}`
    );
  };


  export{initialConfig}