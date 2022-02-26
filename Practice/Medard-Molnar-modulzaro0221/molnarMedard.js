//1 feladat

{
  const category = "Fajatek";
  const product = "Jenga Classic";

  console.log(`A ${category} kategóriában a ${product} játék megtalálható`);
}
//2. feladat
{
  const log = (logThis) => {
    console.log(logThis);
  };
  log("eztirdki");
}
//3.feladat

{
  const logTermek = (category, product) => {
    console.log(`A ${category} kategóriában a ${product} játék megtalálható`);
  };
}

//4. feladat
{
  const docking = (...params) => {
    //   for (let i = 0; i < params.length; ++i) {
    //     console.log(`${params[i]} dokkolt`);
    //   }
    //ez számít nem ciklusnak??
    params.forEach((param) => {
      console.log(`${param}dokkolt`);
    });
  };

  docking("Tie fighter 1", "Tie fighter 2", "X-Wing 1");
}

//5. feladat
{
  const planets = ["Mars", "Vénusz"];
  console.log("Föld", ...planets);

  //6. feladat

  const ships = [
    "Millenium Falcon",
    "J-Type Star",
    "Jedi Starfighters",
    "A-Wing",
  ];

  let [topSpeed1, topSpeed2, topSpeed3] = ships;

  console.log(topSpeed1, topSpeed2, topSpeed3);
}

//7.feladat
{
  const deathStarMainFrameConfigarationSystemConfig = {
    position: { x: 123.53, y: 324.2, z: 591.1 },
    initialSpeed: 10000,
    robotPilot: true,
    capacity: 5000,
  };

  const { position, initialSpeed } =
    deathStarMainFrameConfigarationSystemConfig;
  console.log(
    `Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`
  );
}

//8.feladat

{
  const deathStarMainFrameConfigarationSystemConfig = {
    position: { x: 123.53, y: 324.2, z: 591.1 },
    initialSpeed: 10000,
    robotPilot: true,
    capacity: 5000,
  };

  const initialConfig = (config) => {
    console.log(
      `Sebesség: ${config.initialSpeed} x,y coordinák: ${config.position.x}, ${config.position.y}`
    );
  };

  initialConfig(deathStarMainFrameConfigarationSystemConfig);
}

///9.feladat
{
  const deathStarMainFrameConfigarationSystemConfig = {
    position: null,
    initialSpeed: null,
    robotPilot: true,
    capacity: 5000,
  };

  const initialConfig = (config) => {
    if (!config.initialSpeed) throw new Error("No initial speed in config");
    if (!config.position) throw new Error("No position in config");
    console.log(
      `Sebesség: ${config.initialSpeed} x,y coordinák: ${config.position.x}, ${config.position.y}`
    );
  };

  try {
    initialConfig(deathStarMainFrameConfigarationSystemConfig);
  } catch (e) {
    console.log(e.message);
  }
}

//10.feladat
{
  //Refer to :
  //entry.js
  //config.js
}

//11.feladat
{
  //Refer to entry.js
}

//12.feladat
{
  let promise = new Promise((resolve, reject) => {
    resolve(42);
  });

  promise.then((value) => {
    console.log(value);
  });
}

//13.feladat
{
  //fogalmam sincs hogy itt ténylegesen mit szeretnél. Lehet csak én nem tudom értelmezni a feladatot. 

  function cargoShipArrive(resolve, reject) {
    setTimeout(() => {
      if (Math.floor(Math.random() * 2) == 1) {
        reject("Nincs rakomány"); // nincs rakomány
      }
      resolve(1); // 1 kg szemett beerkezett
    }, 500);
  }


  const promise=new Promise((cargoShipArrive()))
  .then(data=>console.log(data))

}

//14.feladat
{
  fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((response) => response.json())
    .then((data) =>
      console.log(`Name:${data.name}, Latin name:${data.latin_name}`)
    );
}
