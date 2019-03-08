/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import Animation from './animation';
import ColorSelections from './colorSelections';
import Cta from './components/cta/cta.component';
import Hero from './components/hero/hero.component';
import Tagline from './components/tagline/tagline.component';
import Logo from './components/logo/logo.component';
import CarType from './components/carType/carType.component';
import SelectCarType from './components/selectCarType/selectCarType.component';

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
  Animation();
  
  // Include color swatch selection
  ColorSelections();
});
