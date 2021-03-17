const skills = [
    {
        name: 'React Native',
        image: '../../img/Skills/react native.png'
    },
    {
        name: 'ReactJs',
        image: '../../img/Skills/react.png'
    },
    {
        name: 'Angular',
        image: '../../img/Skills/angular.png'
    },
    {
        name: 'Ionic',
        image: '../../img/Skills/ionic.png'
    },
    {
        name: 'Java',
        image: '../../img/Skills/java.png'
    },
    {
        name: 'Python',
        image: '../../img/Skills/python.png'
    },
    {
        name: 'Flask',
        image: '../../img/Skills/flask.png'
    },
    {
        name: 'Django',
        image: '../../img/Skills/django.png'
    },
    {
        name: 'Sql',
        image: '../../img/Skills/sql.png'
    },
    {
        name: 'Node',
        image: '../../img/Skills/node.png'
    },
    {
        name: 'mongodDb',
        image: '../../img/Skills/mongodb.png'
    },
    {
        name: 'PS',
        image: '../../img/Skills/PS.png'
    },
    {
        name: 'AI',
        image: '../../img/Skills/AI.png'
    },
    {
        name: 'C++',
        image: '../../img/Skills/cpp.png'
    },
    {
        name: 'GIT',
        image: '../../img/Skills/git.png'
    },
    {
        name: 'ReactJs',
        image: '../../img/Skills/6.png'
    },
    {
        name: 'ReactJs',
        image: '../../img/Skills/6.png'
    },
];


function showSkills(scene) {
    // showTrees(scene);
    showCementedGround(scene);
    showSkillsBanner(scene);
    // showEnd(scene);
}


function showCementedGround(scene) {
    var cementedGroundGeometry = new THREE.PlaneGeometry(200, 3500, 100, 100);
    cementedGroundGeometry.rotateX( - Math.PI / 2 );

    var cementedGroundImg = [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/ground.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./img/ground.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/ground.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/ground.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./img/ground.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/ground.jpeg'), side: THREE.DoubleSide}),
    ]
    var cementedGroundMaterial = new THREE.MeshFaceMaterial(cementedGroundImg);

    // const cementedGroundMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
    const cementedGround = new THREE.Mesh(new THREE.BoxGeometry(200, 20, 1700), cementedGroundMaterial);
    cementedGround.position.x = 1600;
    cementedGround.position.z = -1050;
    cementedGround.position.y = 2;
    scene.add(cementedGround);
    const cementedGround1 = new THREE.Mesh(new THREE.BoxGeometry(200, 20, 1700), cementedGroundMaterial);
    cementedGround1.position.x = 2000;
    cementedGround1.position.z = -1050;
    cementedGround1.position.y = 2;
    scene.add(cementedGround1);
}


function showSkillsBanner(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 2, 5, 100, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x4c5161} );    
    const treeGeometry = new THREE.CylinderGeometry( 10, 30, 100, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );    
    

    for (let i = 1; i < skills.length; i++) {
        if (i <= 9) {
            const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
            cylinder.position.x = 1600;
            cylinder.position.z = -100 + (-200) * i;
            scene.add( cylinder);
            let skillBoardImg = [
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(skills[i].image), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(skills[i].image), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            ]
            var skillBoardMaterial = new THREE.MeshFaceMaterial(skillBoardImg);
            const skillBoard = new THREE.Mesh(new THREE.BoxGeometry(10, 80, 150), skillBoardMaterial);
            skillBoard.rotation.y = 100;
            skillBoard.position.x = 1600;
            skillBoard.position.z = -100 + -200 * i;
            skillBoard.position.y = 80;
            scene.add( skillBoard);
        } else {
            const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
            cylinder2.position.x = 2000;
            cylinder2.position.z = -100 + (-200) * (i - 9);
            scene.add( cylinder2);
            let skillBoardImg = [
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(skills[i].image), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(skills[i].image), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            ]
            var skillBoardMaterial = new THREE.MeshFaceMaterial(skillBoardImg);
            const skillBoard = new THREE.Mesh(new THREE.BoxGeometry(10, 80, 150), skillBoardMaterial);
            skillBoard.rotation.y = 180;
            skillBoard.position.x = 2000;
            skillBoard.position.z = -100 + -200 * (i - 9);
            skillBoard.position.y = 80;
            scene.add( skillBoard);
        }
    }
}



function showTrees(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 2, 5, 100, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x2f1917} );    
    const treeGeometry = new THREE.CylinderGeometry( 10, 30, 100, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );    

    for (let i = 1; i < 10; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 1500;
        cylinder.position.z = -100 + (-100) * i;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 2200;
        cylinder2.position.z = -100 + (-100) * i;
        scene.add( cylinder2);

        const tree = new THREE.Mesh( treeGeometry, treeMaterial );
        tree.position.x = 1500;
        tree.position.z = -100 + -100 * i;
        tree.position.y = 80;
        scene.add( tree);
        const tree2 = new THREE.Mesh( treeGeometry, treeMaterial );
        tree2.position.x = 2200;
        tree2.position.z = -100 + (-100) * i;
        tree2.position.y = 80;
        scene.add( tree2 );
    }
}

function showEnd(scene) {
    let skillBoardImg = [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
    ]
    var skillBoardMaterial = new THREE.MeshFaceMaterial(skillBoardImg);
    const skillBoard = new THREE.Mesh(new THREE.BoxGeometry(10, 80, 150), skillBoardMaterial);
    skillBoard.rotation.y = 100;
    skillBoard.position.x = 1600;
    skillBoard.position.z = 1000;
    skillBoard.position.y = 80;
    scene.add( skillBoard);   
}