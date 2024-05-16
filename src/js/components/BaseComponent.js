export default class BaseComponent {
  constructor({
    name,
    loadInnerComponents,
    parent,
    element,
    defaults,
    innerElements,
  }) {
    this.name = name;
    this.loadInnerComponents = loadInnerComponents;
    this.parent = parent;
    this.element = element;
    this.options = { ...defaults };
    this.innerSelectors = { ...innerElements };

    this.elements = {};
    for (const key in this.innerSelectors) {
      if (this.innerSelectors.hasOwnProperty(key)) {
        this.elements[key] = this.element.querySelectorAll(
          this.innerSelectors[key]
        );
      }
    }

    this._handlers = {};
  }

  setup() {
    console.log(`${this.name} component setup`);
  }

  init() {
    console.log(`${this.name} component initialized`);
  }

  destroy() {
    console.log(`${this.name} component destroyed`);
  }

  _getInnerComponentByName(name) {
    // Inner componentsを取得するためのメソッド
    return this[name];
  }
}
