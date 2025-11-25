import type { UnpluginInstance } from 'unplugin';
import type { Options } from './core/options';
import { createUnplugin } from 'unplugin';
import { createFilter } from 'unplugin-utils';
import { resolveOptions } from './core/options';

export const Starter: UnpluginInstance<Options | undefined, false> = createUnplugin((rawOptions = {}) => {
  const options = resolveOptions(rawOptions);
  const filter = createFilter(options.include, options.exclude);

  const name = 'unplugin-starter';

  return {
    name,
    enforce: options.enforce,

    transformInclude(id) {
      return filter(id);
    },

    transform(code, _id) {
      return `// unplugin-starter injected\n${code}`;
    },
  };
});
