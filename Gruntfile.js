module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          noCache: true
        },
        files: {
          'css/styles.css': 'scss/styles.scss',
          '_site/css/styles.css': 'scss/styles.scss'
        }
      }
    },
    jekyll: {
      server : {
              dest: '_site',
      },
    },
    watch: {
      grunt: {
        files: 'Gruntfile.js',
        tasks: ['jekyll']
      },
      css: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      jekyll: {
          files: ['*.html', '_layouts/*.html', '_includes/*.html', '_post/*.html', 'img/*'],
          tasks: ['jekyll']
      }
    },
    browserSync: {
      bsfiles: {
          src : ['_site/css/*.css', '_site/*.html', '_site/js/*.js']
      },
      options: {
          watchTask: true,
          ghostMode: {
              clicks: true,
              scroll: true,
              links: true,
              forms: true
          },
          server: {
            baseDir: '_site',
          }
        }
      },
  });

  // 3. Where we tell Grunt we plan to use this plug-in
  //grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-jekyll');
  //grunt.loadNpmTasks('grunt-autoprefixer');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal
  grunt.registerTask('build', ['sass', 'jekyll']);
  grunt.registerTask('default', ['build','browserSync', 'watch']);
};
