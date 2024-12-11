import { Metadata } from "next";
import ReactMarkdown from "react-markdown";



import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { posts } from "@/data/posts";
import { Separator } from "@/components/ui/separator";
import { BlogHeader } from "@/components/ui/blog/BlogHeader";
import Image from "next/image";



interface BlogPageProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string) {
  const postNumber = parseInt(slug.replace("post-", ""), 10);
  const post = posts[postNumber - 1];
  
  if (!post) {
    notFound();
  }
  
  return post;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await getBlogPost(params.slug);

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-r from-[#000] via-[#080808] to-[#000]">
        <nav className="h-20 px-5 flex items-center max-w-5xl w-full">
            <Link href={"/"}>
            <ChevronLeft className="text-neutral-500 hover:text-white duration-200" size={22}/>
            </Link>
        </nav>
    <article className="container mx-auto px-4 py-12 max-w-3xl">
    
        <BlogHeader post={post} />
        
    
        <div className="prose mt-10 prose-lg dark:prose-invert max-w-none">
            {post.images && (
              <>
           {post.images.map((image, index) => (
               <Image
                key={index}
                src={image}
                alt={`Blog image ${index + 1}`}
                className="rounded-lg my-2 mb-10 shadow-md"
                width={1920}
                height={1080}
                />
            ))}
            </> 
           )}
          <ReactMarkdown
               components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-neutral-400 to-neutral-100 bg-clip-text text-transparent">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl tracking-tight text-transparent  bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-400 mt-8 mb-4">
                    {children}
                  </h2>
                ),
                ul: ({ children }) => (
                  <ul className="my-6 ml-6 list-disc text-[#ffffff] marker:text-zinc-500 [&>li]:mt-2">
                    {children}
                  </ul>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-neutral-300">
                    {children}
                  </strong>
                ),
                p: ({ children }) => (
                    <p className=" text-neutral-300">
                      {children}
                    </p>
                  ),
              }}
            >{post.content}</ReactMarkdown>
        </div>
    
    </article>
    </main>
  );
}