import Service from '@ember/service';

export default class ListFruitInitializerService extends Service {
  constructor(...args) {
    super(...args);
    this.arrayOfFruit = ['apple', 'orange', 'grape'];
  }
}
