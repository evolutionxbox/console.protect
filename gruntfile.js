module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Minify the JavaScript into the build folder
    uglify: {
      scripts: {
        files: {
          'dist/console.protect.min.js' : ['src/console.protect.js']
        }
      }
    }

  });

  // Load uglify task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [
    'uglify'
  ]);
};