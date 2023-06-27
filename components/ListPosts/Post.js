import { FiTag } from "react-icons/fi";
import { useTranslation } from "next-i18next";

function Post({ title, description, categories, tags, slug }) {
  const { t } = useTranslation("post");
  return (
    <div
      className="min-h-100 p-8 md:p-6 border-b last:border-b-0 border-purple dark:border-purple-d"
      minH={100}
      paddingTop={8}
      paddingLeft={{ base: 4, md: 8 }}
      paddingRight={{ base: 4, md: 8 }}
      paddingBottom={8}
      borderRadius={12}
    >
      <div className="flex">
        {categories?.map(category => (
          <div className="bg-orange dark:bg-orange-d text-default-fg-d dark:text-default-fg rounded text-xs px-2" key={category}>
            <a className="hover:underline underline-offset-2" href={'/category/' + category}>
              {category}
            </a>
          </div>
        ))}
      </div>
      <p className="text-xl font-bold text-green dark:text-green-d mt-1">
        <a className="hover:underline underline-offset-4" href={'/posts/' + slug}>
          {title}
        </a>
      </p>
      <p className="text-default-fg dark:text-default-fg-d text-md mt-2">
        {description}
      </p>
      <p className="text-default-fg dark:text-default-fg-d text-sm font-bold mt-2">
        <a className="hover:underline underline-offset-4" href={'/posts/' + slug}>
          {t("see_more")}
        </a>
      </p>
      <div className="flex mt-2 gap-1">
        {tags?.map(tag => {
          return (
            <div className="flex items-center rounded bg-yellow dark:bg-yellow-d text-default-fg-d dark:text-default-fg px-2 text-xs" key={tag}>
              <FiTag className="mr-1" size={12} />
              <span>
                <a className="hover:underline underline-offset-2" href={'/tag/' + tag}>
                  {tag}
                </a>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Post;
