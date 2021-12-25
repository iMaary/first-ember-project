import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  //first implements
  // constructor(...args) {
  //   super(...args);
  //   this.isLarge = false;
  // }
  
  //second mode implements
  // isLarge = false;
  @tracked isLarge = false;

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
