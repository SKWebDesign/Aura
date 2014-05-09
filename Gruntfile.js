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

  connect: {
    server: {
      options: {
        port: 9001,
        hostname: 'localhost',
        keepalive:true,
        livereload: true

      }
    }
  },
  
  open: {
      dev : {
          path: 'http://127.0.0.1:9001/index.html',
          app: 'chrome'
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
      },

      html: {
          files: ['*.html','js/build/*.min.js'],
           options: {
         livereload: 
         {
            port:35729
         }
        }     
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('build', ['sass','uglify','imagemin']);
  grunt.registerTask('default', ['build','watch']);
  grunt.registerTask('server', ['open:dev','connect']);
}