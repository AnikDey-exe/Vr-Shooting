AFRAME.registerComponent('fence', {
    init: function() {
        this.createFences();
    },
    createFences: function() {
        var posX = -20;
        var posY;
        var posZ = 50;

        for(var i = 0; i < 10; i++) {
            var scene = document.querySelector('#scene');

            var n = document.createElement('a-entity');
            var s = document.createElement('a-entity');
            var e = document.createElement('a-entity');
            var w = document.createElement('a-entity');

            posX += 5;
            posY = 2.5;
            posZ -=10;

            n.setAttribute('id', 'n'+i);
            s.setAttribute('id', 's'+i);
            e.setAttribute('id', 'e'+i);
            w.setAttribute('id', 'w'+i);

            n.setAttribute('position', {x: posX, y: posY, z: -35});
            s.setAttribute('position', {x: posX, y: posY, z: 35});
            e.setAttribute('position', {x: 35, y: posY, z: posZ});
            w.setAttribute('position', {x: -35, y: posY, z: posZ});

            n.setAttribute('scale', {x: 2, y: 2, z: 2});
            s.setAttribute('scale', {x: 2, y: 2, z: 2});
            e.setAttribute('scale', {x: 2, y: 2, z: 2});
            w.setAttribute('scale', {x: 2, y: 2, z: 2});

            n.setAttribute('gltf-model', '../models/barbed_wire_fence/scene.gltf');
            s.setAttribute('gltf-model', '../models/barbed_wire_fence/scene.gltf');
            e.setAttribute('gltf-model', '../models/barbed_wire_fence/scene.gltf');
            w.setAttribute('gltf-model', '../models/barbed_wire_fence/scene.gltf');

            e.setAttribute('rotation', {x: 0, y: 90, z: 0});
            w.setAttribute('rotation', {x: 0, y: 90, z: 0});

            n.setAttribute('static-body', {});
            s.setAttribute('static-body', {});
            e.setAttribute('static-body', {});
            w.setAttribute('static-body', {});

            scene.appendChild(n);
            scene.appendChild(s);
            scene.appendChild(e);
            scene.appendChild(w);
        }
    }
});

AFRAME.registerComponent("boxes", {
    schema: {
      height: { type: "number", default: 3 },
      width: { type: "number", default: 3 },
      depth: { type: "number", default: 3 },
    },
    init: function () {
  
      //x position array
      px = [22.86, -17.35, -12.81, 0.44, -30.18,
        -25.89, 15.61, 29.68, 11.95, -15.40,
        -14.09, 34.76, 2.29, 21.77, 1.57,
        34.72, 12.04, -10.90, 6.48, 15.66];
  
      //z position array
      pz = [54.56, -4.71, 14.91, 56.74, 41.13,
        50.76, 57.84, 7.02, -5.24, -26.82,
        27.59, -35.78, 34.52, 31.32, -9.22,
        26.72, 48.90, 27.24, 9.94, 54.29 ];
  
      for (var i = 0; i < 20; i++) {
        var box = document.createElement("a-entity");
  
        //Update the position variables values from the array values.
        var posX = px[i];
        var posY = 1.5;
        var posZ = pz[i];
  
        position = { x: posX, y: posY, z: posZ };
  
        box.setAttribute("id", "box" + i);
        
        box.setAttribute("position", position);
  
        box.setAttribute("geometry", {
          primitive: "box",
          height: this.data.height,
          width: this.data.width,
          depth: this.data.depth,
        });
  
        box.setAttribute("material", {
          src: "../images/boxtexture1.jpg",
          repeat: "1 1 1",
        });
  
        box.setAttribute("static-body", {});
  
        var sceneEl = document.querySelector("#scene");
        sceneEl.appendChild(box);
      }
    },
  });