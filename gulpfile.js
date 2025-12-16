const gulp = require('gulp');
const concat = require('gulp-concat');
const insert = require('gulp-insert');
const through2 = require('through2');
const { exec } = require('child_process');

const outputFileName = 'lib.bl.api';

gulp.task('build-types', (cb) => {
    // 先执行合并任务
    const mergeStream = gulp.src(['types/**/*.d.ts'])
        .pipe(through2.obj(function (file, _, callback) {
            let contents = file.contents.toString();
            contents = contents.replace(/declare namespace BilibilWebMinigame\s*\{/g, '');
            contents = contents.replace(/\}\s*$/g, '');
            contents = contents.trim();
            file.contents = Buffer.from(contents);
            this.push(file);
            callback();
        }))
        .pipe(concat(`${outputFileName}.d.ts`))
        .pipe(insert.prepend('/** bilbiliweb的变量命名空间 */\ndeclare namespace BilibilWebMinigame {\n'))
        .pipe(insert.append('\n}\n\n/** 将bilbiliweb的bl变量声明为全局变量 */\ndeclare const bl: BilibilWebMinigame.BL;\n\n\n/** 声网的全局变量-未接入的话请忽视 */\ndeclare const agora: BilibilWebMinigame.Agora;'))
        .pipe(gulp.dest('dist/'));

    mergeStream.on('end', () => {
        // 合并完成后执行 Prettier 格式化
        exec(`npx prettier --write dist/${outputFileName}.d.ts`, (error, stdout) => {
            if (error) {
                console.error('格式化失败:', error);
            } else {
                console.log('文件格式化完成:', stdout);
            }
            cb();
        });
    });
});

gulp.task('watch', () => {
    gulp.watch('types/**/*.d.ts', gulp.series('build-types'));
});