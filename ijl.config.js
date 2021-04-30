const pkg = require('./package');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    "apiPath": "stubs/api",
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        },
        module: {
            rules: [
              {
                test: /\.css$/i,
                use: [
                  {
                    loader: "style-loader",
                  },
                  {
                    loader: "css-loader",
                    options: {
                        modules: {
                          mode: 'local',
                          auto: true,
                          localIdentName: isProd ?
                            '[hash:base64]'
                            : '[path]--[name]__[local]--[hash:base64:3]',
                          localIdentContext: path.resolve(__dirname, 'src'),
                          exportLocalsConvention: "camelCase",
                          exportGlobals: true,
                          /*compileType: "module",
                          mode: "local",
                          localIdentName: "[path][name]__[local]--[hash:base64:5]",
                          localIdentContext: path.resolve(__dirname, "src"),
                          //namedExport: true,
                          //exportLocalsConvention: "camelCase",
                          exportOnlyLocals: false, */
                        }
                    }
                  },
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [
                          require('postcss-import'),

                          require('postcss-for'),

                          require('postcss-simple-vars'),

                          require('postcss-custom-properties')({
                            preserve: false
                          }),

                          require('postcss-custom-media')({
                            preserve: false
                          }),

                          require('postcss-nested'),

                          require('postcss-color-function'),

                          require('autoprefixer')(),

                          require('postcss-calc'),

                          require('postcss-discard-comments'),

                          require('cssnano')({
                            preset: 'default'
                          })

                          [
                            "postcss-preset-env",
                            {
                              // Options
                            }
                          ],
                        ],
                      },
                    },
                  },
                ],
              },
            ],
          },
    },
  }
