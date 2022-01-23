import EmberRouter from '@ember/routing/router';
import config from 'ember-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('/');
  this.route('papers', { path: '/about/' });
  this.route('staplers', { path: '/my_staplers/' });
  this.route('page-not-found', { path: '/*wildcard' });
});
