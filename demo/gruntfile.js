module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    "demo/css/styles.css": "demo/scss/styles.scss"
                }
            }
        },
        watch: {
            livereload: {
                options: { livereload: true },
                files: ['demo/css/*.css', 'demo/demo.html']
            },
            sass: {
                files: 'demo/scss/*.scss',
                tasks: ['sass']
            }
        },
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: 'img/',
                        src: ['**/*.png'],
                        // Could also match cwd line above. i.e. project-directory/img/
                        dest: 'img/compressed/',
                        ext: '.png'
                    }
                ]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'demo/js/not-jquery.min.js': 'demo/js/not-jquery.js'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'demo/css/styles.min.css': 'demo/css/styles.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['sass']);
};