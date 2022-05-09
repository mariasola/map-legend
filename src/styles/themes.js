import mapTheme from './map-theme';

function createTheme(theme) {
  return {
    ...theme,
  };
}

const TYPE_MAIN = 'main';

const mainTheme = { ...createTheme(mapTheme), type: TYPE_MAIN };

export {
  mainTheme,
  TYPE_MAIN,
};
