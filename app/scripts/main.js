var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
  calibrateX: false,
  calibrateY: true,
  invertX: false,
  invertY: false,
  limitX: 70,
  limitY: 30,
  scalarX: 60,
  scalarY: 60,
  frictionX: 0.1,
  frictionY: 0.1
});