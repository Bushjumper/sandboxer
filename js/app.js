window.Todos = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_BINDINGS: true,
  LOG_VERSION: true
});

Todos.ApplicationAdapter = DS.FixtureAdapter.extend();