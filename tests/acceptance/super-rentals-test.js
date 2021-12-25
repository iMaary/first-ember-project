import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  // test('visiting /super-rentals', async function (assert) {
  //   await visit('/super-rentals');
  //   assert.strictEqual(currentURL(), '/super-rentals');
  // });

  test('visiting /', async function (assert) {
    await visit('/');

    // If is it following the correct route
    assert.equal(currentURL(), '/');
    // New tests to verify navbar validations
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    // Searching for the text in h2 tag
    assert.dom('h2').hasText('Welcome to Super Rentals!');

    // and searching for the text in button from jumbo class
    assert.dom('.jumbo a.button').hasText('About Us');
    // Accessing the button URL
    await click('.jumbo a.button');

    // and checking if the current URL is being for about route
    assert.equal(currentURL(), '/about');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    // New tests to verify navbar validations
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    // End-Navbar-Tests
    assert.dom('h2').hasText('About Super Rentals');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/getting-in-touch');
  });

  test('visiting getting-in-touch', async function (assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    // New tests to verify navbar validations
    assert.dom('nav').exists();
    assert.dom('h1').hasText('SuperRentals');
    // End-Navbar-Tests
    assert.dom('h2').hasText('Contact Us');

    assert.dom('.jumbo a.button').hasText('About');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  // Testing the whole navbar functionalities
  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('SuperRentals');
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-contact').hasText('Contact');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.equal(currentURL(), '/getting-in-touch');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});
