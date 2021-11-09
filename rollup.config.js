import { config } from 'dotenv';

config({
  path: './.env'
});

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import reload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import html from 'rollup-plugin-html2';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

export default () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const extensions = ['.js', '.jsx', '.ts', '.tsx'];
  return {
    input: ['src/main.jsx'],
    output: {
      format: 'cjs',
      chunkFileNames: '[name].[hash].[extname]',
      entryFileNames: '[name].js',
      dir: 'dist'
    },
    plugins: [
      !isProduction &&
        serve({
          contentBase: ['dist', 'public'],
          open: false,
          port: process.env.PORT || 3000,
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        }),
      !isProduction &&
        reload({
          watch: 'dist'
        }),
      replace({
        'process.env': JSON.stringify({
          MARVEL_API_BASE: process.env.MARVEL_API_BASE,
          MARVEL_PUBLIC_KEY: process.env.MARVEL_PUBLIC_KEY,
          MARVEL_PRIVATE_KEY: process.env.MARVEL_PRIVATE_KEY
        })
      }),
      html({
        template: './public/index.html'
      }),
      commonjs(),
      postcss(),
      resolve({
        extensions
      }),
      json(),
      babel({
        exclude: 'node_modules/**',
        extensions,
        presets: ['solid'],
        babelHelpers: 'bundled',
        babelrc: false
      }),
      terser()
    ]
  };
};
