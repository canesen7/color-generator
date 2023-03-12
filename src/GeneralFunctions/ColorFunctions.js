// Generates Colours by reference colour
export const generateColours = (colour, colours) => {
  let generatedColours = [];

  colour = colour[0] === "#" ? colour : "#" + colour

  for (let i = 0; i < 7; i++) {
    if (colours[i] && colours[i].locked === true) {
      generatedColours.push(colours[i])
    } else {
      generatedColours.push(shadeColor(colour, i * -10))
    }
  }

  return generatedColours;
};

// Generates colour by shade
export const shadeColor = (color, percent) => {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    let RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
    let GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
    let BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

    return {color: "#" + RR + GG + BB, locked: false} 
  }