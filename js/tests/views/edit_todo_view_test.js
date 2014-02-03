var view;

module("Edit todo view test", {
  setup: function() {
    view = Todos.__container__.lookup('view:edit_todo');
  },

  teardown: function() {
    view = null;
  }
});

// TODO: Work out how to TDD views!