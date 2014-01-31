var model, controller;

module("Todos controller test", {
  setup: function() {
    controller = Todos.__container__.lookup('controller:todos');
    console.log(controller);
    model = Todos.Todo.store.createRecord('todo', {});
    controller.set('model', [model]);
  },

  teardown: function() {
    controller = null;
    model = null;
  }
});

test("it has 'remaining' property which is determined by isCompleted model boolean", function() {
  model.set('isCompleted', false);
  equal(controller.get('remaining'), 1, "remaining count is 1");
  model.set('isCompleted', true);
  equal(controller.get('remaining'), 0, "remaining count is 0");
});

test("it has 'inflection' property which is determined by isCompleted model boolean", function() {
  model.set('isCompleted', false);
  equal(controller.get('inflection'), 'item', "inflection is 'item'");
  model.set('isCompleted', true);
  equal(controller.get('inflection'), 'items', "inflection is 'items'");
});
