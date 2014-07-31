module.exports = function(grunt) {
    'use strict';

    var paths = {
        js: ['*.js', 'backend/**/*.js', 'frontend/**/*.js', '!frontend/lib/**', '!node_modules/**']
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: paths.js,
                tasks: ['jshint']
            }
        },
        jshint: {
            all: {
                src: paths.js,
                options: {
                    node: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    args: [],
                    ignore: ['frontend/**', 'node_modules/**'],
                    ext: 'js,html',
                    nodeArgs: ['--debug'],
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['jshint', 'concurrent']);
};
