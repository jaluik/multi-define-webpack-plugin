import { Compiler } from 'webpack';
import { copy } from 'fs-extra';
import { join } from 'path';

const PluginName = 'MultiDefineWebpackPlugin';

module.exports = class MultiDefineWebpackPlugin {
  apply(compiler: Compiler) {
    compiler.hooks.done.tap(PluginName, (stat) => {
      const { path: outPath } = stat.compilation.outputOptions;
      copy(outPath, join(outPath, '../demo'));
    });
  }
};
