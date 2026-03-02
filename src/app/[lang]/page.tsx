import HomeOne from "@/components/homes/home-1";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return <HomeOne dictionary={dictionary} lang={lang} />;
}
