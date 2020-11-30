// Fix bugs: https://github.com/storybookjs/presets/issues/93#issue-552909698
import '!style-loader!css-loader!sass-loader!../src/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
