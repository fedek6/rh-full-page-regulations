module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        /**
         * Paths
         */
        deploy_dst: 'demo',
        src: 'src',

        sass: {
            dist: {
                files: {
                    // Main CSS file
                    '<%= deploy_dst %>/css/main.css': '<%= src %>/scss/main.scss'
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    // Main CSS
                    '<%= deploy_dst %>/css/main.min.css': '<%= deploy_dst %>/css/main.css',
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    '<%= deploy_dst %>/js/main.min.js': '<%= src %>/js/main.js'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'uglify', 'cssmin']);

};
