// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import translations from '../public/locales/en/translation.json';

// doMock is important here so the import translations work
jest.doMock('react-i18next', () => {
  return {
    useTranslation: () => ({ t: text => translations[text] }),
  };
});

jest.doMock('./utils/i18n', () => {
  return {
    t: text => translations[text],
  };
});
