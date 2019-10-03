/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

// i want to register an object (as in java), not a component


// AFRAME.registerComponent('randGem',{
// 	/*
// 	3 properties to a component:
// 		data. info about the component derived from schema default values, mixins, entity attrs
// 		el. reference to entity element.
// 		schema. names, types, default vals of component property val(s).

// 	maybe i can make the gem a component?? that is an entity??
// 	*/















// AFRAME.registerComponent('glow',{
// 	schema:{},
// 	init:function(){},
// 	update:function(){},
// 	tick:function(){},
// 	remove:function(){},
// 	pause:function(){},
// 	play:function(){}
// })



// // v wack, found @ https://stackoverflow.com/questions/53155581/cloning-entities-in-a-frame 
// 	schema:{
// 		target:{default:'', type:'selector'},
// 		name:{default:''},
// 	}, 
// 	init: function(){
// 		var data=this.data;
// 		var el=this.el;
// 		var sceneEl=document.querySelector('a-scene');
// 		var data=this.data;
// 		data.targe.addEventListener('model-loaded',function(e));
// 		var model=e.detail.model;
// 		var subset=model.getObjectByName(data.name);
// 		for(vari=0;i<9;i++){ //can randomly generate number of extra gems
// 			var clone=subset.clone();
// 			var entity=document.createElement('a-entity');
// 			sceneEl.appendChild(entity);
// 			clone.visible=true;
// 			entity.setObject3D('clone', clone);
// 		}
// 	}
// }