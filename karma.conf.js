module.exports = function(karma) {
  karma.set({
    basePath: 'js',
      
    files: [
      "libs/jquery-1.10.2.min.js",
      "libs/handlebars-1.0.0.js",
      "libs/ember.js",
      "libs/ember-data.js",
      "libs/sinon-1.8.1.js",
      "libs/sinon-qunit-1.0.0.js",
      "app.js",
      "router.js",
      "models/*.js",
      "controllers/*.js",
      "tests/models/*.js",
      "tests/controllers/*.js",
      // "tests/views/*.js",
      "tests/routes/*.js"
    ],
      
    logLevel: karma.LOG_ERROR,
    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false,
    reporters: ["progress"],
       
    frameworks: ["qunit"]
  });
};