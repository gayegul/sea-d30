'use strict';

var React = require('react');
var Fluxxor = require('fluxxor');
var actions = require('../../lib/actions');
var NotesApp = require('../../lib/NotesApp.react');
var stores = require('../../lib/stores');
var flux = new Fluxxor.Flux(stores, actions);

React.render(<NotesApp flux={flux}/>, document.body);
