
import Blog from "@/components/blog";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function BlogPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <Blog dictionary={dictionary} lang={lang} />
  )
}
