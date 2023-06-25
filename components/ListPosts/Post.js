import { Link } from "@chakra-ui/react";
import { FiTag } from "react-icons/fi";
import { useTranslation } from "next-i18next";
import ThemeConfig from "theme/theme-config";

function Post({ title, description, categories, tags, slug }) {
  const { t } = useTranslation("post");
  return (
    <div
      className="bg-content-bg dark:bg-content-bg-d min-h-100 p-8 md:p-6 rounded-2xl"
      minH={100}
      paddingTop={8}
      paddingLeft={{ base: 4, md: 8 }}
      paddingRight={{ base: 4, md: 8 }}
      paddingBottom={8}
      borderRadius={12}
    >
      <div className="flex">
        {categories?.map(category => (
          <div
            className="bg-orange dark:bg-orange-d text-default-fg-d dark:text-default-fg rounded text-sm px-2"
            key={category}
            bgColorConfig={ThemeConfig.postCategoryBackgroundColor}
            colorConfig={ThemeConfig.highlightText}
            fontSize="sm"
            fontWeight={"medium"}
          >
            <Link href={'/category/' + category}>
              {category}
            </Link>
          </div>
        ))}
      </div>
      <p className="text-xl font-bold text-purple dark:text-purple-d mt-1">
        <Link href={'/posts/' + slug}>
          {title}
        </Link>
      </p>
      <p className="text-default-fg dark:text-default-fg-d text-md mt-2">
        {description}
      </p>
      <p className="text-default-fg dark:text-default-fg-d text-sm font-bold mt-2">
        <Link href={'/posts/' + slug}>
          {t("see_more")}
        </Link>
      </p>
      <div className="flex mt-2 gap-2">
        {tags?.map(tag => {
          return (
            <div className="flex items-center rounded-md bg-green dark:bg-green-d text-default-fg-d dark:text-default-fg px-1" key={tag}>
              <FiTag className="mr-1" size={12} />
              <span>
                <Link href={'/tag/' + tag}>
                  {tag}
                </Link>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Post;
