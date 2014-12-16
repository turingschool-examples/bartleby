/* globals marked */

import Ember from 'ember';

export function markdownText(input) {
  return new Ember.Handlebars.SafeString(marked(input));
}

export default Ember.Handlebars.makeBoundHelper(markdownText);
