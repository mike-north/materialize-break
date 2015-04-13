import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'mat-test/tests/helpers/start-app';

var application;

module('Acceptance: BreakImport', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /break-import', function(assert) {
  visit('/break-import');

  andThen(function() {
    assert.equal(currentURL(), '/break-import');
  });
});
