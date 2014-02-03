var model;

module("Todo model test", {
  setup: function() {
  },

  teardown: function() {
  }
});

test('Todo has a title', function() {
  var todo = Todos.Todo.store.createRecord('todo', {title: 'My first todo'});
  var title = todo.get('title');
  equal(title, 'My first todo', "Title was " + title);
});

test('Todo has a isCompleted boolean', function() {
  var todo = Todos.Todo.store.createRecord('todo', {isCompleted: false});
  var isCompleted = todo.get('isCompleted');
  equal(isCompleted, false, "isCompleted was" + isCompleted);
});