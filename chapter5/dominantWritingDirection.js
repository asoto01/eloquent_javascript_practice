// Dominant Writing Direction
// Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom). 
// The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.

const SCRIPTS = [
  {name: "Latin", ranges: [[65, 91], [97, 123]], direction: "ltr"},
  {name: "Arabic", ranges: [[1570, 1611]], direction: "rtl"}
];

function dominantDirection(text) {
    // Use countBy to group characters by their script's direction.
    let counted = countBy(text, char => {
        let script = characterScript(char.charCodeAt(0));
        // if no script is found, defualt to "ltr" (or we could filter these out).
        return script ? script.direction : "ltr";
    }).filter(({name}) => name != null); // Remove any null/undefined directions.

    // Find the direction with the highest count.
    let dominant = counted.reduce((a,b) => a.count > b.count ? a : b);
    
    // Return the name of the dominant direction.
    return dominant.name;
}

function characterScript(code) {
    for (let script of SCRIPTS) {
        if(script.ranges.some(([from, to]) => code >= from && code < to)) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.find(c => c.name == name);
        if (!known) {
            counts.push({name, count: 1});
        } else {
            known.count++;
        }
    }
    return counts;
}

console.log(dominantDirection("Hello!")); // "ltr" (Latin script)
console.log(dominantDirection("مرحبا")); // "rtl" (Arabic script)
