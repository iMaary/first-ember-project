import Component from '@glimmer/component';

export default class OfficeStaplerComponent extends Component {
  number = 100;

  click() {
    alert('hehe');
    return true;
  }
}
