'use strict';

var NoteStore = require('./NoteStore.flux');

var stores = {
  NoteStore: new NoteStore()
};

module.exports = stores;