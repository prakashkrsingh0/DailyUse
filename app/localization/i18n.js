import I18n from 'react-native-i18n';
// Import all locales
import en from './en.json';
import ru from './ru.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  ru,
  en,
};

export default I18n;
