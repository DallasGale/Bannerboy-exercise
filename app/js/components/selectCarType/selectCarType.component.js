const SelectCarType = () =>
  `<div id="select-car-type" class="color-selector">
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
    </div>`;

export default SelectCarType;
