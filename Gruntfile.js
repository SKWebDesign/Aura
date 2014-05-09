module.exports = function(grunt) {
   var Imagemin = require('imagemin');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/build/app.min.js': 'js/app.js'
        }
      }
    },

    imagemin:{
  
    dynamic: {    
    options: {                       // Target options
        optimizationLevel: 7,
        use:[Imagemin.jpegtran({ progressive: true })]
      },                     
      files: [{
        expand: true,                  
        cwd: 'images/',                   
        src: '*.{png,jpg,gif}',   
        dest: 'images/optimized/'                  
      }]
    }
  },
    
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

      uglify: {
        files: 'js/app.js',
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('build', ['sass','uglify','imagemin']);
  grunt.registerTask('default', ['build','watch']);
}