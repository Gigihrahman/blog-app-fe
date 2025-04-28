import { Badge } from "@/components/ui/badge";
import { Blog } from "@/types/blog";
import { FC } from "react";
import { format } from "date-fns";
import Image from "next/image";

interface BlogDetailHeaderProps {
  blog: Blog;
}
const BlogDetailHeader: FC<BlogDetailHeaderProps> = ({ blog }) => {
  console.log("cekkk", blog.thumbnail);
  return (
    <section className="mt-20 space-y-4">
      <Badge
        variant="outline"
        className="rounded-sm bg-green-100 text-green-600 capitalize"
      >
        {blog.category}
      </Badge>
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p>
        {format(new Date(blog.createdAt), "dd MM yyyy")}- {blog.user?.name}
      </p>
      <div className="relative h-[360px]">
        <Image
          src={blog.thumbnail}
          alt="thumbnail"
          className="rounded-sm object-cover"
          fill
        />
      </div>
    </section>
  );
};

export default BlogDetailHeader;
