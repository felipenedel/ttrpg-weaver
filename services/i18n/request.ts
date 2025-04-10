import {getRequestConfig} from 'next-intl/server';
import {getUserLocale} from "@/services/i18n/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  console.log("server", locale)

  return {
    locale,
    messages: (await import(`/locales/${locale}.json`)).default
  };
});
