function showMainRoad(scene) {

    // forward one
    var roadGeometry = new THREE.PlaneGeometry(1800, 200, 100, 100);
    var roadGeometryWhite = new THREE.PlaneGeometry(1800, 250, 100, 100);
    var roadGeometry1 = new THREE.PlaneGeometry(200, 3800, 100, 100);
    var roadGeometryWhite1 = new THREE.PlaneGeometry(250, 3500, 100, 100);

    roadGeometry.rotateX( - Math.PI / 2 );
    roadGeometryWhite.rotateX( - Math.PI / 2 );
    roadGeometry1.rotateX( - Math.PI / 2 );
    roadGeometryWhite1.rotateX( - Math.PI / 2 );

    const roadMaterial = new THREE.MeshBasicMaterial( {color: 0x4c5161, side: THREE.DoubleSide} );
    const roadMaterialWhite = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.position.x = 1300;
    road.position.z = 200;
    road.position.y = 2;
    scene.add(road);
    // const roadWhite = new THREE.Mesh(roadGeometryWhite, roadMaterialWhite);
    // roadWhite.position.x = 1300;
    // roadWhite.position.z = 200;
    // road.position.y = 2;
    // scene.add(roadWhite);
    scene.add(road);
    
    showRoadWhiteLines(scene);
    showLights(scene);

    // backward one
    const road1 = new THREE.Mesh(roadGeometry, roadMaterial);
    road1.position.x = 2400;
    road1.position.z = 200;
    road1.position.y = 2;
    scene.add(road1);

    // left one
    const road2 = new THREE.Mesh(roadGeometry1, roadMaterial);
    road2.position.z = 0;
    road2.position.x = 1800;
    road2.position.y = 2;
    scene.add(road2);

    // right one
    const road3 = new THREE.Mesh(roadGeometry1, roadMaterial);
    road3.position.z = 600;
    road3.position.x = 1800;
    road3.position.y = 2;
    scene.add(road3);
}

function showLights(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 2, 5, 100, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x2f1917} );    
    const treeGeometry = new THREE.CylinderGeometry( 10, 30, 100, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );    

    for (let i = 1; i < 10; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 400 + 100 * i;
        cylinder.position.z = 100;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 400 + 100 * i;
        cylinder2.position.z = 300;
        scene.add( cylinder2);

        const tree = new THREE.Mesh( treeGeometry, treeMaterial );
        tree.position.x = 400 + 100 * i;
        tree.position.z = 100;
        tree.position.y = 80;
        scene.add( tree);
        const tree2 = new THREE.Mesh( treeGeometry, treeMaterial );
        tree2.position.x = 400 + 100 * i;
        tree2.position.z = 300;
        tree2.position.y = 80;
        scene.add( tree2 );
    }

    for (let i = 1; i < 10; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 2100 + 100 * i;
        cylinder.position.z = 100;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 2100 + 100 * i;
        cylinder2.position.z = 300;
        scene.add( cylinder2);

        const tree = new THREE.Mesh( treeGeometry, treeMaterial );
        tree.position.x = 2100 + 100 * i;
        tree.position.z = 100;
        tree.position.y = 80;
        scene.add( tree);
        const tree2 = new THREE.Mesh( treeGeometry, treeMaterial );
        tree2.position.x = 2100 + 100 * i;
        tree2.position.z = 300;
        tree2.position.y = 80;
        scene.add( tree2 );
    }
}

function showRoadWhiteLines(scene){
    var roadGeometry = new THREE.PlaneGeometry(50, 10, 1, 1);
    var roadGeometry1 = new THREE.PlaneGeometry(10, 50, 1, 1);
    roadGeometry.rotateX( - Math.PI / 2 );
    roadGeometry1.rotateX( - Math.PI / 2 );
    const roadMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
    for (let i = 1; i < 20; i++) {
        const road = new THREE.Mesh(roadGeometry, roadMaterial);
        road.position.x = 400 + 150 * i;
        road.position.z = 200;
        road.position.y = 3;
        scene.add(road);
    }
    for (let i = 0 ; i < 29; i++){
        const road1 = new THREE.Mesh(roadGeometry1, roadMaterial);
        road1.position.x = 1800;
        road1.position.z = -1800 + 150 * i;
        road1.position.y = 3;
        scene.add(road1);
    }
}