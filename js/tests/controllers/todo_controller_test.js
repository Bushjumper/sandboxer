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

test("isEditing is false by default", function(){
  equal(controller.get('isEditing'), false, "isEditing is false by default");
});

test("isEditing is true after editTodo action", function(){
  controller.send('editTodo');
  equal(controller.get('isEditing'), true, "isEditing is true");
});

test("accepting changes after entering a valid new item title", function(){
  model.set('title', 'Unedited');
  controller.set('isEditing', true);

  controller.set('title', 'Edited');

  this.spy(model, "save");

  controller.send('acceptChanges');

  equal(controller.get('isEditing'), false, "isEditing is reverted to false");
  equal(model.get('title'), 'Edited', "title is saved on the model");
  ok(model.save.calledOnce, "model is saved");
});

test("accepting changes entering an empty item title", function(){
  model.set('title', 'Unedited');
  controller.set('isEditing', true);

  controller.set('title', '');

  this.spy(model, "save");

  controller.send('acceptChanges');

  equal(controller.get('isEditing'), false, "isEditing is reverted to false");
  ok(model.save.notCalled, "model is not saved");
});

