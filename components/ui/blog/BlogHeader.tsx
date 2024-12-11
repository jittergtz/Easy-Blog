import { CalendarDays, Clock } from "lucide-react";


import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { BlogPost } from "@/types/blog";



interface BlogHeaderProps {
  post: BlogPost;
}

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center text-neutral-200 space-x-4 text-sm">
        <div className="flex items-center space-x-2">
          <Avatar className="h-10 w-10 ring-2 ring-primary/20">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{post.author.name}</span>
        </div>
        <div className="flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center">
            <CalendarDays className="mr-1 h-4 w-4" />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-5xl  tracking-tight text-transparent  bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-400 mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-neutral-400">{post.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-red-100 bg-red-950/30 px-3 py-1 text-sm text-red-300 font-medium hover:bg-red-200 hover:bg-red-950/50 transition-colors"
          >
            {tag}
          </span>
         
        ))}
         <div className="h-[1px] mt-10 w-full bg-neutral-900"></div>
      </div>
    </div>
  );
}