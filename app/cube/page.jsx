"use client"
import { useEffect, useRef } from 'react';
import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import texture1 from "../../public/aseets/Bulb.png";
import texture2 from "../../public/aseets/Bulb.png";
import texture3 from "../../public/aseets/Bulb.png";
import texture4 from "../../public/aseets/Bulb.png";
import texture5 from "../../public/aseets/Bulb.png";
import texture6 from "../../public/aseets/Bulb.png";

const CubeScene = () => {
    const containerRef = useRef();
    const renderer = useRef();
    const scene = useRef();
    const camera = useRef();
    const controls = useRef();
    const textures = useRef([]);

    const handleResize = () => {
        camera.current.aspect = 0.9 * containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.current.updateProjectionMatrix();
        renderer.current.setSize(0.9 * containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    useEffect(() => {
        const init = () => {
            // Get the container element
            const container = containerRef.current;

            // Create scene
            scene.current = new Three.Scene();

            // Create camera
            camera.current = new Three.PerspectiveCamera(60, 0.9 * container.clientWidth / container.clientHeight, 0.1, 1000);
            camera.current.position.set(0, 0, 5);

            // Create renderer
            renderer.current = new Three.WebGLRenderer({ antialias: true, alpha: true });
            renderer.current.setSize(0.9 * container.clientWidth, container.clientHeight);
            container.appendChild(renderer.current.domElement);

            // Load image textures
            const textureLoader = new Three.TextureLoader();
            textures.current = [
                textureLoader.load(texture1),
                textureLoader.load(texture2),
                textureLoader.load(texture3),
                textureLoader.load(texture4),
                textureLoader.load(texture5),
                textureLoader.load(texture6)
            ];

            // Create materials for each side of the cube
            const materials = textures.current.map(texture => new Three.MeshBasicMaterial({ map: texture }));

            // Create cube geometry
            const geometry = new Three.BoxGeometry();
            const cube = new Three.Mesh(geometry, materials);
            scene.current.add(cube);

            // Add orbit controls
            controls.current = new OrbitControls(camera.current, renderer.current.domElement);
            controls.current.enableDamping = true;
            controls.current.dampingFactor = 0.25;
            controls.current.rotateSpeed = 0.5;

            // Add ambient light
            const ambientLight = new Three.AmbientLight(0xffffff, 0.5);
            scene.current.add(ambientLight);

            // Add directional light
            const directionalLight = new Three.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(0, 10, 0);
            scene.current.add(directionalLight);

            // Resize handling
            window.addEventListener('resize', handleResize);

            // Animation loop
            const animate = () => {
                requestAnimationFrame(animate);
                controls.current.update();
                renderer.current.render(scene.current, camera.current);
            };

            animate();
        };

        init();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={containerRef} />;
};

export default CubeScene;
