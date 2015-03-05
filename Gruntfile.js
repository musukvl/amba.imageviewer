module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';\n'
            },
            js: {
                src: ['src/log.js', 'src/jquery.drags.js', 'src/amba.imageviewer.js'],
                dest: 'amba.imageviewer.js'
            }
        },
        less: {
            development: {
                options: {
                    paths: ["./src"],
                    yuicompress: true
                },
                files: {
                    "amba.imageviewer.css": "./src/amba.imageviewer.less"
                }
            }
        },
        uglify: {
            min: {
                options: {
                    report: 'gzip',
                    sourceMap: true
                },
                files: {
                    'amba.imageviewer.min.js': ['amba.imageviewer.js']
                }
            }
        },
        copy: {
            libs: {
              expand: true,
              flatten: true,
              src: ['./bower_components/jquery/dist/jquery.min.js', './bower_components/jquery-mousewheel/jquery.mousewheel.min.js'],
              dest: './demo'
              
            },
            demo: {
                expand: true,
                flatten: true,
                src: ['amba.*.js', 'amba.*.css'],
                dest: './demo'
            }
        }
    });

    // Load the plugin that provides the 'uglify' task.

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // Default task(s).
    grunt.registerTask('default', ['concat', 'less', 'uglify', 'copy:demo', 'copy:libs' ]);

};