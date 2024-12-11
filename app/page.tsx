import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { posts } from "@/data/posts";
import { ArrowRight, CalendarDays, ChevronLeft, Citrus, Clock, Ghost, Smile, Wine } from "lucide-react";
import Link from "next/link";




export const metadata = {
  title: "Latest News and Updates",
  description: "Stay up to date with our latest news, features, and improvements.",
};

export default async function Home() {
  return (

    <main className="min-h-screen flex flex-col items-center   bg-gradient-to-l from-[#000] via-[#080808] to-[#000]">
       
       <nav className="h-12 px-5 gap-5 flex items-center max-w-7xl w-full">
         <span className="text-zinc-200">Easy Blog</span>
        </nav>

        <div className="flex gap-2 flex-col items-center">
          <h1 className="text-5xl gap-2 flex items-center tracking-tight leading-1 py-1 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-800">
            Easy Blog
            <div className="relative  flex justify-center items-center ">
             <Wine size={40} className="text-[#7a6266] absolute top-0 left left-1/2 -translate-x-1/2"/> 
            <div className="blur-xl abs size-8 z-0 rounded-full bg-[#ee5269]"></div>
            </div>
            </h1>
          <p className="text-zinc-400">Create Blog post's without headache.</p>
        </div>

   
 
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-light text-zinc-200 mb-8">Latest News</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Link href={`/post-${index + 1}`} key={index} className="group">
            <div className="h-full border-neutral-900 bg-neutral-900 p-6 transition-colors hover:bg-neutral-900/50">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <span className=" text-white">{post.author.name}</span>
              </div>
              
              <h2 className="text-2xl  text-neutral-200 font-semibold mb-2 ">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground  text-white mb-4">
                {post.description}
              </p>
              
              <div className="flex items-center  text-white justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex  items-center">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </time>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    </main>
  );
}