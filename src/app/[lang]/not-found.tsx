import ErrorPage from "@/components/error";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function NotFound({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return <ErrorPage dictionary={dictionary} lang={lang} />;
}
