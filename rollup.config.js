import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import preprocess from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';

const isProduction = true;
export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
		format: 'iife',
		name: 'app',
    file: 'dist/bundle.js'
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !isProduction, 
      // we'll extract any component CSS out into
			// a separate file - better for performance
      css: css => {
        css.write('bundle.css');
      },
      // preprocess scss
      preprocess: preprocess()
    }),

    // resolve external dependencies
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    // minify bundle for production
    isProduction && terser()
  ]
}