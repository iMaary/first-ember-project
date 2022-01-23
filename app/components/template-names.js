import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TemplateNamesComponent extends Component {
  firstName = 'Mary';
  lastName = 'Silva';

  @action
  press(val) {
    alert('Hello! ' + val);
  }
}
