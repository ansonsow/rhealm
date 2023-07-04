### Table of Contents:
- [demos](#demos)
- [basic installation](#basic-installation)
- [HEX to RGB](#hex-to-rgb)
- [HEX to HSL](#hex-to-hsl)
- [RGB to HEX](#rgb-to-hex)
- [RGB to HSL](#rgb-to-hsl)
- [HSL to RGB](#hsl-to-rgb)
- [HSL to HEX](#hsl-to-hex)
- [HSL: remove units](#hsl-remove-units)
- [get hue](#hue-value-hue-name)
- [get saturation](#saturation-value-saturation-level)
- [get lightness](#lightness-value-lightness-level)

---

### Demos:
- [RGB/hex/HSL converter](https://ht-color-switcher.glitch.me)
- [random color with name & details](https://jsfiddle.net/rhizodonts/91sewgk7/show)
- [get complementary color](https://jsfiddle.net/rhizodonts/gur6o4zp/show)
- [get nearest color from a specified array of colors](https://jsfiddle.net/rhizodonts/os8v23gm/show)

---

### Basic installation
**Option 1 – Online:**
```
<script src="//rhizodonts.gitlab.io/dev-labs/@color-modes-switcher/use.js"></script>
<script src="//rhizo.gitlab.io/random/name-that-color.js"></script>
```

**Option 2 – Local / VSCode:**

The color conversion file has already been included, and you do not need to call the function where you need to use it, because it uses `window.FUNCTION_NAME`.  

Here's an example of how you would use it:
```
<Text>{HEX_TO_RGB("#bdced0")}</Text> {/* outputs 189, 206, 208 */}
```

Lastly, install [this](https://www.npmjs.com/package/@yatiac/name-that-color) dependency (for color naming):
```zsh
npm install @yatiac/name-that-color
```

Example usage of getting the name of that color:
```javascript
const ntc = require('@yatiac/name-that-color');

let sample = ntc("#bdced0").colorName;
console.log(sample);
```
:point_up_2: in addition to `.colorName`, you can also do:
- `.exactMatch` – returns true/false boolean
- `.closestColor` – returns the hex of the closest matching color from the curator's list
---

### HEX to RGB

```javascript
let string = "#bdced0";
let string_RGB = HEX_TO_RGB(string);
console.log(string_RGB); // returns: 189, 206, 208
```

---

### HEX to HSL
 ```javascript
let string = "#bdced0";

let string_HSL_formatted = HEX_TO_HSL(string);
console.log(string_HSL_formatted); // returns: 86deg, 16.8%, 77.8%

let string_HSL_raw = HEX_TO_HSL(string, "raw");
console.log(string_HSL_raw); // returns: 186, 16.8, 77.8
```

---

### RGB to HEX
 ```javascript
let string = "189, 206, 208"; // do not use the rgb() wrapper, just numbers is fine

let string_HEX = RGB_TO_HEX(string);
console.log(string_HEX); // returns: bdced0

let string_HEX_hash = RGB_TO_HEX(string, "#");
console.log(string_HEX_hash); // returns: #bdced0
```

---

### RGB to HSL
 ```javascript
let string = "189, 206, 208"; // do not use the rgb() wrapper, just numbers is fine

let string_HSL_formatted = RGB_TO_HSL(string);
console.log(string_HSL_formatted); // returns: 186deg, 16.8%, 77.8%

let string_HSL_raw = RGB_TO_HSL(string, "raw");
console.log(string_HSL_raw); // returns: 186, 16.8, 77.8
```

---

### HSL to RGB
 ```javascript
let string = "186deg, 16.8%, 77.8%"; // MUST have units, cannot be just numbers

let string_RGB = HSL_TO_RGB(string);
console.log(string_RGB); // returns: 189, 206, 208
```

---

### HSL to HEX
 ```javascript
let string = "186deg, 16.8%, 77.8%"; // MUST have units, cannot be just numbers

let string_HEX = HSL_TO_HEX(string);
console.log(string_HEX); // returns: bdced0

let string_HEX_hash = HSL_TO_HEX(string, "#");
console.log(string_HEX_hash); // returns: #bdced0
```

---

### HSL: remove units
```javascript
let hsl = "186deg, 16.8%, 77.8%";

let hsl_no_units = HSL_RAW(hsl);
console.log(hsl_no_units); // returns 186, 16.8, 77.8
```

---

### Hue value / hue name
```javascript
let result = GET_COLOR_HUE(input, mode, format);
```
- `input`: your color input, can be any mode (RGB / hex / HSL)
- `mode`: the mode of what you just entered (RGB / hex / HSL)
- `format`:
    - `"value"`: returns the color hue without units
    - `"name"`: returns the color's hue name
        - red
        - orange
        - yellow
        - green
        - blue
        - violet

Example:
```javascript:
let exampleA = GET_COLOR_HUE("189, 206, 208", "RGB", "value");
console.log(exampleA); // returns 186

let exampleB = GET_COLOR_HUE("189, 206, 208", "RGB", "name");
console.log(exampleB); // returns "blue"
```

---

### Saturation value / saturation level
```javascript
let result = GET_COLOR_SAT(input, mode, format);
```
- `input`: your color input, can be any mode (RGB / hex / HSL)
- `mode`: the mode of what you just entered (RGB / hex / HSL)
- `format`:
    - `"value"`: returns the color's saturation value without units
    - `"name"`: returns the color's saturation level
        - monochrome
        - muted
        - average
        - moderate
        - vibrant

Example:
```javascript:
let exampleA = GET_COLOR_SAT("189, 206, 208", "RGB", "value");
console.log(exampleA); // returns 16.8

let exampleB = GET_COLOR_SAT("189, 206, 208", "RGB", "name");
console.log(exampleB); // returns "muted"
```

---

### Lightness value / lightness level
```javascript
let result = GET_COLOR_LUM(input, mode, format);
```
- `input`: your color input, can be any mode (RGB / hex / HSL)
- `mode`: the mode of what you just entered (RGB / hex / HSL)
- `format`:
    - `"value"`: returns the color's lightness value without units
    - `"name"`: returns the color's lightness level
        - very dark
        - dimmed
        - average
        - moderate
        - very bright

Example:
```javascript:
let exampleA = GET_COLOR_LUM("#bdced0", "hex", "value");
console.log(exampleA); // returns 16.8

let exampleB = GET_COLOR_LUM("#bdced0", "hex", "name");
console.log(exampleB); // returns "moderate"
```
