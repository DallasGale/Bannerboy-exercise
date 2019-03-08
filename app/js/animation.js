import TweenLite, { TimelineLite } from 'gsap';

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

export default Animation;
