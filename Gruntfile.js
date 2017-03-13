module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/style.css': 'scss/style.scss',
                    'xi-you-ji/css/style.css': 'xi-you-ji/scss/style.scss',
                    'hong-lou-meng/css/style.css': 'hong-lou-meng/scss/style.scss',
                    'shui-hu-zhuan/css/style.css': 'shui-hu-zhuan/scss/style.scss',
                    'footer/css/style.css': 'footer/scss/style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                map: true
            },
            dist: {
                files: {
                    'css/style.css': 'css/style.css',
                    'xi-you-ji/css/style.css': 'xi-you-ji/css/style.css',
                    'hong-lou-meng/css/style.css': 'hong-lou-meng/css/style.css',
                    'shui-hu-zhuan/css/style.css': 'shui-hu-zhuan/css/style.css',
                    'footer/css/style.css': 'footer/css/style.css'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'autoprefixer']
            },
            options: {
              livereload: true
            }
        },
        connect: {
          server: {
            options: {
              port: 8080,
              hostname: '*'
            }
          }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect', 'watch']);
}

