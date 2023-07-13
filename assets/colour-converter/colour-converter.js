// includes data/db of seasonal colors
// deduced from personal color;
// personal/season colors: dub.sh/ellaiskin-seasonal-color

// HOW TO USE:
// gitlab.com/rhizodonts/dev-labs/-/blob/main/%40color-modes-switcher/README.md
// OR: rhealm > assets > colour-converter > colour-converter.md

/*---------- TURN HEX TO RGB ----------*/
const HEX_TO_RGB = (hex) => {
	let r, g, b;
	if(hex.indexOf("#") > -1){
		hex = hex.replaceAll("#","")
	} else {
	
	}
	
	if(hex.length == 3){
		r = hex.slice(0,1).repeat(2);
		g = hex.slice(1,2).repeat(2);
		b = hex.slice(2,3).repeat(2);
	} else if(hex.length == 6){
		r = hex.slice(0,2);
		g = hex.slice(2,4);
		b = hex.slice(4,6);
	} else {
		console.error(`${hex} is an invalid hex code.`);
	}
	
	if(hex.length == 3 || hex.length == 6){
		r = parseInt(r, 16);
		g = parseInt(g, 16);
		b = parseInt(b, 16);
		return `${r}, ${g}, ${b}`
	} else {
		return `${hex} is an invalid hex code.`
	}	
}

/*---------- TURN RGB TO HEX ----------*/
const RGB_TO_HEX = (rgb, withHash) => {
	rgb = rgb.replaceAll(", ",",");
	let arr = rgb.split(",");
	
	let arrHex = arr.map((v) => {
		let hex = Number(v).toString(16);
		return hex.padStart(2, "0");
	});
	
	let res = withHash && withHash.trim() == "#" ? "#" + arrHex.join("") : arrHex.join("");
	
	return res
}

/*---------- TURN RGB TO HSL ----------*/
// CREDIT: John Kantner @ css-tricks
// css-tricks.com/converting-color-spaces-in-javascript
const RGB_TO_HSL = (rgb, format) => {
	rgb = rgb.replaceAll(" ","");
	let arr = rgb.split(",");
	let r = arr[0];
	let g = arr[1];
	let b = arr[2];
	
	// Make r, g, and b fractions of 1
	r /= 255;
	g /= 255;
	b /= 255;

	// Find greatest and smallest channel values
	let cmin = Math.min(r,g,b),
		cmax = Math.max(r,g,b),
		delta = cmax - cmin,
		h = 0,
		s = 0,
		l = 0;

	// Calculate hue
	// No difference
	if (delta == 0)
		h = 0;
	// Red is max
	else if (cmax == r)
		h = ((g - b) / delta) % 6;
	// Green is max
	else if (cmax == g)
		h = (b - r) / delta + 2;
	// Blue is max
	else
		h = (r - g) / delta + 4;
		h = Math.round(h * 60);

	// Make negative hues positive behind 360°
	if (h < 0)
		h += 360;

	// Calculate lightness
	l = (cmax + cmin) / 2;

	// Calculate saturation
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

	// Multiply l and s by 100
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);
	
	let res = format && format.trim() == "raw" ? `${h}, ${s}, ${l}` : `${h}deg, ${s}%, ${l}%`;

	return res
}

/*---------- TURN HSL TO RGB ----------*/
// CREDIT: John Kantner @ css-tricks
// css-tricks.com/converting-color-spaces-in-javascript
const HSL_TO_RGB = (hsl) => {
  hsl = hsl.trim().replaceAll(", ",",");
  let hsl_arr = hsl.split(",");
  
  // go through H, S, L
  // strip them of units if there are any
  // change human-readable HSL inputs into smaller units
  let newHSLstr = hsl_arr.map((v, i) => {
    if(v.endsWith("%")){
	  return parseFloat(v) / 100
	}
	
	else if(v.endsWith("deg")){
	  return parseFloat(v) % 360
	}
	
	else {
	  return parseFloat(v)
	}
  });
  
  let h = newHSLstr[0];
  let s = newHSLstr[1];
  let l = newHSLstr[2];
  
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    function convertHue(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    let normalizedHue = (h % 360) / 360; // Normalize hue value between 0 and 1

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = convertHue(p, q, normalizedHue + 1 / 3);
    g = convertHue(p, q, normalizedHue);
    b = convertHue(p, q, normalizedHue - 1 / 3);
  }
  
  let res = Math.round(r * 255) + ", " + Math.round(g * 255) + ", " + Math.round(b * 255)

  return res;
}

/*---------- TURN HSL TO HEX ----------*/
// credit: icl7126
// stackoverflow.com/a/44134328/8144506
const HSL_TO_HEX = (hsl, withHash) => {
  hsl = hsl.trim().replaceAll(", ",",");
  let hsl_arr = hsl.split(",");
  
  // change human-readable HSL inputs into smaller units
  let newHSLstr = hsl_arr.map((v) => {
    if(v.endsWith("deg")){
	  return parseFloat(v) % 360
	}
	
	else {
	  return parseFloat(v)
	}
  });
  
  let h = newHSLstr[0];
  let s = newHSLstr[1];
  let l = newHSLstr[2];
  
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };
  
  let res = withHash && withHash.trim() == "#" ? `#${f(0)}${f(8)}${f(4)}` : `${f(0)}${f(8)}${f(4)}`;
  return res
}

/*---------- TURN HEX TO HSL ----------*/
// HEX to RGB and then from RGB to HSL
const HEX_TO_HSL = (hex, format) => {
	let getRGB = HEX_TO_RGB(hex);
	let res = RGB_TO_HSL(getRGB, format);
	return res
}

/*------- STRIP HSL FROM THEIR SUFFIXES -------*/
const HSL_RAW = (hsl) => {
	hsl = hsl.replaceAll(" , ",", ");
	hsl = hsl.replace(/[^\d\., ]*/g,"");
	return hsl
}

/*------- GET HUE & RETURN HUE NAME -------*/
const GET_COLOR_HUE = (input, mode, format) => {
	let conv;
	
	// color hue names
	// obtained from: www.color-blindness.com/color-name-hue/
	let db = [
		{
			hue: 0,
			name: "red",
			name_alt: "red"
		},

		{
			hue: 15,
			name: "orange",
			name_alt: "orange red"
		},

		{
			hue: 30,
			name: "orange",
			name_alt: "dark orange"
		},

		{
			hue: 45,
			name: "yellow",
			name_alt: "amber"
		},

		{
			hue: 60,
			name: "yellow",
			name_alt: "yellow"
		},

		{
			hue: 75,
			name: "green",
			name_alt: "electric lime"
		},

		{
			hue: 90,
			name: "green",
			name_alt: "chartreuse"
		},

		{
			hue: 90,
			name: "green",
			name_alt: "chartreuse"
		},

		{
			hue: 105,
			name: "green",
			name_alt: "harlequin"
		},

		{
			hue: 120,
			name: "green",
			name_alt: "lime"
		},

		{
			hue: 135,
			name: "green",
			name_alt: "free speech green"
		},

		{
			hue: 150,
			name: "green",
			name_alt: "spring green"
		},

		{
			hue: 165,
			name: "green",
			name_alt: "medium spring green"
		},

		{
			hue: 180,
			name: "blue",
			name_alt: "aqua"
		},

		{
			hue: 195,
			name: "blue",
			name_alt: "deep sky blue"
		},

		{
			hue: 210,
			name: "blue",
			name_alt: "dodger blue"
		},

		{
			hue: 225,
			name: "blue",
			name_alt: "blue ribbon"
		},

		{
			hue: 240,
			name: "blue",
			name_alt: "blue"
		},

		{
			hue: 255,
			name: "violet",
			name_alt: "han purple"
		},

		{
			hue: 270,
			name: "violet",
			name_alt: "electric indigo"
		},

		{
			hue: 285,
			name: "violet",
			name_alt: "electric purple"
		},

		{
			hue: 300,
			name: "violet",
			name_alt: "magenta"
		},

		{
			hue: 315,
			name: "red",
			name_alt: "hot magenta"
		},

		{
			hue: 330,
			name: "red",
			name_alt: "deep pink"
		},

		{
			hue: 345,
			name: "red",
			name_alt: "torch red"
		},

		{
			hue: 360,
			name: "red",
			name_alt: "red"
		}
	]
	
	/*------------------------*/
	
	if(mode && mode.trim() !== ""){
		if(mode == "rgb" || mode == "RGB"){
			conv = RGB_TO_HSL(input)
		}
		
		else if(mode == "hex" || mode == "Hex" || mode == "HEX"){
			conv = HEX_TO_HSL(input)
		} else if(mode == "hsl" || mode == "HSL"){
			conv = input
		}
		
		// extract hue from string and remove letters
		let h = Number(conv.split(",")[0].replace(/[a-zA-Z]+/,""));
		
		/*------------------------*/
		
		let rounded;

		let lowerRound = Math.floor(h / 15) * 15;
		let higherRound = Math.ceil(h / 15) * 15;

		let lowerDiff = h - lowerRound;
		let higherDiff = higherRound - h;

		if(higherDiff < lowerDiff){
			rounded = higherRound
		} else if(lowerDiff < higherDiff){
			rounded = lowerRound
		} else {
			rounded = h
		}
		
		/*------------------------*/
		
		let hueVal = rounded;

		let getHue = db.find(obj => obj.hue === hueVal);
		let getHueName = getHue.name;
		let getHueNameAlt = getHue.name_alt;
		
		/*------------------------*/
		let newHue;
		let checkSat = GET_COLOR_SAT(input, mode, "value");
		if(checkSat == "0" || checkSat == "0.0"){
			newHue = "monochrome"
		} else {
			newHue = getHueName
		}
		
		if(format){
			if(format == "value"){
				return h
			} else {
				return newHue
			}
		} else {
			return h
		}
	
	} else {
		console.error("GET_COLOR_HUE - color mode not specified.")
	}
}//end function

/*------- GET SATURATION & RETURN SATURATION NAME -------*/
const GET_COLOR_SAT = (input, mode, format) => {
	let conv;
	
	// color saturation levels
	let db = [
		{
			saturation: 0,
			name: "monochrome"
		},

		{
			saturation: 25,
			name: "muted"
		},

		{
			saturation: 50,
			name: "average"
		},

		{
			saturation: 75,
			name: "moderate"
		},

		{
			saturation: 100,
			name: "vibrant"
		}
	]
	
	/*------------------------*/
	
	if(mode && mode.trim() !== ""){
		if(mode == "rgb" || mode == "RGB"){
			conv = RGB_TO_HSL(input)
		}
		
		else if(mode == "hex" || mode == "Hex" || mode == "HEX"){
			conv = HEX_TO_HSL(input)
		} else if(mode == "hsl" || mode == "HSL"){
			conv = input
		}
		
		// extract saturation from string and remove "%"
		let s = Number(conv.split(",")[1].replace("%",""));
		
		/*------------------------*/
		
		let rounded;

		let lowerRound = Math.floor(s / 25) * 25;
		let higherRound = Math.ceil(s / 25) * 25;

		let lowerDiff = s - lowerRound;
		let higherDiff = higherRound - s;

		if(higherDiff < lowerDiff){
			rounded = higherRound
		} else if(lowerDiff < higherDiff){
			rounded = lowerRound
		} else {
			rounded = s
		}
		
		/*------------------------*/
		
		let satVal = rounded;

		let getSat = db.find(obj => obj.saturation === satVal);
		let getSatName = getSat.name;
		
		/*------------------------*/
		
		if(format){
			if(format == "value"){
				return s
			} else {
				return getSatName
			}
		} else {
			return s
		}
	
	} else {
		console.error("GET_COLOR_SAT - color mode not specified.")
	}
}//end function


/*------- GET LUMINOSITY & RETURN LUMINOSITY NAME -------*/
const GET_COLOR_LUM = (input, mode, format) => {
	let conv;
	
	// color lumination levels
	let db = [
		{
			luminosity: 0,
			name: "very dark"
		},

		{
			luminosity: 25,
			name: "dimmed"
		},

		{
			luminosity: 50,
			name: "average"
		},

		{
			luminosity: 75,
			name: "moderate"
		},

		{
			luminosity: 100,
			name: "very bright"
		}
	]
	
	/*------------------------*/
	
	if(mode && mode.trim() !== ""){
		if(mode == "rgb" || mode == "RGB"){
			conv = RGB_TO_HSL(input)
		}
		
		else if(mode == "hex" || mode == "Hex" || mode == "HEX"){
			conv = HEX_TO_HSL(input)
		} else if(mode == "hsl" || mode == "HSL"){
			conv = input
		}
		
		// extract luminosity from string and remove "%"
		let l = Number(conv.split(",")[2].replace("%",""));
		
		/*------------------------*/
		
		let rounded;

		let lowerRound = Math.floor(l / 25) * 25;
		let higherRound = Math.ceil(l / 25) * 25;

		let lowerDiff = l - lowerRound;
		let higherDiff = higherRound - l;

		if(higherDiff < lowerDiff){
			rounded = higherRound
		} else if(lowerDiff < higherDiff){
			rounded = lowerRound
		} else {
			rounded = l
		}
		
		/*------------------------*/
		
		let lumVal = rounded;

		let getLum = db.find(obj => obj.luminosity === lumVal);
		let getLumName = getLum.name;
		
		/*------------------------*/
		
		if(format){
			if(format == "value"){
				return l
			} else {
				return getLumName
			}
		} else {
			return l
		}
	
	} else {
		console.error("GET_COLOR_LUM - color mode not specified.")
	}
}//end function

/*-------- RETURN COMPLEMENTARY COLOR --------*/
const GET_COLOR_COMPLEMENTARY = (input, mode, output) => {
	// get input mode
	let conv;
	if(mode && mode.trim() !== ""){
		if(mode == "rgb" || mode == "RGB"){
			conv = RGB_TO_HSL(input)
		}
		
		else if(mode == "hex" || mode == "Hex" || mode == "HEX"){
			conv = HEX_TO_HSL(input)
		} else if(mode == "hsl" || mode == "HSL"){
			conv = input
		}
	}
	
	// get individual HSL values (raw, no units)
	let hsl_hue = GET_COLOR_HUE(conv, "hsl");
	let hsl_sat = GET_COLOR_SAT(conv, "hsl");
	let hsl_lum = GET_COLOR_LUM(conv, "hsl");
	
	// get opposite hue
	let complementary_hue;
	hsl_hue > 360 ?
	complementary_hue = hsl_hue - 180 :
	complementary_hue = hsl_hue + 180;
	
	let complementary_hsl = `${complementary_hue}deg, ${hsl_sat}%, ${hsl_lum}%`;
	
	// get desired output format
	let output_revised;
	if(output && output.trim() !== ""){
		if(output == "rgb" || output == "RGB"){
			output_revised = HSL_TO_RGB(complementary_hsl)
		}
		
		else if(output == "hex" || output == "Hex" || output == "HEX"){
			output_revised = HSL_TO_HEX(complementary_hsl, "#")
		} else if(output == "hsl" || output == "HSL"){
			output_revised = complementary_hsl
		}
	}
	
	return output_revised
}

/*------ SEASONAL COLORS ------*/
// source: dub.sh/ellaiskin-seasonal-color

/*--- SPRING COLORS ---*/
window.spring_bright = "#e85860"
window.spring_bright_RGB = HEX_TO_RGB(spring_bright);
window.spring_bright_HSL = HEX_TO_HSL(spring_bright)
window.spring_bright_hue = GET_COLOR_HUE(spring_bright, "hex", "name")

window.spring_true = "#ffcd38"
window.spring_true_RGB = HEX_TO_RGB(spring_true);
window.spring_true_HSL = HEX_TO_HSL(spring_true)
window.spring_true_hue = GET_COLOR_HUE(spring_true, "hex", "name")

window.spring_light = "#fded9d"
window.spring_light_RGB = HEX_TO_RGB(spring_light);
window.spring_light_HSL = HEX_TO_HSL(spring_light)
window.spring_light_hue = GET_COLOR_HUE(spring_light, "hex", "name")

/*----------------------------------------*/

/*--- SUMMER COLORS ---*/
window.summer_light = "#ace5f4"
window.summer_light_RGB = HEX_TO_RGB(summer_light);
window.summer_light_HSL = HEX_TO_HSL(summer_light)
window.summer_light_hue = GET_COLOR_HUE(summer_light, "hex", "name")

window.summer_true = "#429ab2"
window.summer_true_RGB = HEX_TO_RGB(summer_true);
window.summer_true_HSL = HEX_TO_HSL(summer_true)
window.summer_true_hue = GET_COLOR_HUE(summer_true, "hex", "name")

window.summer_soft = "#ebc0dc"
window.summer_soft_RGB = HEX_TO_RGB(summer_soft);
window.summer_soft_HSL = HEX_TO_HSL(summer_soft)
window.summer_soft_hue = GET_COLOR_HUE(summer_soft, "hex", "name")

/*----------------------------------------*/

/*--- AUTUMN COLORS ---*/
window.autumn_soft = "#c8a422"
window.autumn_soft_RGB = HEX_TO_RGB(autumn_soft);
window.autumn_soft_HSL = HEX_TO_HSL(autumn_soft)
window.autumn_soft_hue = GET_COLOR_HUE(autumn_soft, "hex", "name")

window.autumn_true = "#964919"
window.autumn_true_RGB = HEX_TO_RGB(autumn_true);
window.autumn_true_HSL = HEX_TO_HSL(autumn_true)
window.autumn_true_hue = GET_COLOR_HUE(autumn_true, "hex", "name")

window.autumn_dark = "#4b5d04"
window.autumn_dark_RGB = HEX_TO_RGB(autumn_dark);
window.autumn_dark_HSL = HEX_TO_HSL(autumn_dark)
window.autumn_dark_hue = GET_COLOR_HUE(autumn_dark, "hex", "name")

/*----------------------------------------*/

/*--- WINTER COLORS ---*/
window.winter_dark = "#351c72"
window.winter_dark_RGB = HEX_TO_RGB(winter_dark);
window.winter_dark_HSL = HEX_TO_HSL(winter_dark)
window.winter_dark_hue = GET_COLOR_HUE(winter_dark, "hex", "name")

window.winter_true = "#107d7a"
window.winter_true_RGB = HEX_TO_RGB(winter_true);
window.winter_true_HSL = HEX_TO_HSL(winter_true)
window.winter_true_hue = GET_COLOR_HUE(winter_true, "hex", "name")

window.winter_bright = "#bd008e"
window.winter_bright_RGB = HEX_TO_RGB(winter_bright);
window.winter_bright_HSL = HEX_TO_HSL(winter_bright);
window.winter_bright_hue = GET_COLOR_HUE(winter_bright, "hex", "name")

/*----------------------------------------*/

window.seasonal_colors = [
	{
		name: "true autumn",
		hex: "#964919",
		rgb: "150, 73, 25",
		hsl: "23deg, 71.4%, 34.3%",
		hue: 23,
		sat: 71.4,
		lum: 34.3,
		hue_name: "orange",
		detailed_name: "Saddle Brown",
		detailed_name_alt: "Hawaiian Tan"
	},
	
	{
		name: "true spring",
		hex: "#ffcd38",
		rgb: "255, 205, 56",
		hsl: "45deg, 100%, 61%",
		hue: 45,
		sat: 100,
		lum: 61,
		hue_name: "yellow",
		detailed_name: "Sunglow",
		detailed_name_alt: "Sunglow"
	},
	
	{
		name: "soft autumn",
		hex: "#c8a422",
		rgb: "200, 164, 34",
		hsl: "47deg, 70.9%, 45.9%",
		hue: 47,
		sat: 70.9,
		lum: 45.9,
		hue_name: "yellow",
		detailed_name: "Neon Gold",
		detailed_name_alt: "Nugget"
	},
	
	{
		name: "light spring",
		hex: "#fded9d",
		rgb: "253, 237, 157",
		hsl: "50deg, 96%, 80.4%",
		hue: 50,
		sat: 96,
		lum: 80.4,
		hue_name: "yellow",
		detailed_name: "Golden Glow",
		detailed_name_alt: "Flavescent"
	},
	
	{
		name: "dark autumn",
		hex: "#4b5d04",
		rgb: "75, 93, 4",
		hsl: "72deg, 91.8%, 19%",
		hue: 72,
		sat: 91.8,
		lum: 19,
		hue_name: "green",
		detailed_name: "Highlands Moss",
		detailed_name_alt: "Verdun Green"
	},
	
	{
		name: "true winter",
		hex: "#107d7a",
		rgb: "16, 125, 122",
		hsl: "178deg, 77.3%, 27.6%",
		hue: 178,
		sat: 77.3,
		lum: 27.6,
		hue_name: "blue",
		detailed_name: "Teal",
		detailed_name_alt: "Surfie Green"
	},
	
	{
		name: "true summer",
		hex: "#429ab2",
		rgb: "66, 154, 178",
		hsl: "193deg, 45.9%, 47.8%",
		hue: 193,
		sat: 45.9,
		lum: 47.8,
		hue_name: "blue",
		detailed_name: "Aquatic Blue",
		detailed_name_alt: "Boston Blue"
	},
	
	{
		name: "light summer",
		hex: "#ace5f4",
		rgb: "172, 229, 244",
		hsl: "193deg, 76.6%, 81.6%",
		hue: 193,
		sat: 76.6,
		lum: 81.6,
		hue_name: "blue",
		detailed_name: "Atmospheric Soft Blue",
		detailed_name_alt: "Ice Cold"
	},
	
	{
		name: "dark winter",
		hex: "#351c72",
		rgb: "53, 28, 114",
		hsl: "257deg, 60.6%, 27.8%",
		hue: 257,
		sat: 60.6,
		lum: 27.8,
		hue_name: "violet",
		detailed_name: "Meteorite",
		detailed_name_alt: "Persian Indigo"
	},
	
	{
		name: "bright winter",
		hex: "#bd008e",
		rgb: "189, 0, 142",
		hsl: "315deg, 100%, 37.1%",
		hue: 315,
		sat: 100,
		lum: 37.1,
		hue_name: "red",
		detailed_name: "Vibrant Velvet",
		detailed_name_alt: "Flirt"
	},
	
	{
		name: "soft summer",
		hex: "#ebc0dc",
		rgb: "235, 192, 220",
		hsl: "321deg, 51.8%, 83.7%",
		hue: 321,
		sat: 51.8,
		lum: 83.7,
		hue_name: "red",
		detailed_name: "Starlet Pink",
		detailed_name_alt: "Vanilla Ice"
	},
	
	{
		name: "bright spring",
		hex: "#e85860",
		rgb: "232, 88, 96",
		hsl: "357deg, 75.8%, 62.7%",
		hue: 357,
		sat: 75.8,
		lum: 62.7,
		hue_name: "red",
		detailed_name: "Light Carmine Pink",
		detailed_name_alt: "Mandy"
	}
]

/*--------------------*/

export default {
	HEX_TO_RGB,
	RGB_TO_HEX,
	RGB_TO_HSL,
	HSL_TO_RGB,
	HSL_TO_HEX,
	HEX_TO_HSL,
	HSL_RAW,
	GET_COLOR_HUE,
	GET_COLOR_SAT,

	GET_COLOR_LUM,
	GET_COLOR_COMPLEMENTARY
}