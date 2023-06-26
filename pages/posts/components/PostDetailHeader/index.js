import dayjs from "dayjs";
import { FiTag } from "react-icons/fi";
import { useTranslation } from "next-i18next";

function PostDetailHeader({ title, description, date, categories, tags }) {
  const { t } = useTranslation("post");
  return (
    <div className="px-4 py-8">
      <p className="text-cyan dark:text-cyan-d text-3xl font-bold">
        {title}
      </p>
      {description && (
        <p className="text-default-fg dark:text-default-fg-d text-md mt-4">
          {description}
        </p>
      )}
      <div className="flex mt-2 gap-2">
        {categories?.map(category => {
          return (
            <div className="bg-orange dark:bg-orange-d text-default-fg-d dark:text-default-fg rounded text-xs px-2" key={category}>
              <a className="hover:underline underline-offset-2" href={'/category/' + category}>
                {category}
              </a>
            </div>
          );
        })}
        {tags?.map(tag => {
          return (
            <div className="flex items-center rounded bg-yellow dark:bg-yellow-d text-default-fg-d dark:text-default-fg px-2 text-xs" key={tag}>
              <FiTag className="mr-1" size={12} />
              <a className="hover:underline underline-offset-2" href={'/tag/' + tag}>
                {tag}
              </a>
            </div>
          );
        })}
      </div>
      <p className="text-default-fg dark:text-default-fg-d mt-3 text-md">
        {t("written_at")} <b>{dayjs(date).format("DD-MM-YYYY")}</b>
      </p>
    </div>
  )
}

export default PostDetailHeader
