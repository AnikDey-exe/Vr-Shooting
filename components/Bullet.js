AFRAME.registerComponent('bullets', {
    init: function () {
        this.createBullet();
    },
    createBullet: function () {
        window.addEventListener('click', () => {
            // if(e.key === 'z') {
            var element = document.createElement('a-entity');

            var camera = document.querySelector('#camera');
            var scene = document.querySelector('#scene');

            var cameraPos = camera.getAttribute('position');

            var cameraObject3D = document.querySelector('#camera').object3D;
            var cam = document.querySelector('#camera-rig');
            var pos = cam.getAttribute("position");

            var direction = new THREE.Vector3();

            cameraObject3D.getWorldDirection(direction);

            element.setAttribute('geometry', { primitive: 'sphere', radius: 0.1 });
            element.setAttribute('material', { color: 'yellow' });
            element.setAttribute('position', { x: pos.x, y: pos.y + 1.6, z: pos.z - 0.5 });
            element.setAttribute('velocity', direction.multiplyScalar(-10));
            element.setAttribute('dynamic-body', { shape: "sphere", mass: 0 });

            var entity = document.querySelector("#gunshots");
            entity.components.sound.playSound();

            scene.appendChild(element);

            element.addEventListener('collide', this.removeBullet);

            //}
        })
    },
    removeBullet: function (e) {
        var bullet = e.detail.target.el;
        var box = e.detail.body.el;

        if (box.id.includes("box")) {
            box.setAttribute('material', { opacity: 0.5, transparent: true });
            var impulse = new CANNON.Vec3(-2, 2, 1);
            var point = new CANNON.Vec3().copy(box.getAttribute('position'));
            box.body.applyImpulse(impulse, point);
            bullet.removeEventListener('collide', this.removeBullet);
            var scene = document.querySelector('#scene');
            scene.removeChild(bullet);
        }
    }
})