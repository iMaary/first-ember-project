import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FruitListComponent extends Component {
  constructor(...args) {
    super(...args);
    this.arrayOfFruit = 'apple orange grate'.split(' ');
  }
  // arrayOfFruit = ['apple', 'orange', 'grape'];

  @action
  add(val) {
    this.arrayOfFruit.pushObject(val);
  }
}
