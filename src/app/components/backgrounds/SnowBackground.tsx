// import GUI from "lil-gui";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import snowflake1 from "../../../assets/images/textures/snowflake1.webp";
import snowflake2 from "../../../assets/images/textures/snowflake2.webp";
import snowflake3 from "../../../assets/images/textures/snowflake3.webp";
import snowflake4 from "../../../assets/images/textures/snowflake4.webp";
import snowflake5 from "../../../assets/images/textures/snowflake5.webp";

export function SnowBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8d5e7, 0.00045);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      2000,
    );
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const createVertices = (count: number) => {
      const vertices: number[] = [];
      for (let i = 0; i < count; i += 1) {
        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;
        vertices.push(x, y, z);
      }
      return vertices;
    };
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(createVertices(7000), 3),
    );

    const textureLoader = new THREE.TextureLoader();
    const textures = [
      textureLoader.load(snowflake1),
      textureLoader.load(snowflake2),
      textureLoader.load(snowflake3),
      textureLoader.load(snowflake4),
      textureLoader.load(snowflake5),
    ];

    textures.forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
    });

    const parameters: Array<[[number, number, number], THREE.Texture, number]> =
      [
        [[0.92, 0.6, 0.58], textures[1], 20],
        [[0.92, 0.55, 0.56], textures[2], 16],
        [[0.92, 0.5, 0.54], textures[0], 12],
        [[0.92, 0.45, 0.52], textures[4], 10],
        [[0.92, 0.4, 0.5], textures[3], 8],
      ];

    const controls = {
      particleCount: 7100,
      opacity: 0.23,
      alphaTest: 0.11,
      minSize: 1,
      maxSize: 32.1,
      hue: 0.92,
      saturation: 1,
      lightness: 0.633,
      rotationSpeed: 0.17,
      mouseFollow: 0.014,
    };

    const materials: THREE.PointsMaterial[] = [];
    const particlesList: THREE.Points[] = [];

    for (let i = 0; i < parameters.length; i += 1) {
      const [color, sprite, size] = parameters[i];
      const material = new THREE.PointsMaterial({
        size,
        alphaMap: sprite,
        blending: THREE.NormalBlending,
        depthTest: false,
        depthWrite: false,
        transparent: true,
        opacity: controls.opacity,
        alphaTest: controls.alphaTest,
      });
      material.color.setHSL(color[0], color[1], color[2], THREE.SRGBColorSpace);

      const particles = new THREE.Points(geometry, material);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;

      scene.add(particles);
      materials.push(material);
      particlesList.push(particles);
    }

    let mouseX = 0;
    let mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let animationFrameId = 0;

    const applyVisualSettings = () => {
      const minSize = Math.min(controls.minSize, controls.maxSize);
      const maxSize = Math.max(controls.minSize, controls.maxSize);
      const layerCount = materials.length - 1;
      for (let i = 0; i < materials.length; i += 1) {
        const material = materials[i];
        const ratio = layerCount > 0 ? i / layerCount : 0;
        const baseSize = THREE.MathUtils.lerp(maxSize, minSize, ratio);
        material.opacity = controls.opacity;
        material.alphaTest = controls.alphaTest;
        material.size = baseSize;
        material.needsUpdate = true;
      }
    };

    // const updateParticleCount = () => {
    //   const count = Math.floor(controls.particleCount);
    //   geometry.setAttribute(
    //     "position",
    //     new THREE.Float32BufferAttribute(createVertices(count), 3),
    //   );
    //   geometry.computeBoundingSphere();
    // };

    applyVisualSettings();

    // const gui = new GUI({ title: "雪エフェクト調整" });
    // gui.domElement.style.position = "fixed";
    // gui.domElement.style.top = "56px";
    // gui.domElement.style.right = "16px";
    // gui.domElement.style.zIndex = "60";
    //
    // gui
    //   .add(controls, "particleCount", 500, 20000, 100)
    //   .name("粒子の量")
    //   .onFinishChange(updateParticleCount);
    // gui
    //   .add(controls, "opacity", 0, 1, 0.01)
    //   .name("透明度")
    //   .onChange(applyVisualSettings);
    // gui
    //   .add(controls, "alphaTest", 0, 0.8, 0.01)
    //   .name("透過しきい値")
    //   .onChange(applyVisualSettings);
    // gui
    //   .add(controls, "minSize", 1, 24, 0.1)
    //   .name("サイズ最小")
    //   .onChange(applyVisualSettings);
    // gui
    //   .add(controls, "maxSize", 2, 64, 0.1)
    //   .name("サイズ最大")
    //   .onChange(applyVisualSettings);
    // gui.add(controls, "hue", 0, 1, 0.001).name("色相");
    // gui.add(controls, "saturation", 0, 1, 0.001).name("彩度");
    // gui.add(controls, "lightness", 0, 1, 0.001).name("明度");
    // gui.add(controls, "rotationSpeed", 0, 4, 0.01).name("動きの速さ");
    // gui.add(controls, "mouseFollow", 0, 0.2, 0.001).name("マウス追従");

    const onPointerMove = (event: PointerEvent) => {
      if (!event.isPrimary) return;
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      const time = Date.now() * 0.00005;

      camera.position.x += (mouseX - camera.position.x) * controls.mouseFollow;
      camera.position.y += (-mouseY - camera.position.y) * controls.mouseFollow;
      camera.lookAt(scene.position);

      for (let i = 0; i < particlesList.length; i += 1) {
        const object = particlesList[i];
        object.rotation.y =
          time * controls.rotationSpeed * (i < 4 ? i + 1 : -(i + 1));
      }

      for (let i = 0; i < materials.length; i += 1) {
        const [, baseSaturation, baseLightness] = parameters[i][0];
        const saturation = THREE.MathUtils.clamp(
          (baseSaturation + controls.saturation) * 0.5,
          0,
          1,
        );
        const lightness = THREE.MathUtils.clamp(
          (baseLightness + controls.lightness) * 0.5,
          0,
          1,
        );
        materials[i].color.setHSL(
          controls.hue,
          saturation,
          lightness,
          THREE.SRGBColorSpace,
        );
      }

      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onWindowResize);
    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onWindowResize);
      window.cancelAnimationFrame(animationFrameId);
      // gui.destroy();

      particlesList.forEach((particles) => {
        scene.remove(particles);
      });
      materials.forEach((material) => {
        material.dispose();
      });
      geometry.dispose();
      textures.forEach((texture) => {
        texture.dispose();
      });
      renderer.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" ref={containerRef} />
  );
}
