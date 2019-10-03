AFRAME.registerComponent('newgem',{
	init: function() {
		let numgems = Math.random()*3+1;
		let gems = [];

		let sceneEl = document.querySelector('a-scene');
		for (let i = 0; i < numgems; i++){
			gems[i] = document.createElement('a-entity');
			gems[i].setAttribute('id','newgem_'+i.toString());
			gems[i].setAttribute('gem'); //trying to apply that mixin
			// gems[i].setAttribute('geometry',{
			// 	primitive:'tetrahedron', radius:'0.1'});

			//add events, event listeners
			gems[i].addEventListener('click',sceneEl);
		}
	}

	//for disappearing gems
	remove: function() {
		this.el.removeObject3D('newgem'); //diff btwn type and component?
	}

})




    



// AFRAME.registerComponent('generate',{
// init: function(){
//   let numgems = Math.random()*3+1;
//   let gems = [];

//   let sceneEl = document.querySelector('a-scene');
//   for (let i=0; i<numgems; i++){
//     gems[i] = document.createElement('a-entity');
//     gems[i].setAttribute('id','newGem_'+i.toString());
//     gems[i].setAttribute('geometry', {
//       primitive:'tetrahedron',
//       radius:'0.1'})
//     gems[i].setAttribute('material', color: 'white')

//     //add events
//     gems[i].addEventListener('click',this); // parameters are type, listener[, options]
//     // not sure who listener is










































// creates general gem entity/component?

// https://riptutorial.com/aframe/example/30897/register-a-custom-a-frame-component



// AFRAME.registerComponent('randgen', {
//   schema: { type: 'vec3' },
//   init: function () {
//   	let gems = []; // array of gem entities.
//   	let numGems = (Math.random()*3 + 1);
//   	let sceneEl = document.querySelector('a-scene');
//   	for(let i=0; i<numGEms; i++){
//   		gems[i] = document.createElement('a-entity'); //create element/entity
//   		// create components, id, geometry, position
//   		gems[i].setAttribute('id', 'gem_'+i.toString());
//   		gems[i].setAttribute('geometry', {
//   			primitive: 'icosahedron',
//   			color: 'white',
//   			radius: '0.1'
//   		})  		// didn't take from ll. 23-29 in random-cubes

//   		// event listeners
//   		gems[i].addEventListener()


//   		sceneEl.appendChild(gems[i]);



//   	}
//   }
// })

