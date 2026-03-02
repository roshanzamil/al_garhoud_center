
import SingleBlog from "@/components/single-blog";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function SingleBlogPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <SingleBlog dictionary={dictionary} lang={lang} />
  )
}
