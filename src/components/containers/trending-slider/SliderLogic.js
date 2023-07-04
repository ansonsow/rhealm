import SliderData from "./SliderData";

let groupBy = 3;

let moduloSort = [];

// sort items into threes
for(let i=0; i<SliderData.length; i += groupBy){
    const group = SliderData.slice(i, i + groupBy);
    moduloSort.push(group);
}

let moduloSlides = [];

for(let i=0; i<moduloSort.length; i++){
	let k = i+1;
	let nb = {};
	nb.tempId = k;
	nb.tempDesc = "~"
	moduloSlides.push(nb)
}

const Slideshow2_Logic = moduloSlides;
export default Slideshow2_Logic