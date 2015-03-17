'use strict';

var React = require('react');
var Fluxxor = require('fluxxor');
var NoteForm = require('./NoteForm.react');
var NoteList = require('./NoteList.react');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var NotesApp = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('NoteStore')],

  getStateFromFlux: function() {
    return this.getFlux().store('NoteStore').getState();
  },
  render: function() {
    return (
      <main>
        <NoteForm />
        <NoteList data={this.state.notes} />
      </main>
    )
  }
});

module.exports = NotesApp;
