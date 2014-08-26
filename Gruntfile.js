// Generated by CoffeeScript 1.6.3
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['lib/*.js'],
      options: {
        expr: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  return grunt.registerTask('default', ['jshint']);
};