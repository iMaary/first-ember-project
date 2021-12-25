import Route from '@ember/routing/route';

// import Ember from 'ember';
// export default Ember.Route.extend({

// });

export default class ApplicationRoute extends Route {
  model() {
    return 'Eu sla vei';
  }
}
