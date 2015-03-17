'use strict';

var React = require('react');
var Note = require('./Note.react')

var NoteList = React.createClass({
  render: function() {
    var notes = this.props.data.map(function(note) {
      return <Note data={note} key={note._id}/>;
    });
    return (
      <section>
        <h1>Notes:</h1>
        <ul>
          {notes}
        </ul>
      </section>
    )
  }
});

module.exports = NoteList;