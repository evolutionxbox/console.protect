module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Minify the JavaScript into the build folder
    uglify: {
      options: {
        banner: '/**\n' +
        '* @preserve <%= pkg.name %> v<%= pkg.version %> | <%= pkg.author %> | <%= pkg.license %> Licensed\n' +
        '*/\n'
      },
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