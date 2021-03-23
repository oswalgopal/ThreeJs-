function showBoundryWall(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 3, 3, 50, 32 );
    const cylinderGeometry1 = new THREE.CylinderGeometry( 2, 2, 50, 32 );
    cylinderGeometry1.rotateX(Math.PI / 2);
    const cylinderGeometry2 = new THREE.CylinderGeometry( 2, 2, 50, 32 );
    cylinderGeometry2.rotateX(Math.PI / 2);
    cylinderGeometry2.rotateZ(Math.PI / 2);
    cylinderGeometry2.rotateY(Math.PI / 2);
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x6b7d8d} );    
    const cylinderMaterial1 = new THREE.MeshBasicMaterial( {color: 0x414e5e} );    
    for (let i = 1; i < 54; i++) {
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

        const cylinder9 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder9.position.x = 350 + 50 * i;
        cylinder9.position.z = 300 + 50 * 53;
        scene.add( cylinder9);

        const cylinder10 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder10.position.x = 375 + 50 * i;
        cylinder10.position.z = 300 + 50 * 53;
        cylinder10.position.y = 10;
        scene.add( cylinder10);

        const cylinder11 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder11.position.x = 375 + 50 * i;
        cylinder11.position.z = 300 + 50 * 53;
        cylinder11.position.y = 15;
        scene.add( cylinder11);

        const cylinder12 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder12.position.x = 375 + 50 * i;
        cylinder12.position.z = 300 + 50 * 53;
        cylinder12.position.y = 20;
        scene.add( cylinder12);

        // for border 3
        const cylinder13 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder13.position.x = 350 + 50 * i;
        cylinder13.position.z = - (-100 + 50 * 53);
        scene.add( cylinder13);

        const cylinder14 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder14.position.x = 375 + 50 * i;
        cylinder14.position.z = - (-100 + 50 * 53);
        cylinder14.position.y = 10;
        scene.add( cylinder14);

        const cylinder15 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder15.position.x = 375 + 50 * i;
        cylinder15.position.z = - (-100 + 50 * 53);
        cylinder15.position.y = 15;
        scene.add( cylinder15);

        const cylinder16 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder16.position.x = 375 + 50 * i;
        cylinder16.position.z = - (-100 + 50 * 53);
        cylinder16.position.y = 20;
        scene.add( cylinder16);

    }
}