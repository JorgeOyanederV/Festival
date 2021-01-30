const sass = require('gulp-sass'); // sass puede ir sin las llaves si es solo un elemento y es solo una funcion en el paquete
const { series, src, dest, watch} = require('gulp');
// funcion que compila css
function css() {
    return src('src/scss/app.scss')
    .pipe( sass())
    .pipe( dest('./build/css'))
}

function watchArchivos(){
    watch('src/scss/**/*.scss', css)
    // watch(direccion, funcion)
}
exports.watchArchivos = watchArchivos;
exports.css = css;