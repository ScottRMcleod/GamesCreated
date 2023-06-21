      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      let isCreatingLevel = false;
      let isPlaying = false;
      let objectsToPlace = [];
      let player;
      let spheres = [];
       let score = 0;
      const scoreElement = document.getElementById('score');

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00FF00, opacity: 0.6, transparent: false });
      const cube = new THREE.Mesh(geometry, material);
      //scene.add(cube);

      const groundGeometry = new THREE.PlaneGeometry(10, 10);
      const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00, opacity: 0.4, transparent: true, side: THREE.DoubleSide });
      const ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = Math.PI / 2;
      ground.position.y = -0.5;
      scene.add(ground);

      const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff, opacity: 0.9, transparent: true });

      const controls = new THREE.OrbitControls(camera, renderer.domElement);

      function createLevel() {
        isCreatingLevel = true;
        isPlaying = false;
        objectsToPlace = [];

        const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
        const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        cylinder.position.set(-2, 0.5, 0);
        objectsToPlace.push(cylinder);
        scene.add(cylinder);

        const pyramidGeometry = new THREE.ConeGeometry(0.5, 1, 4);
        const pyramidMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
        pyramid.position.set(2, 0.5, 0);
        objectsToPlace.push(pyramid);
        scene.add(pyramid);
    	
	const enemyGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    	const enemyMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
    	const enemy = new THREE.Mesh(enemyGeometry, enemyMaterial);
    	enemy.position.set(0, 0.4, 2);
    	objectsToPlace.push(enemy);
    	scene.add(enemy);
  }
// this is the begining of the shape section of the app 
function createCube()
{
  const enemyGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    	const enemyMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
    	const enemy = new THREE.Mesh(enemyGeometry, enemyMaterial);
    	enemy.position.set(0, 0.4, 2);
    	objectsToPlace.push(enemy);
    	scene.add(enemy);
}
  function createPyramid(){
  const pyramidGeometry = new THREE.ConeGeometry(0.5, 1, 4);
  const pyramidMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
  pyramid.position.set(2, 0.5, 0);
  objectsToPlace.push(pyramid);
  scene.add(pyramid);

}
  function createCylindar(){
const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
        const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        cylinder.position.set(-2, 0.5, 0);
        objectsToPlace.push(cylinder);
        scene.add(cylinder);
}
function CreateTorso()
{
   // Create a torus
      const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
      const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torus.position.y = 1;
      scene.add(torus);
}
function CreateSphere()
{
     const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.x = -2;
      scene.add(sphere);
}
function car()
{
      // Create the car shape
      const carGroup = new THREE.Group();

      // Body (Box)
      const bodyGeometry = new THREE.BoxGeometry(2, 1, 0.5);
      const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      carGroup.add(body);
      body.rotation.x = Math.PI / -2;

      // Front (Pointy)
      const frontGeometry = new THREE.ConeGeometry(0.5, 0.5, 16);
      const frontMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const front = new THREE.Mesh(frontGeometry, frontMaterial);
      front.position.set(1, 0, 0);
      carGroup.add(front);
      front.rotation.y = Math.PI / -2;
      
      // front Wheel (Cylinder)
      const frontWheelGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.35, 16);
      const frontWheelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const frontWheel = new THREE.Mesh(frontWheelGeometry, frontWheelMaterial);
      frontWheel.position.set(-1, -0.5, -0.5);
      frontWheel.scale.set(1.0, 1.0, 1.0); // Larger rear wheel size
      carGroup.add(frontWheel);
      frontWheel.rotation.x = Math.PI / 2;

      // front Wheel (Cylinder)
      const frontWheelGeometry2 = new THREE.CylinderGeometry(0.35, 0.35, 0.35, 16);
      const frontWheelMaterial2 = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const frontWheel2 = new THREE.Mesh(frontWheelGeometry2, frontWheelMaterial2);
      frontWheel2.position.set(-1, -0.5, 0.5);
      frontWheel2.scale.set(1.0, 1.0, 1.0); // Larger rear wheel size
      carGroup.add(frontWheel2);
      frontWheel2.rotation.x = Math.PI / 2;

      // Rear Wheel (Cylinder)
      const rearWheelGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.35, 16);
      const rearWheelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const rearWheel = new THREE.Mesh(rearWheelGeometry, rearWheelMaterial);
      rearWheel.position.set(1, -0.5, -0.5);
      rearWheel.scale.set(1.2, 1.2, 1.2); // Larger rear wheel size
      carGroup.add(rearWheel);
      rearWheel.rotation.x = Math.PI / 2;

      // Rear Wheel (Cylinder)
      const rearWheelGeometry2 = new THREE.CylinderGeometry(0.35, 0.35, 0.35, 16);
      const rearWheelMaterial2 = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const rearWheel2 = new THREE.Mesh(rearWheelGeometry, rearWheelMaterial);
      rearWheel2.position.set(1, -0.5, 0.5);
      rearWheel2.scale.set(1.2, 1.2, 1.2); // Larger rear wheel size
      carGroup.add(rearWheel2);
      rearWheel2.rotation.x = Math.PI / 2;

      // Spoiler (Box)
      const spoilerGeometry = new THREE.BoxGeometry(1.8, 0.2, 0.3);
      const spoilerMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const spoiler = new THREE.Mesh(spoilerGeometry, spoilerMaterial);
      spoiler.position.set(-1, 0.5, -0.25);
      carGroup.add(spoiler);
      scene.add(carGroup);
}
function CarRacers()
{
// Define car colors
      const carColors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff,0x800080, 0xffa500, 0xADD8E6];

      // Create racing cars
      const carCount = carColors.length;
      const carSpacing = 5;
      const carGroup = new THREE.Group();

      for (let i = 0; i < carCount; i++) {
        const car = new THREE.Group();

        // Car body (Box)
        const bodyGeometry = new THREE.BoxGeometry(2, 1, 0.5);
        const bodyMaterial = new THREE.MeshBasicMaterial({ color: carColors[i] });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.rotation.x = Math.PI / -2;
        car.add(body);

        // Car front (Pointy)
        const frontGeometry = new THREE.ConeGeometry(0.5, 0.5, 16);
        const frontMaterial = new THREE.MeshBasicMaterial({ color: carColors[i] });
        const front = new THREE.Mesh(frontGeometry, frontMaterial);
        front.position.set(1, 0, 0);
        front.rotation.y = Math.PI / -2;
        car.add(front);

        // Front wheels (Cylinders)
        const frontWheelGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.35, 16);
        const frontWheelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const frontWheel1 = new THREE.Mesh(frontWheelGeometry, frontWheelMaterial);
        frontWheel1.position.set(-1, -0.5, -0.5);
        frontWheel1.scale.set(1.0, 1.0, 1.0); // Larger rear wheel size
        frontWheel1.rotation.x = Math.PI / 2;
        car.add(frontWheel1);

        const frontWheel2 = new THREE.Mesh(frontWheelGeometry, frontWheelMaterial);
        frontWheel2.position.set(-1, -0.5, 0.5);
        frontWheel2.scale.set(1.0, 1.0, 1.0); // Larger rear wheel size
        frontWheel2.rotation.x = Math.PI / 2;
        car.add(frontWheel2);

        // Car rear wheels (Cylinders)
        const rearWheelGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.35, 16);
        const rearWheelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const rearWheel1 = new THREE.Mesh(rearWheelGeometry, rearWheelMaterial);
        rearWheel1.position.set(1, -0.5, -0.5);
        rearWheel1.scale.set(1.2, 1.2, 1.2); // Larger rear wheel size
        rearWheel1.rotation.x = Math.PI / 2;
        car.add(rearWheel1);

        const rearWheel2 = new THREE.Mesh(rearWheelGeometry, rearWheelMaterial);
        rearWheel2.position.set(1, -0.5, 0.5);
        rearWheel2.scale.set(1.2, 1.2, 1.2); // Larger rear wheel size
        rearWheel2.rotation.x = Math.PI / 2;
        car.add(rearWheel2);

        // Car spoiler (Box)
        const spoilerGeometry = new THREE.BoxGeometry(1.8, 0.2, 0.3);
        const spoilerMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const spoiler = new THREE.Mesh(spoilerGeometry, spoilerMaterial);
        spoiler.position.set(-1, 0.5, -0.25);
        car.add(spoiler);

        // Position the car
        car.position.x = (i % 5 - 2) * carSpacing;
        car.position.z = Math.floor(i / 5) * carSpacing;
        carGroup.add(car);
      }
      scene.add(carGroup);
}
function createSpaceShip()
{
    // Create the UFO
    var ufo = new THREE.Group();

    // Bottom part of the UFO
    var bottomGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32, 1, false);
    var bottomMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    var bottom = new THREE.Mesh(bottomGeometry, bottomMaterial);
    bottom.rotation.y = Math.PI / 2;
    ufo.add(bottom);

    // Top part of the UFO
    var topGeometry = new THREE.SphereGeometry(0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    var topMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, opacity: 0.4, transparent: true, });
    var top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 0;
    ufo.add(top);

    // Light source for better shading
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 1);
    scene.add(light);

    scene.add(ufo);
}

function ufoAttack()
{
  // Define UFO colors
const ufoColors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff,0x800080, 0xffa500, 0xADD8E6];

// Create UFOs
const ufoCount = ufoColors.length;
const ufoSpacing = 5;
const ufoGroup = new THREE.Group();

for (let i = 0; i < ufoCount; i++) {
  const ufo = new THREE.Group();

  // Bottom part of the UFO
  const bottomGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32, 1, false);
  const bottomMaterial = new THREE.MeshBasicMaterial({ color: ufoColors[i] });
  const bottom = new THREE.Mesh(bottomGeometry, bottomMaterial);
  bottom.rotation.y = Math.PI / 2;
  ufo.add(bottom);

  // Top part of the UFO
  const topGeometry = new THREE.SphereGeometry(0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
  const topMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, opacity: 0.4, transparent: true });
  const top = new THREE.Mesh(topGeometry, topMaterial);
  top.position.y = 0;
  ufo.add(top);

  // Position the UFO
  ufo.position.x = (i % 5 - 2) * ufoSpacing;
  ufo.position.z = Math.floor(i / 5) * ufoSpacing;

  ufoGroup.add(ufo);
}
scene.add(ufoGroup);
}
function createMountainTerrain() {
  const width = 10;
  const depth = 10;
  const height = 2;
  const segments = 100;
  const smoothness = 1;

  const terrainGroup = new THREE.Group();

  const terrainGeometry = new THREE.BoxGeometry(width, height, depth, segments, segments, segments);
  const noise = new THREE.SimplexNoise();
  const noiseScale = 0.1;

  // Displace vertices along the y-axis using noise
  for (let i = 0; i < terrainGeometry.vertices.length; i++) {
    const vertex = terrainGeometry.vertices[i];
    const noiseValue = noise.noise3D(vertex.x * noiseScale, vertex.y * noiseScale, vertex.z * noiseScale);
    vertex.y += noiseValue * smoothness;
  }

  terrainGeometry.computeVertexNormals();
  const terrainMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, wireframe: false });
  const terrainMesh = new THREE.Mesh(terrainGeometry, terrainMaterial);
  terrainGroup.add(terrainMesh);

  scene.add(terrainGroup);
}
function createKing()
{
    // Create the king geometry
    var kingGroup = new THREE.Group();

    // Base of the king
    var baseGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32);
    var baseMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var base = new THREE.Mesh(baseGeometry, baseMaterial);
    kingGroup.add(base);

    // Middle section of the king
    var middleGeometry = new THREE.CylinderGeometry(0.5, 0.4, 0.8, 32);
    var middleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var middle = new THREE.Mesh(middleGeometry, middleMaterial);
    middle.position.y = 0.6;
    kingGroup.add(middle);

    // Top section of the king
    var topGeometry = new THREE.ConeGeometry(0.6, 0.6, 32);
    var topMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 1.2;
    kingGroup.add(top);

    // Cross on top of the king
    var crossGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 32);
    var crossMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    var cross = new THREE.Mesh(crossGeometry, crossMaterial);
    cross.position.y = 1.5;
    kingGroup.add(cross);

    scene.add(kingGroup);
}
function createQueen()
{
    // Create the queen geometry
    var queenGroup = new THREE.Group();

    // Base of the queen
    var baseGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    var baseMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var base = new THREE.Mesh(baseGeometry, baseMaterial);
    queenGroup.add(base);

    // Middle section of the queen
    var middleGeometry = new THREE.CylinderGeometry(0.4, 0.6, 0.8, 32);
    var middleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var middle = new THREE.Mesh(middleGeometry, middleMaterial);
    middle.position.y = 0.6;
    queenGroup.add(middle);

    // Top section of the queen
    var topGeometry = new THREE.ConeGeometry(0.4, 0.6, 32);
    var topMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 1.2;
    queenGroup.add(top);

    // Crown of the queen
    var crownGeometry = new THREE.CylinderGeometry(0.6, 0.4, 0.4, 32);
    var crownMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    var crown = new THREE.Mesh(crownGeometry, crownMaterial);
    crown.position.y = 1.4;
    queenGroup.add(crown);

    scene.add(queenGroup);
}
function createHorse()
{

    // Create the horse geometry
    var horseGroup = new THREE.Group();

    // Body of the horse
    var bodyGeometry = new THREE.CylinderGeometry(0.4, 0.6, 1, 32);
    var bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    horseGroup.add(body);

    // Head of the horse
    var headGeometry = new THREE.ConeGeometry(0.4, 0.6, 32);
    var headMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 0.9;
    horseGroup.add(head);

    scene.add(horseGroup);
}
function createBisip()
{
    // Create the bishop geometry
    var bishopGroup = new THREE.Group();

    // Base of the bishop
    var baseGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    var baseMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var base = new THREE.Mesh(baseGeometry, baseMaterial);
    bishopGroup.add(base);

    // Middle section of the bishop
    var middleGeometry = new THREE.CylinderGeometry(0.3, 0.4, 0.4, 32);
    var middleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var middle = new THREE.Mesh(middleGeometry, middleMaterial);
    middle.position.y = 0.3;
    bishopGroup.add(middle);

    // Top section of the bishop
    var topGeometry = new THREE.ConeGeometry(0.4, 0.5, 32);
    var topMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 0.7;
    bishopGroup.add(top);

    scene.add(bishopGroup);
}
function createRooke()
{
    // Create the rook geometry
    var rookGroup = new THREE.Group();

    // Base of the rook
    var baseGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    var baseMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var base = new THREE.Mesh(baseGeometry, baseMaterial);
    rookGroup.add(base);

    // Middle section of the rook
    var middleGeometry = new THREE.CylinderGeometry(0.3, 0.4, 0.4, 32);
    var middleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var middle = new THREE.Mesh(middleGeometry, middleMaterial);
    middle.position.y = 0.3;
    rookGroup.add(middle);

    // Top section of the rook
    var topGeometry = new THREE.CylinderGeometry(0.4, 0.5, 0.4, 32);
    var topMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 0.7;
    rookGroup.add(top);

    scene.add(rookGroup);
}
function createPawn()
{
 // Create the pawn geometry
    var pawnGroup = new THREE.Group();

    // Base of the pawn
    var baseGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    var baseMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var base = new THREE.Mesh(baseGeometry, baseMaterial);
    pawnGroup.add(base);

    // Head of the pawn
    var headGeometry = new THREE.ConeGeometry(0.4, 0.6, 32);
    var headMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 0.4;
    pawnGroup.add(head);
    scene.add(pawnGroup);
}
// Create the pirate ship
function createPirateShip() {
  // Create the ship hull
//  var hullGeometry = new THREE.BoxGeometry(2, 0.5, 5);
 // var hullMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
  //var hull = new THREE.Mesh(hullGeometry, hullMaterial);
  //scene.add(hull);

 // Create the hull geometry
  var hullGeometry = new THREE.Geometry();
  hullGeometry.vertices.push(
    new THREE.Vector3(-10, 0, 0),  // Bottom left
    new THREE.Vector3(10, 0, 0),   // Bottom right
    new THREE.Vector3(0, 0, 25),   // Top
    new THREE.Vector3(0, 10, 0)     // Middle top
  );
  hullGeometry.faces.push(
    new THREE.Face3(0, 1, 2),
    new THREE.Face3(0, 2, 3),
    new THREE.Face3(1, 0, 3),
    new THREE.Face3(2, 1, 3)
  );
  hullGeometry.computeFaceNormals();

  // Create the hull material
  var hullMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });

  // Create the hull mesh
  var hull = new THREE.Mesh(hullGeometry, hullMaterial);
  scene.add(hull);

  // Create the ship mast
  var mastGeometry = new THREE.BoxGeometry(0.4, 4, 0.4);
  var mastMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
  var mast = new THREE.Mesh(mastGeometry, mastMaterial);
  mast.position.y = 25;
  scene.add(mast);

  // Create the sails
  var sailGeometry = new THREE.PlaneGeometry(2, 4);
  var sailMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
  var sailFront = new THREE.Mesh(sailGeometry, sailMaterial);
  sailFront.rotation.y = Math.PI / 2;
  sailFront.position.x = -10;
  sailFront.position.y = 25;
  sailFront.position.z = 23;
  scene.add(sailFront);

  var sailBack = new THREE.Mesh(sailGeometry, sailMaterial);
  sailBack.rotation.y = Math.PI / 2;
  sailBack.position.x = -10;
  sailBack.position.y = 25;
  sailBack.position.z = -23;
  scene.add(sailBack);

  // Create the flag
  var flagGeometry = new THREE.PlaneGeometry(1, 5);
  var flagMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  var flag = new THREE.Mesh(flagGeometry, flagMaterial);
  flag.position.x = -10;
  flag.position.y = 50;
  flag.position.z = 0;
  scene.add(flag);

  // Light source for better shading
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 1, 0);
  scene.add(light);
}
function createTea()
{
 // Create the teapot shape
      const teapotGroup = new THREE.Group();

      // Body (Sphere)
      const bodyGeometry = new THREE.SphereGeometry(1, 32, 32);
      const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      teapotGroup.add(body);

      // Handle (Cylinder)
      const handleGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 16);
      const handleMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const handle = new THREE.Mesh(handleGeometry, handleMaterial);
      handle.position.set(0, 0.7, 1);
      teapotGroup.add(handle);

         // Spout (Cylinder and Torus)
      const spoutGroup = new THREE.Group();

      // Upper part of the spout (Cylinder)
      const upperSpoutGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 16);
      const upperSpoutMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
      const upperSpout = new THREE.Mesh(upperSpoutGeometry, upperSpoutMaterial);
      spoutGroup.add(upperSpout);

      // Lower part of the spout (Cylinder)
      const lowerSpoutGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 16);
      const lowerSpoutMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
      const lowerSpout = new THREE.Mesh(lowerSpoutGeometry, lowerSpoutMaterial);
      lowerSpout.rotation.y = -1.25;
      spoutGroup.add(lowerSpout);

      // Bend the spout using a Group and apply rotation
      const spoutBendGroup = new THREE.Group();
      spoutBendGroup.rotation.z = Math.PI / 8; // 25 degrees in radians
      spoutBendGroup.add(spoutGroup);
      spoutBendGroup.position.set(1.5, 0, 0);
      teapotGroup.add(spoutBendGroup);

      // Lid (Torus)
      const lidGeometry = new THREE.TorusGeometry(0.8, 0.1, 16, 32);
      const lidMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const lid = new THREE.Mesh(lidGeometry, lidMaterial);
      lid.position.set(0, 1, 0);
      teapotGroup.add(lid);
      scene.add(teapotGroup);
}
function createTerrain() {
 
// Set up terrain shape
const terrainSize = 10;
const terrainShape = new THREE.Shape();
terrainShape.moveTo(-terrainSize / 2, -terrainSize / 2);
terrainShape.lineTo(-terrainSize / 2, terrainSize / 2);
terrainShape.lineTo(terrainSize / 2, terrainSize / 2);
terrainShape.lineTo(terrainSize / 2, -terrainSize / 2);
terrainShape.lineTo(-terrainSize / 2, -terrainSize / 2);

// Set up geometry from the shape
const terrainGeometry = new THREE.ShapeGeometry(terrainShape);
const terrainMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: false,
});
const terrainMesh = new THREE.Mesh(terrainGeometry, terrainMaterial);
terrainMesh.rotation.x = -Math.PI / 2;

// Generate terrain heights using Perlin noise
const simplex = new SimplexNoise();
const noiseScale = 5;

for (let i = 0; i < terrainGeometry.vertices.length; i++) {
  const vertex = terrainGeometry.vertices[i];
  const x = (vertex.x / terrainSize) * noiseScale;
  const y = (vertex.y / terrainSize) * noiseScale;
  const noiseValue = simplex.noise2D(x, y);
  vertex.z = noiseValue;
}
terrainGeometry.verticesNeedUpdate = true;

// Create a 3D object from terrain geometry
const terrainObject = new THREE.Object3D();
terrainObject.add(terrainMesh);
scene.add(terrainObject);
}
function Shipsout()
{
// Define ship colors
const shipColors = [0x8B4513, 0x2E8B57, 0x000080, 0x8B0000, 0x8B008B, 0x4682B4, 0xD2691E, 0xFFD700];

// Create pirate ships
const shipCount = shipColors.length;
const shipSpacing = 5;
const shipGroup = new THREE.Group();

for (let i = 0; i < shipCount; i++) {
  const ship = new THREE.Group();

  // Hull of the ship
  const hullGeometry = new THREE.CylinderGeometry(0.1, 0.5, 2, 16, 1, true);
  const hullMaterial = new THREE.MeshBasicMaterial({ color: shipColors[i] });
  const hull = new THREE.Mesh(hullGeometry, hullMaterial);
  hull.rotation.x = Math.PI / 2;
  ship.add(hull);

  // Hull of the ship
  const baseGeometry = new THREE.BoxGeometry(2, 1, 1);
  const baseMaterial = new THREE.MeshBasicMaterial({ color: shipColors[i] });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  ship.add(base);

  // Sails of the ship
  const sailGeometry = new THREE.PlaneGeometry(2, 2);
  const sailMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  const sail1 = new THREE.Mesh(sailGeometry, sailMaterial);
  sail1.position.set(0, 1, -0.5);
  sail1.rotation.y = Math.PI / 2;
  ship.add(sail1);

  const sail2 = new THREE.Mesh(sailGeometry, sailMaterial);
  sail2.position.set(0, 1, 0.5);
  sail2.rotation.y = Math.PI / 2;
  ship.add(sail2);

  // Position the ship
  ship.position.x = (i % 5 - 2) * shipSpacing;
  ship.position.z = Math.floor(i / 5) * shipSpacing;
  shipGroup.add(ship);
}
scene.add(shipGroup);
}
function createtresuer()
{
    // Create the main lid
    const radius = 2;
    const height = 1.5;
    const radialSegments = 32;
    const lidGeometry = new THREE.CylinderGeometry(radius, radius, height, radialSegments, 1, true, 0, Math.PI);
    const lidMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
    const lid = new THREE.Mesh(lidGeometry, lidMaterial);
    lid.rotation.x = -Math.PI / 4; // Opened position
    scene.add(lid);

    // Create the smaller half cylinder for the lid
    const smallerRadius = radius * 0.7;
    const smallerHeight = height * 0.5;
    const smallerGeometry = new THREE.CylinderGeometry(smallerRadius, smallerRadius, smallerHeight, radialSegments, 1, true, 0, Math.PI);
    const smallerLid = new THREE.Mesh(smallerGeometry, lidMaterial);
    smallerLid.rotation.x = -Math.PI / 4; // Opened position
    smallerLid.position.y = height * 0.25; // Adjust the position
    lid.add(smallerLid);

    // Create the main box
    const boxWidth = 4;
    const boxHeight = 1;
    const boxDepth = 2;
    const boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.y = -1.25;
    scene.add(box);

    // Create the smaller half box for the box
    const smallerBoxHeight = boxHeight * 0.5;
    const smallerBoxGeometry = new THREE.BoxGeometry(boxWidth, smallerBoxHeight, boxDepth);
    const smallerBox = new THREE.Mesh(smallerBoxGeometry, boxMaterial);
    smallerBox.position.y = -boxHeight * 0.25; // Adjust the position
    box.add(smallerBox);
}
function CreateChessBoard()
{
    // Create the chessboard
    var boardSize = 8;
    var squareSize = 1;
    var board = new THREE.Group();

    for (var row = 0; row < boardSize; row++) {
      for (var col = 0; col < boardSize; col++) {
        var squareColor = (row + col) % 2 === 0 ? 0xffffff : 0x808080;
        var squareGeometry = new THREE.BoxGeometry(squareSize, squareSize, 0.1);
        var squareMaterial = new THREE.MeshBasicMaterial({ color: squareColor });
        var square = new THREE.Mesh(squareGeometry, squareMaterial);
        square.position.set(col - (boardSize / 2) + 0.5, row - (boardSize / 2) + 0.5, 0);
        board.add(square);
      }
    }
    scene.add(board);

    // Create the chess pieces
    var pieces = new THREE.Group();

    // Create the pawns
    for (var col = 0; col < boardSize; col++) {
      var pawnGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32);
      var pawnMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      var pawn = new THREE.Mesh(pawnGeometry, pawnMaterial);
      pawn.position.set(col - (boardSize / 2) + 0.5, -2.5, 0.15);
      pieces.add(pawn);
    }

    // Create the other pieces
    var piecePositions = [
      ['rook', -3.5, -3.5],
      ['knight', -2.5, -3.5],
      ['bishop', -1.5, -3.5],
      ['queen', -0.5, -3.5],
      ['king', 0.5, -3.5],
      ['bishop', 1.5, -3.5],
      ['knight', 2.5, -3.5],
      ['rook', 3.5, -3.5]
    ];

    for (var i = 0; i < piecePositions.length; i++) {
      var pieceType = piecePositions[i][0];
      var pieceX = piecePositions[i][1];
      var pieceY = piecePositions[i][2];

      var pieceGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 32);
      var pieceMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      var piece = new THREE.Mesh(pieceGeometry, pieceMaterial);
      piece.position.set(pieceX, pieceY, 0.15);
      pieces.add(piece);
    }
    scene.add(pieces);
}
function CreateMario()
{

// Create Mario's body
const bodyGeometry = new THREE.BoxGeometry(1, 1, 1);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);

// Create Mario's hat
const hatGeometry = new THREE.ConeGeometry(0.5, 0.5, 16);
const hatMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const hatMesh = new THREE.Mesh(hatGeometry, hatMaterial);

// Position the hat on top of the body
hatMesh.position.y = 0.75;

// Create Mario's arms
const armGeometry = new THREE.BoxGeometry(0.2, 0.6, 0.2);
const armMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const leftArmMesh = new THREE.Mesh(armGeometry, armMaterial);
const rightArmMesh = new THREE.Mesh(armGeometry, armMaterial);

// Position the arms
leftArmMesh.position.set(-0.5, 0, 0);
rightArmMesh.position.set(0.5, 0, 0);

// Create Mario's legs
const legGeometry = new THREE.BoxGeometry(0.2, 0.6, 0.2);
const legMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const leftLegMesh = new THREE.Mesh(legGeometry, legMaterial);
const rightLegMesh = new THREE.Mesh(legGeometry, legMaterial);

// Position the legs
leftLegMesh.position.set(-0.3, -0.6, 0);
rightLegMesh.position.set(0.3, -0.6, 0);

// Create Mario's gloves
const gloveGeometry = new THREE.BoxGeometry(0.3, 0.2, 0.2);
const gloveMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

const leftGloveMesh = new THREE.Mesh(gloveGeometry, gloveMaterial);
const rightGloveMesh = new THREE.Mesh(gloveGeometry, gloveMaterial);

// Position the gloves
leftGloveMesh.position.set(-0.4, -0.3, 0);
rightGloveMesh.position.set(0.4, -0.3, 0);

// Create Mario's boots
const bootGeometry = new THREE.BoxGeometry(0.4, 0.2, 0.2);
const bootMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

const leftBootMesh = new THREE.Mesh(bootGeometry, bootMaterial);
const rightBootMesh = new THREE.Mesh(bootGeometry, bootMaterial);

const marioGroup = new THREE.Group();
marioGroup.add(bodyMesh);
marioGroup.add(hatMesh);
marioGroup.add(leftArmMesh);
marioGroup.add(rightArmMesh);
marioGroup.add(leftLegMesh);
marioGroup.add(rightLegMesh);
marioGroup.add(leftGloveMesh);
marioGroup.add(rightGloveMesh);
marioGroup.add(leftBootMesh);
marioGroup.add(rightBootMesh);

// Add Mario group to the scene
scene.add(marioGroup);

}
function CreateGoombar()
{

// Create the Goomba's body
const bodyGeometry = new THREE.CylinderGeometry(0.5, 1.5, 1,16);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x804000 });
const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);

// Create the Goomba's eyes
const eyeGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.1);
const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const leftEyeMesh = new THREE.Mesh(eyeGeometry, eyeMaterial);
const rightEyeMesh = new THREE.Mesh(eyeGeometry, eyeMaterial);

// Position the body and eyes
leftEyeMesh.position.set(-0.2, 0.3, 0.6);
rightEyeMesh.position.set(0.2, 0.3, 0.6);

// Create the Goomba's mushroom cap
const capGeometry = new THREE.SphereGeometry(0.5, 16, 16);
const capMaterial = new THREE.MeshBasicMaterial({ color: 0x804000 });
const capMesh = new THREE.Mesh(capGeometry, capMaterial);

// Position the cap
capMesh.position.y = 0.5;

// Group the body, eyes, and cap
const goombaGroup = new THREE.Group();
goombaGroup.add(bodyMesh);
goombaGroup.add(leftEyeMesh);
goombaGroup.add(rightEyeMesh);
goombaGroup.add(capMesh);

// Add the Goomba group to the scene
scene.add(goombaGroup);
}

function createMage()
{
// Create the mage's robe
const robeGeometry = new THREE.CylinderGeometry(0.5, 0.8, 2, 16);
const robeMaterial = new THREE.MeshBasicMaterial({ color: 0x5555ff });
const robeMesh = new THREE.Mesh(robeGeometry, robeMaterial);

// Create the mage's hat
const hatGeometry = new THREE.ConeGeometry(0.6, 1, 8);
const hatMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const hatMesh = new THREE.Mesh(hatGeometry, hatMaterial);

// Position the robe and hat
robeMesh.position.y = 0.5;
hatMesh.position.y = 2.2;

// Group the robe and hat
const mageGroup = new THREE.Group();
mageGroup.add(robeMesh);
mageGroup.add(hatMesh);

// Add the mage group to the scene
scene.add(mageGroup);
}
function createSheld()
{
// Create the sword blade
const bladeGeometry = new THREE.BoxGeometry(0.1, 5, 0.3, 1);
const bladeMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const bladeMesh = new THREE.Mesh(bladeGeometry, bladeMaterial);

// Create the sword handle
const handleGeometry = new THREE.CylinderGeometry(0.2, 0.5, 0.8, 8);
const handleMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const handleMesh = new THREE.Mesh(handleGeometry, handleMaterial);

// Position the sword blade and handle
bladeMesh.position.y = 1;
handleMesh.position.y = -0.6;

// Group the sword blade and handle
const swordGroup = new THREE.Group();
swordGroup.add(bladeMesh);
swordGroup.add(handleMesh);

// Create the shield
const shieldShape = new THREE.Shape();
shieldShape.moveTo(0, 1.5);
shieldShape.lineTo(1.5, 0.5);
shieldShape.quadraticCurveTo(1.2, 0, 1.5, -0.5);
shieldShape.lineTo(0, -1.5);
shieldShape.lineTo(-1.5, -0.5);
shieldShape.quadraticCurveTo(-1.2, 0, -1.5, 0.5);

const shieldGeometry = new THREE.ExtrudeGeometry(shieldShape, {
  depth: 0.1,
  bevelEnabled: false,
});
const shieldMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const shieldMesh = new THREE.Mesh(shieldGeometry, shieldMaterial);

// Position the shield and sword
shieldMesh.position.x = -1.5;
swordGroup.position.x = 1.5;

// Add the shield and sword to the scene
scene.add(shieldMesh);
scene.add(swordGroup);

}
function createUnicorn()
{
// Create the unicorn's horn
const hornGeometry = new THREE.ConeGeometry(0.1, 1, 8);
const hornMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const hornMesh = new THREE.Mesh(hornGeometry, hornMaterial);

// Position the horn
hornMesh.position.y = 2;

// Create the unicorn's dodecagon head
const headGeometry = new THREE.DodecahedronGeometry(0.2);
const headMaterial = new THREE.MeshBasicMaterial({ color: 0x800080, transparent: true, opacity: 0.8 });
const headMesh = new THREE.Mesh(headGeometry, headMaterial);

// Create the unicorn's rounded body
const bodyGeometry = new THREE.SphereGeometry(1, 0.8, 12,21);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x800080, transparent: true, opacity: 0.8 });
const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);

// Create the unicorn's wings
const wingGeometry = new THREE.PlaneGeometry(1.5, 0.5);
const wingMaterial = new THREE.MeshBasicMaterial({ color: 0x800080, transparent: true, opacity: 0.8 });
const leftWingMesh = new THREE.Mesh(wingGeometry, wingMaterial);
const rightWingMesh = new THREE.Mesh(wingGeometry, wingMaterial);

// Position the head, body, and wings
headMesh.position.y = 3.2;
bodyMesh.position.y = 0.5;
leftWingMesh.position.set(-1, 0.5, 0);
rightWingMesh.position.set(1, 0.5, 0);

// Create the unicorn's legs
const legGeometry = new THREE.BoxGeometry(0.2, 1, 0.2);
const legMaterial = new THREE.MeshBasicMaterial({ color: 0x800080, transparent: true, opacity: 0.8 });
const frontLeftLegMesh = new THREE.Mesh(legGeometry, legMaterial);
const frontRightLegMesh = new THREE.Mesh(legGeometry, legMaterial);
const backLeftLegMesh = new THREE.Mesh(legGeometry, legMaterial);
const backRightLegMesh = new THREE.Mesh(legGeometry, legMaterial);

// Position the legs
frontLeftLegMesh.position.set(-0.4, -0.5, 0.4);
frontRightLegMesh.position.set(0.4, -0.5, 0.4);
backLeftLegMesh.position.set(-0.4, -0.5, -0.4);
backRightLegMesh.position.set(0.4, -0.5, -0.4);

// Create the unicorn's mane
const maneGeometry = new THREE.BoxGeometry(0.3, 0.8, 1);
const maneMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff, transparent: true, opacity: 0.8 });
const maneMesh = new THREE.Mesh(maneGeometry, maneMaterial);

// Position the mane
maneMesh.position.y = 1.2;

// Create the unicorn's tail
const tailGeometry = new THREE.CylinderGeometry(0.1, 0.2, 1, 8);
const tailMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff, transparent: true, opacity: 0.8 });
const tailMesh = new THREE.Mesh(tailGeometry, tailMaterial);

// Position the tail
tailMesh.position.y = -0.5;

// Group the head, body, wings, legs, mane, and tail
const unicornGroup = new THREE.Group();
unicornGroup.add(headMesh);
unicornGroup.add(bodyMesh);
unicornGroup.add(leftWingMesh);
unicornGroup.add(rightWingMesh);
unicornGroup.add(frontLeftLegMesh);
unicornGroup.add(frontRightLegMesh);
unicornGroup.add(backLeftLegMesh);
unicornGroup.add(backRightLegMesh);
unicornGroup.add(maneMesh);
unicornGroup.add(tailMesh);
unicornGroup.add(hornMesh);

// Add the unicorn group to the scene
scene.add(unicornGroup);
}
function createDragon()
{
	// Setting up the constants for the Dragon 
	const headGeometry = new THREE.DodecahedronGeometry(1);
	const headMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
	const headMesh = new THREE.Mesh(headGeometry, headMaterial);
	const bodyGeometry = new THREE.CylinderGeometry(0.5, 1, 4, 8);
	const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
	const spikeGeometry = new THREE.ConeGeometry(0.1, 2.5, 8);
	const spikeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const tailGeometry = new THREE.CylinderGeometry(0.2, 0.1, 1.5, 4);
  const tailMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
  const tailMesh = new THREE.Mesh(tailGeometry, tailMaterial);
  const wingGeometry = new THREE.PlaneGeometry(2, 2);
  const wingMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const wingMesh1 = new THREE.Mesh(wingGeometry, wingMaterial);
  const wingMesh2 = new THREE.Mesh(wingGeometry, wingMaterial);
  const legGeometry = new THREE.CylinderGeometry(0.3, 0.1, 2, 8);
  const legMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  const legMesh1 = new THREE.Mesh(legGeometry, legMaterial);
  const legMesh2 = new THREE.Mesh(legGeometry, legMaterial);
  const legMesh3 = new THREE.Mesh(legGeometry, legMaterial);
  const legMesh4 = new THREE.Mesh(legGeometry, legMaterial);
  const frontFootGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.8);
  const frontFootMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const frontFootMesh1 = new THREE.Mesh(frontFootGeometry, frontFootMaterial);
  const frontFootMesh2 = new THREE.Mesh(frontFootGeometry, frontFootMaterial);
  const frontClawGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.3);
  const frontClawMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
  const frontClawMesh1 = new THREE.Mesh(frontClawGeometry, frontClawMaterial);
  const frontClawMesh2 = new THREE.Mesh(frontClawGeometry, frontClawMaterial);
  const backFootGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.8);
  const backFootMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const backFootMesh1 = new THREE.Mesh(backFootGeometry, backFootMaterial);
  const backFootMesh2 = new THREE.Mesh(backFootGeometry, backFootMaterial);
  const backClawGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.3);
  const backClawMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
  const backClawMesh1 = new THREE.Mesh(backClawGeometry, backClawMaterial);
  const backClawMesh2 = new THREE.Mesh(backClawGeometry, backClawMaterial);
  
	
  // setting up the spikes
  for (let i = 0; i < 10; i++) {
  	const spikeMesh = new THREE.Mesh(spikeGeometry, spikeMaterial);
  	spikeMesh.position.y = 1.5 + i * 0.25; // Adjust the y position as needed
  	bodyMesh.add(spikeMesh);
	}
	
  // Creatting the Dragon on the scene

  tailMesh.position.y = -2; // Adjust the y position as needed
  tailMesh.rotation.z = Math.PI / 2;
	tailMesh.rotation.x = Math.PI / 2;
	bodyMesh.add(tailMesh);
	wingMesh1.position.set(1.5, 0, 0); // Adjust the position as needed
	wingMesh2.position.set(-1.5, 0, 0); // Adjust the position as needed
	bodyMesh.add(wingMesh1);
	bodyMesh.add(wingMesh2);
  legMesh1.position.set(0.5, -2, 0.5); // Adjust the positions as needed
	legMesh2.position.set(-0.5, -2, 0.5); // Adjust the positions as needed
	legMesh3.position.set(0.5, -2, -0.5); // Adjust the positions as needed
	legMesh4.position.set(-0.5, -2, -0.5); // Adjust the positions as needed
	bodyMesh.add(legMesh1);
	bodyMesh.add(legMesh2);
	bodyMesh.add(legMesh3);
	bodyMesh.add(legMesh4);
  frontFootMesh1.position.set(0.5, -2.5, 1); // Adjust the positions as needed
	frontFootMesh2.position.set(-0.5, -2.5, 1); // Adjust the positions as needed
	bodyMesh.add(frontFootMesh1);
	bodyMesh.add(frontFootMesh2);
  frontClawMesh1.position.set(0.5, -2.5, 1.4); // Adjust the positions as needed
	frontClawMesh2.position.set(-0.5, -2.5, 1.4); // Adjust the positions as needed
	bodyMesh.add(frontClawMesh1);
	bodyMesh.add(frontClawMesh2);
  backFootMesh1.position.set(0.5, -2.5, -1); // Adjust the positions as needed
	backFootMesh2.position.set(-0.5, -2.5, -1); // Adjust the positions as needed
	bodyMesh.add(backFootMesh1);
	bodyMesh.add(backFootMesh2);
  backClawMesh1.position.set(0.5, -2.5, -1.4); // Adjust the positions as needed
	backClawMesh2.position.set(-0.5, -2.5, -1.4); // Adjust the positions as needed
	bodyMesh.add(backClawMesh1);
	bodyMesh.add(backClawMesh2);
  
  // Add the dragon's head and body to the scene
	scene.add(headMesh);
	scene.add(bodyMesh);
}
  function playLevel() {
    isCreatingLevel = false;
    isPlaying = true;
    objectsToPlace.forEach(obj => scene.remove(obj));
    objectsToPlace = [];

    cube.position.set(0, 0.5, -4);
    scene.add(cube);

    score = 0;

    for (let i = 0; i < 10; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.x = Math.random() * 10 - 5;
      sphere.position.z = Math.random() * 10 - 5;
      sphere.velocity = new THREE.Vector3((Math.random() - 0.5) * 0.1, 0, (Math.random() - 0.5) * 0.1);
      scene.add(sphere);
      spheres.push(sphere);
    }
  }
  function handleMouseDown(event) {
    if (!isCreatingLevel) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(objectsToPlace);
    if (intersects.length > 0) {
      const object = intersects[0].object.clone();
      object.position.copy(intersects[0].point);
      objectsToPlace.push(object);
      scene.add(object);
    }
  }
  function handleKeyDown(event) {
    if (!isPlaying) return;

    const moveDistance = 0.7;

    switch (event.key) {
      case 'ArrowUp':
        cube.position.z -= moveDistance;
        break;
      case 'ArrowDown':
        cube.position.z += moveDistance;
        break;
      case 'ArrowLeft':
        cube.position.x -= moveDistance;
        break;
      case 'ArrowRight':
        cube.position.x += moveDistance;
        break;
      case ' ':
        cube.position.y += moveDistance;
        break;
    }
  }
  function updateSpherePositions() {
    spheres.forEach(sphere => {
      sphere.position.add(sphere.velocity);

      if (sphere.position.y < 0.1 || sphere.position.y > 2) {
        sphere.velocity.y *= -1;
      }
    });
  }
  function checkSphereCollision() {
    for (let i = 0; i < spheres.length; i++) {
      const sphere = spheres[i];
      if (sphere.visible && cube.position.distanceTo(sphere.position) < 0.5) {
        sphere.visible = false;
        score++;
scoreElement.textContent = 'Score: ' + score;
        console.log('Score:', score);
      }
    }
  }
function animate() {
        requestAnimationFrame(animate);
        checkSphereCollision();
     
         for (let i = 0; i < spheres.length; i++) {
    const sphere = spheres[i];
    const velocity = sphere.velocity;

    // Update sphere position based on velocity
    sphere.position.add(velocity);

    // Apply gravity
    velocity.y -= 0.01;

    // Check for collision with ground
    if (sphere.position.y < 0.1) {
      sphere.position.y = 0.1;
      velocity.y *= -0.9; // Reverse velocity and apply damping
    }

    // Check for collision with walls
    if (sphere.position.x < -4.5 || sphere.position.x > 4.5) {
      velocity.x *= -1; // Reverse velocity
     // sphere.material.color.setHex(Math.random() * 0xffffff); // Random color
    }

    if (sphere.position.z < -4.5 || sphere.position.z > 4.5) {
      velocity.z *= -1; // Reverse velocity
      //sphere.material.color.setHex(Math.random() * 0xffffff); // Random color
    }
    }
        renderer.render(scene, camera);
      }
  function init() {
    camera.position.z = 5;
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);
    animate();
  }