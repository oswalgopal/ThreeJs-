function showBoundryWall(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 3, 3, 50, 32 );
    const cylinderGeometry1 = new THREE.CylinderGeometry( 2, 2, 50, 32 );
    cylinderGeometry1.rotateX(Math.PI / 2);
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x6b7d8d} );    
    const cylinderMaterial1 = new THREE.MeshBasicMaterial( {color: 0x414e5e} );    
    for (let i = 1; i < 50; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 400;
        cylinder.position.z = 250 + 50 * i;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 400;
        cylinder2.position.z = 150 + (-50) * i;
        scene.add( cylinder2);

        // for center line
        const cylinder3 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder3.position.x = 400;
        cylinder3.position.z = 120 + (-50) * i;
        cylinder3.position.y = 10;
        scene.add( cylinder3);

        const cylinder4 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder4.position.x = 400;
        cylinder4.position.z = 120 + (-50) * i;
        cylinder4.position.y = 15;
        scene.add( cylinder4);

        const cylinder5 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder5.position.x = 400;
        cylinder5.position.z = 120 + (-50) * i;
        cylinder5.position.y = 20;
        scene.add( cylinder5);

        const cylinder6 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder6.position.x = 400;
        cylinder6.position.z = 275 + 50 * i;
        cylinder6.position.y = 10;
        scene.add( cylinder6);

        const cylinder7 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder7.position.x = 400;
        cylinder7.position.z = 275 + 50 * i;
        cylinder7.position.y = 15;
        scene.add( cylinder7);

        const cylinder8 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder8.position.x = 400;
        cylinder8.position.z = 275 + 50 * i;
        cylinder8.position.y = 20;
        scene.add( cylinder8);

        // for border 2


    }
}