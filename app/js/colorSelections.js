function ColorSelections() {
  
  // Car Selection

  // Car Colors
  const blueCarSelector = '#select-car-type-blue';
  const orangeCarSelector = '#select-car-type-orange';
  const redCarSelector = '#select-car-type-red';
  const blueSwatch = '#swatch-blue';
  const orangeSwatch = '#swatch-orange';
  const redSwatch = '#swatch-red';
  const blueCar = document.getElementById('car-type-blue');
  const orangeCar = document.getElementById('car-type-orange');
  const redCar = document.getElementById('car-type-red');
  
  function hide(id) {
    $(id).css({
      opacity: 0,
    });
  }

  function show(id) {
    $(id).css({
      opacity: 1,
    });
  }
  

  function addBorder(swatchId) {
    $(swatchId).addClass('selected');
  }

  function removeBorder(swatchId) {
    $(swatchId).removeClass('selected');
  }

  // When clicking BLUE
  $(blueCarSelector).click((e) => {
    show(blueCar)
    hide(orangeCar);
    hide(redCar);
    
    addBorder(blueSwatch);
    removeBorder(orangeSwatch);
    removeBorder(redSwatch);
  });

  // When clicking ORANGE
  $(orangeCarSelector).click((e) => {
    show(orangeCar)
    hide(blueCar);
    hide(redCar);

    addBorder(orangeSwatch);
    removeBorder(blueSwatch);
    removeBorder(redSwatch);
  });

  // When Clicking RED
  $(redCarSelector).click((e) => {
    show(redCar)
    hide(blueCar);
    hide(orangeCar);

    addBorder(redSwatch);
    removeBorder(blueSwatch);
    removeBorder(orangeSwatch);
  });
}

export default ColorSelections;
