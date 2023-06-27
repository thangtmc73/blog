import Post from "./Post";

export default function ListPosts({ title, posts }) {
  return (
    <div
      className="ml-2 mr-2"
    >
      {title && (
        <p className="text-2xl font-bold ml-4 md:ml-0 mb-4 text-cyan dark:text-cyan-d">
          {title}
        </p>
      )}
      {posts && posts.length > 0 ? (
        <div className="flex flex-col px-4 md:px-0" gap={2}>
          {posts.map((post, i) => {
            const { title, description, date, categories, tags, slug } = post;
            return (
              <Post
                key={i}
                title={title}
                description={description}
                date={date}
                categories={categories}
                slug={slug}
                tags={tags}
              />
            );
          })}
        </div>
      ) : (
        <div className="mt-3">
          <p className="text-2xl text-center">
            {"Không có bài viết nào"}
          </p>
        </div>
      )}
    </div>
  )
}
