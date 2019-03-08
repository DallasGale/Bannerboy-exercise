// Components

// Car Type
const CarType = () => `
    <img id="car-type-blue" class="car__type  car__type--blue" src="images/mini_front_colors-blue.png" alt="The New Mini Cooper 2 - Blue" />
    <img id="car-type-orange" class="car__type  car__type--orange" src="images/mini_front_colors-orange.png" alt="The New Mini Cooper 2 - Orange" />
    <img id="car-type-red" class="car__type  car__type--red" src="images/mini_front_colors-red.png" alt="The New Mini Cooper 2 - Red" />
`;

// Cta
const Cta = () => `
    <div id="cta" class="cta">
        <img class='cta__img' src='images/cta.png' alt='cta' />
    </div>
`;

// Hero
const Hero = () => `
    <img id="hero-1" class="hero__one" src="images/car_1.png" alt="The New Mini Cooper 2" />
    <img id="hero-2" class="hero__two" src="images/car_2.png" alt="The New Mini Cooper 2" />
    <img id="hero-3" class="hero__three" src="images/car_3.png" alt="The New Mini Cooper 2" />
    <img id="hero-wheel-left" class="hero__wheel  hero__wheel--left" src="images/wheel.png" alt="Wheel" />
    <img id="hero-wheel-right" class="hero__wheel  hero__wheel--right" src="images/wheel.png" alt="Wheel" />
`;

// Logo
const Logo = () => `
    <div class="logo logo__small" id="logo">
        <img id="logo-image" class="logo__img" src="images/mini_logo.png" alt-"Mini />
    </div>
    <div class="logo logo__large" id="logo-large">
        <img id="logo-image-large" class="logo__img" src="images/mini_logo.png" alt-"Mini />
    </div>
`;

// Select Car Type
const SelectCarType = () => `
<div id="select-car-type" class="color-selector">
    <img class="color-selector__text" src="images/change-color-text.png" alt="Change Color" />
    <ul class="color-selector__list">
        <li class="color-selector__list-item">
            <button id="select-car-type-blue" class="color-selector__swatch">
                <img id="swatch-blue" class="color-selector__swatch-image  selected" src="images/color-selector-blue.png" alt="Select Blue" />
            </button>
        </li>
        <li class="color-selector__list-item">
            <button id="select-car-type-orange" class="color-selector__swatch">
                <img id="swatch-orange" class="color-selector__swatch-image" src="images/color-selector-orange.png" alt="Select Orange" />
            </button>
        </li>
        <li class="color-selector__list-item">
            <button id="select-car-type-red" class="color-selector__swatch">
                <img id="swatch-red" class="color-selector__swatch-image" src="images/color-selector-red.png" alt="Select Red" />
            </button>
        </li>
    </ul>
</div>
`;

// Tagline
const Tagline = () => `
    <div id="tagline-one" class="tagline  tagline__one">
        <img class="tagline__img" src='images/tagline-one.png' alt="The New Mini Cooper 2" />
    </div>
    <div id="tagline-two" class="tagline  tagline__two">
        <img class="tagline__img" src='images/tagline-two.png' alt="The New Mini Cooper 2" />
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Set Content
  const content = document.getElementById('content');
  content.insertAdjacentHTML('afterBegin', Tagline());
  content.insertAdjacentHTML('afterBegin', Cta());
  content.insertAdjacentHTML('afterBegin', Logo());
  content.insertAdjacentHTML('afterbegin', CarType());
  content.insertAdjacentHTML('afterbegin', SelectCarType());

  // Set Hero
  const hero = document.getElementById('hero');
  hero.insertAdjacentHTML('afterbegin', Hero());

  // Include entire animations

  function Animation() {
    // Colors
    const blue = 'rgb(7, 162, 212)';
    const orange = 'rgb(221, 134, 1)';
    const red = 'rgb(147, 18, 27)';

    // Elements
    const banner = document.getElementById('banner');
    const canvas = document.getElementById('canvas');
    const taglineOne = document.getElementById('tagline-one');
    const taglineTwo = document.getElementById('tagline-two');
    const cta = document.getElementById('cta');
    const logoWrapper = document.getElementById('logo');
    const logoLargeWrapper = document.getElementById('logo-large');
    const heroOne = document.getElementById('hero-1');
    const heroTwo = document.getElementById('hero-2');
    const heroThree = document.getElementById('hero-3');
    const blueCar = document.getElementById('car-type-blue');
    const selectCarType = document.getElementById('select-car-type');
    const tl = new TimelineLite();

    // Frame #1
    tl
      // Banner
      .to(banner, 0, { background: blue })

      // Hero
      .to(hero, 1, {
        left: 0,
        opacity: 1,
        ease: Expo.easeOut,
      })

      // Tagline
      .to(
        taglineOne,
        1,
        {
          transform: 'scale(1)',
          opacity: 1,
          ease: Expo.easeOut,
        },
        '-=0.5'
      )

      // CTA
      .to(
        cta,
        1,
        {
          opacity: 1,
        },
        '-=0.5'
      )

      // Logo - Small
      .to(
        logoWrapper,
        0.3,
        {
          opacity: 1,
          transform: 'scale(1)',
          ease: Expo.easeOut,
        },
        '-=0.5'
      )

      // Frame #2

      // Tagline #1
      .to(
        taglineOne,
        0.3,
        {
          opacity: 0,
        },
        'taglineOneEnd+=0.3'
      )

      // Canvas
      .to(
        canvas,
        0.3,
        {
          backgroundColor: orange,
        },
        'taglineOneEnd+=0.5'
      )

      // Banner
      .to(
        banner,
        0.3,
        {
          background: orange,
        },
        'taglineOneEnd+=0.5'
      )

      // Hero car #1 - disappears
      .to(
        heroOne,
        0.3,
        {
          opacity: 0,
        },
        'taglineOneEnd+=0.5'
      )

      // Hero car #2 - appears
      .to(
        heroTwo,
        0.3,
        {
          opacity: 1,
        },
        'taglineOneEnd+=0.5'
      )

      // Tagline #2
      .to(
        taglineTwo,
        1,
        {
          transform: 'scale(1)',
          opacity: 1,
          display: 'block',
          ease: Expo.easeOut,
        },
        'taglineOneEnd+=0.5'
      )

      // Frame #3
      // Canvas
      .to(
        canvas,
        0.3,
        {
          backgroundColor: red,
        },
        'taglineOneEnd+=2.5'
      )

      // Banner
      .to(
        banner,
        0.3,
        {
          background: red,
        },
        'taglineOneEnd+=2.5'
      )

      // Hero car #1 - disappears
      .to(
        heroTwo,
        0.3,
        {
          opacity: 0,
        },
        'taglineOneEnd+=2.5'
      )

      // Hero car #2 - appears
      .to(
        heroThree,
        0.3,
        {
          opacity: 1,
        },
        'taglineOneEnd+=2.5'
      )

      // Frame #4

      // Canvas
      .to(banner, 0, {
        padding: 10,
      })
      .to(
        canvas,
        0.5,
        {
          backgroundColor: 'black',
        },
        'curtain+=2.0'
      )

      // Banner
      .to(
        banner,
        0.3,
        {
          background: blue,
        },
        'curtain+=2.0'
      )

      // Hero Wrapper
      .to(
        hero,
        1,
        {
          left: 300,
          opacity: 0,
          ease: Expo.easeOut,
        },
        'curtain+=1.9'
      )

      // Hero Car #1
      .to(
        heroOne,
        0.5,
        {
          opacity: 0,
        },
        'curtain+=2.0'
      )

      // Tagline #2
      .to(
        taglineTwo,
        0.5,
        {
          opacity: 0,
          ease: Expo.easeOut,
        },
        'curtain+=2.0'
      )

      // CTA
      .to(
        cta,
        0.5,
        {
          opacity: 0,
        },
        'curtain+=2.0'
      )

      // Logo - large
      .to(
        logoLargeWrapper,
        0.5,
        {
          opacity: 1,
        },
        'curtain+=2.5'
      )

      // Logo - small
      .to(
        logoWrapper,
        0.3,
        {
          opacity: 0,
        },
        'curtain+=2'
      )

      // Frame #5

      // Logo - large
      .to(
        logoLargeWrapper,
        0.5,
        {
          opacity: 0,
        },
        '+=1.0'
      )

      // Car Type - blue
      .to(
        blueCar,
        1,
        {
          opacity: 1,
        },
        'cartype'
      )

      // Select Car Type
      .to(
        selectCarType,
        1,
        {
          opacity: 1,
          visibility: 'visible',
        },
        'cartype'
      )

      // CTA
      .to(
        cta,
        1,
        {
          opacity: 1,
        },
        'cartype'
      )

      .to(
        logoWrapper,
        1,
        {
          opacity: 1,
        },
        'cartype'
      );
  }

  // Include color swatch selection
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
    $(blueCarSelector).click(e => {
      show(blueCar);
      hide(orangeCar);
      hide(redCar);

      addBorder(blueSwatch);
      removeBorder(orangeSwatch);
      removeBorder(redSwatch);
    });

    // When clicking ORANGE
    $(orangeCarSelector).click(e => {
      show(orangeCar);
      hide(blueCar);
      hide(redCar);

      addBorder(orangeSwatch);
      removeBorder(blueSwatch);
      removeBorder(redSwatch);
    });

    // When Clicking RED
    $(redCarSelector).click(e => {
      show(redCar);
      hide(blueCar);
      hide(orangeCar);

      addBorder(redSwatch);
      removeBorder(blueSwatch);
      removeBorder(orangeSwatch);
    });
  }
});
