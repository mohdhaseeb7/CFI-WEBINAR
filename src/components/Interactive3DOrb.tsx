"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Interactive3DOrb() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 800);
    let height = container.clientHeight || (typeof window !== "undefined" ? window.innerHeight : 600);

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    // 4. Create Particles Geometry & Material
    const particleCount = 1500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorViolet = new THREE.Color("#8b5cf6"); // violet-500
    const colorFuchsia = new THREE.Color("#ec4899"); // pink-500/fuchsia-500
    const colorBlue = new THREE.Color("#3b82f6"); // blue-500

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + Math.random() * 0.4;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mixedColor = colorViolet.clone();
      if (x > 0) {
        mixedColor.lerp(colorFuchsia, Math.abs(x) / 2.4);
      } else {
        mixedColor.lerp(colorBlue, Math.abs(x) / 2.4);
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle texture
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 16;
    pCanvas.height = 16;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const gradient = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      pCtx.fillStyle = gradient;
      pCtx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(pCanvas);

    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.6, // clearly visible
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // LEFT ORB
    const pointsLeft = new THREE.Points(geometry, material);
    scene.add(pointsLeft);

    // RIGHT ORB
    const pointsRight = new THREE.Points(geometry, material);
    scene.add(pointsRight);

    // Wireframe Sphere Geometries & Materials
    const sphereGeometry = new THREE.SphereGeometry(2.1, 20, 20);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xa78bfa, // violet-400
      wireframe: true,
      transparent: true,
      opacity: 0.25, // clearly visible
    });

    const wireframeLeft = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(wireframeLeft);

    const wireframeRight = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(wireframeRight);

    // 5. Text Sprites inside Orbs
    // Text Canvas 1 ("CODE FOR")
    const canvas1 = document.createElement("canvas");
    canvas1.width = 256;
    canvas1.height = 128;
    const ctx1 = canvas1.getContext("2d");
    if (ctx1) {
      ctx1.font = "bold 32px Arial, sans-serif";
      ctx1.fillStyle = "#a78bfa";
      ctx1.textAlign = "center";
      ctx1.textBaseline = "middle";
      ctx1.fillText("CODE FOR", 128, 64);
    }
    const texture1 = new THREE.CanvasTexture(canvas1);
    const material1 = new THREE.SpriteMaterial({ map: texture1, transparent: true, opacity: 0.85 });
    const spriteLeft = new THREE.Sprite(material1);
    spriteLeft.scale.set(3, 1.5, 1);
    scene.add(spriteLeft);

    // Text Canvas 2 ("INDIA")
    const canvas2 = document.createElement("canvas");
    canvas2.width = 256;
    canvas2.height = 128;
    const ctx2 = canvas2.getContext("2d");
    if (ctx2) {
      ctx2.font = "bold 36px Arial, sans-serif";
      ctx2.fillStyle = "#f472b6"; // pink-400
      ctx2.textAlign = "center";
      ctx2.textBaseline = "middle";
      ctx2.fillText("INDIA", 128, 64);
    }
    const texture2 = new THREE.CanvasTexture(canvas2);
    const material2 = new THREE.SpriteMaterial({ map: texture2, transparent: true, opacity: 0.85 });
    const spriteRight = new THREE.Sprite(material2);
    spriteRight.scale.set(3, 1.5, 1);
    scene.add(spriteRight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Dynamic positioning based on screen aspect ratio
    const adjustPositions = (w: number, h: number) => {
      const aspect = w / h;
      if (w < 768) {
        // Mobile layout: Single centered orb slightly offset to the right background
        pointsLeft.position.set(0.8, 0, 0);
        wireframeLeft.position.set(0.8, 0, 0);
        spriteLeft.position.set(0.8, 0, 0);
        
        // Hide right orb on mobile
        pointsRight.visible = false;
        wireframeRight.visible = false;
        spriteRight.visible = false;
      } else {
        // Desktop layout: Split left and right at screen borders
        const xOffset = Math.min(aspect * 2.3, 4.8);
        pointsLeft.position.set(-xOffset, 0, 0);
        wireframeLeft.position.set(-xOffset, 0, 0);
        spriteLeft.position.set(-xOffset, 0, 0);

        pointsRight.position.set(xOffset, 0, 0);
        wireframeRight.position.set(xOffset, 0, 0);
        spriteRight.position.set(xOffset, 0, 0);

        pointsRight.visible = true;
        wireframeRight.visible = true;
        spriteRight.visible = true;
      }
    };

    // Initial adjust
    adjustPositions(width, height);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse movements
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotations
      pointsLeft.rotation.y = elapsedTime * 0.1;
      pointsLeft.rotation.x = elapsedTime * 0.05;
      pointsLeft.rotation.y += mouseX * 0.5;
      pointsLeft.rotation.x -= mouseY * 0.5;

      wireframeLeft.rotation.y = -elapsedTime * 0.04;
      wireframeLeft.rotation.y -= mouseX * 0.2;

      pointsRight.rotation.y = elapsedTime * 0.08;
      pointsRight.rotation.x = -elapsedTime * 0.04;
      pointsRight.rotation.y += mouseX * 0.5;
      pointsRight.rotation.x -= mouseY * 0.5;

      wireframeRight.rotation.y = -elapsedTime * 0.03;
      wireframeRight.rotation.y -= mouseX * 0.2;

      // Text rocking movement
      spriteLeft.material.rotation = Math.sin(elapsedTime * 0.5) * 0.06;
      spriteRight.material.rotation = -Math.sin(elapsedTime * 0.5) * 0.06;

      // Scaling Pulse
      const pulseLeft = 1.0 + Math.sin(elapsedTime * 1.5) * 0.04;
      pointsLeft.scale.set(pulseLeft, pulseLeft, pulseLeft);
      wireframeLeft.scale.set(pulseLeft, pulseLeft, pulseLeft);

      const pulseRight = 1.0 + Math.cos(elapsedTime * 1.5) * 0.04;
      pointsRight.scale.set(pulseRight, pulseRight, pulseRight);
      wireframeRight.scale.set(pulseRight, pulseRight, pulseRight);

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      width = container.clientWidth || window.innerWidth || 800;
      height = container.clientHeight || window.innerHeight || 600;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      adjustPositions(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      texture1.dispose();
      material1.dispose();
      texture2.dispose();
      material2.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden select-none pointer-events-none z-0">
      <div
        ref={containerRef}
        className="h-full w-full opacity-35 transition-opacity duration-500 scale-120 sm:scale-130 md:scale-140 lg:scale-150"
      />
    </div>
  );
}
