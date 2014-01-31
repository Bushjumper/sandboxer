var model, controller;

module("Todo controller test", {
  setup: function() {
    controller = Todos.__container__.lookup('controller:todo');
    model = Todos.Todo.store.createRecord('todo', {});
    controller.set('model', model);
  },

  teardown: function() {
    controller = null;
    model = null;
  }
});

test("it gets isCompleted value from model", function() {
  model.set('isCompleted', true);
  equal(controller.get('isCompleted'), true, "isCompleted value from model");
});

test("it sets isCompleted value on model", function() {
  controller.set('isCompleted', true)
  equal(model.get('isCompleted'), true, "isCompleted value set on model");
});
