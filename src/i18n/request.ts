import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically comes from the middleware
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !['en', 'pt', 'es', 'fr', 'de'].includes(locale)) {
    locale = 'pt';
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
