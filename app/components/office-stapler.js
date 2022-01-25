import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class OfficeStaplerComponent extends Component {
  number = 100;

  @action onClickAction() {
    alert('hehe');
  }
}
