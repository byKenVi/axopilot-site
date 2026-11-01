import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/**
 * Le « A » d'AxioPilot en 3D : deux jambes en ruban, une flèche qui traverse,
 * et un flux de tâches (particules) qui suit la flèche.
 */
export function initHero3D(canvas: HTMLCanvasElement, opts: { reduce: boolean }) {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    return false;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  // Lumières colorées : elles recréent le dégradé cyan → violet du logo
  scene.add(new THREE.AmbientLight(0x9fb2ff, 0.9));
  const cyan = new THREE.PointLight(0x4fd1ff, 60, 30); cyan.position.set(4, 4, 4); scene.add(cyan);
  const violet = new THREE.PointLight(0xa66bff, 60, 30); violet.position.set(-3.5, -3, 3); scene.add(violet);
  const blue = new THREE.DirectionalLight(0x3d6bff, 2.2); blue.position.set(0, 2, 6); scene.add(blue);

  const mat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, metalness: 0.15, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.12,
    iridescence: 0.5, iridescenceIOR: 1.5, iridescenceThicknessRange: [250, 500], envMapIntensity: 1.0,
  });

  const group = new THREE.Group();
  scene.add(group);

  const extrude = { depth: 0.42, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.07, bevelSegments: 8, curveSegments: 24 };

  // Jambe gauche : une bande qui monte vers le sommet
  const left = new THREE.Shape();
  left.moveTo(-1.55, -1.5); left.lineTo(-0.95, -1.5); left.lineTo(0.05, 1.18); left.quadraticCurveTo(0.0, 1.5, -0.32, 1.5); left.lineTo(-0.5, 1.5); left.closePath();
  const legL = new THREE.Mesh(new THREE.ExtrudeGeometry(left, extrude), mat);
  legL.position.z = -0.2;
  group.add(legL);

  // Jambe droite : le ruban redescend après le pli
  const right = new THREE.Shape();
  right.moveTo(-0.32, 1.5); right.quadraticCurveTo(0.12, 1.52, 0.25, 1.2); right.lineTo(1.55, -1.5); right.lineTo(0.95, -1.5); right.lineTo(-0.1, 0.72); right.closePath();
  const legR = new THREE.Mesh(new THREE.ExtrudeGeometry(right, extrude), mat);
  legR.position.z = -0.45;
  group.add(legR);

  // La flèche qui traverse le A
  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.1, -1.25, 0.55),
    new THREE.Vector3(-0.3, -0.75, 0.6),
    new THREE.Vector3(0.6, -0.05, 0.45),
    new THREE.Vector3(1.45, 0.6, 0.3),
  ]);
  const arrowMat = mat.clone(); arrowMat.color = new THREE.Color(0x9fefff); arrowMat.emissive = new THREE.Color(0x1d6fa8); arrowMat.emissiveIntensity = 0.35;
  const tube = new THREE.Mesh(new THREE.TubeGeometry(path, 80, 0.12, 24, false), arrowMat);
  group.add(tube);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.6, 32), arrowMat);
  const end = path.getPoint(1), tan = path.getTangent(1);
  tip.position.copy(end).addScaledVector(tan, 0.22);
  tip.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan.normalize());
  group.add(tip);

  group.scale.setScalar(1.0);

  // Flux de tâches : particules qui suivent une trajectoire prolongeant la flèche
  const flow = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-5.5, -2.6, -0.5),
    new THREE.Vector3(-2.2, -1.8, 0.4),
    ...path.getPoints(6).map((p) => p.clone().add(new THREE.Vector3(0, 0, 0.2))),
    new THREE.Vector3(3.2, 1.6, -0.2),
    new THREE.Vector3(6, 2.8, -1),
  ]);
  const N = 140;
  const pos = new Float32Array(N * 3);
  const seeds = Array.from({ length: N }, () => ({ t: Math.random(), s: 0.035 + Math.random() * 0.05, o: new THREE.Vector3((Math.random() - 0.5) * 0.35, (Math.random() - 0.5) * 0.35, (Math.random() - 0.5) * 0.35) }));
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dot = document.createElement('canvas'); dot.width = dot.height = 64;
  const dctx = dot.getContext('2d')!;
  const grd = dctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.3, 'rgba(255,255,255,.85)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  dctx.fillStyle = grd; dctx.fillRect(0, 0, 64, 64);
  const pMat = new THREE.PointsMaterial({ size: 0.16, map: new THREE.CanvasTexture(dot), transparent: true, depthWrite: false, blending: THREE.NormalBlending });
  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  // Interaction
  const target = { x: 0, y: 0 };
  let scrollP = 0;
  let baseX = 0.35;
  window.addEventListener('pointermove', (e) => {
    target.x = (e.clientX / window.innerWidth - 0.5) * 0.7;
    target.y = (e.clientY / window.innerHeight - 0.5) * 0.45;
  }, { passive: true });
  window.addEventListener('scroll', () => { scrollP = Math.min(1, window.scrollY / window.innerHeight); }, { passive: true });

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.position.z = w / h < 0.9 ? 10.5 : 9.5;
    baseX = w / h < 0.9 ? 0 : 0.35;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(canvas);
  resize();

  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);

  const clock = new THREE.Clock();
  const tmp = new THREE.Vector3();
  function render() {
    const t = clock.getElapsedTime();
    group.rotation.y += ((target.x - 0.35 + scrollP * 1.4) - group.rotation.y) * 0.05;
    group.rotation.x += ((target.y * 0.6 + 0.08 - scrollP * 0.3) - group.rotation.x) * 0.05;
    group.position.set(baseX, 0.25 + Math.sin(t * 0.8) * 0.06 + scrollP * 0.6, 0);
    for (let i = 0; i < N; i++) {
      const s = seeds[i];
      if (!opts.reduce) s.t = (s.t + s.s * 0.016) % 1;
      flow.getPoint(s.t, tmp).add(s.o);
      pos[i * 3] = tmp.x; pos[i * 3 + 1] = tmp.y + scrollP * 0.6; pos[i * 3 + 2] = tmp.z;
    }
    pGeo.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  }
  function loop() {
    if (visible) render();
    requestAnimationFrame(loop);
  }
  if (opts.reduce) { render(); window.addEventListener('pointermove', render, { passive: true }); }
  else loop();
  return true;
}
