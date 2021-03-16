function showMainRoad(scene) {
    var roadGeometry = new THREE.PlaneGeometry(2000, 200, 100, 100);
    roadGeometry.rotateX( - Math.PI / 2 );
    const roadMaterial = new THREE.MeshBasicMaterial( {color: 0x4c5161, side: THREE.DoubleSide} );
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.position.x = 1400;
    road.position.z = 200;
    road.position.y = 2;
    scene.add(road);
    showRoadWhiteLines(scene);
    showLights(scene);
}

function showLights(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 2, 5, 100, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x2f1917} );
    

    for (let i = 1; i < 10; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 400 + 100 * i;
        cylinder.position.z = 100;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 400 + 100 * i;
        cylinder2.position.z = 300;
        scene.add( cylinder2);
    }
}

function showRoadWhiteLines(scene){
    var roadGeometry = new THREE.PlaneGeometry(50, 10, 1, 1);
    roadGeometry.rotateX( - Math.PI / 2 );
    const roadMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
    for (let i = 1; i < 10; i++) {
        const road = new THREE.Mesh(roadGeometry, roadMaterial);
        road.position.x = 400 + 150 * i;
        road.position.z = 200;
        road.position.y = 3;
        scene.add(road);
    }
}