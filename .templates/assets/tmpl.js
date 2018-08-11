;(function (scope) {
  'use strict';

  var module = {
    name: <%- name %>
  };

  scope['<%- name %>'] = module;
})(window);