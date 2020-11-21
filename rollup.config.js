import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

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
      dev: !process.env.ROLLUP_WATCH, 
      // we'll extract any component CSS out into
			// a separate file - better for performance
      css: css => {
        css.write('bundle.css');
      }
    }),

    // resolve external dependencies
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
  ]
}