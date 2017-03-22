module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            files: ['js/*.js']
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'css/style.css': 'css/main.scss'
                }
            }
        },
        cssmin: {
            dist: {
                options: {
                    banner: ''
                },
                files: {
                    'dist/css/style.min.css': ['css/style.css']
                }
            }
        },
        watch: {
            scripts: {
                files: 'css/**/*.scss',
                tasks: ['default'],
                options: {

                    spawn:false,
                    event:['all']
                },
            },
        },
        concat: {
            sooryenjs: {
                src: [
                    'js/prettify.js',
                    'js/contact-form.js',
                    'js/functions.js'
                ],
                dest: 'dist/js/main.app.js'
            }
        },
        uglify: {
            options: {
                compress: {
                    warnings: false
                },
                mangle: true,
                preserveComments: /^!|@preserve|@license|@cc_on/i
            },
            core: {
                src: '<%= concat.sooryenjs.dest %>',
                dest: 'dist/js/main.app.min.js'
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //'jshint',
    grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify']);

};
