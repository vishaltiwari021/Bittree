import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";

export default function Page({ params }) {
  return (
    <Suspense fallback={null}>
      <HandlePage params={params} />
    </Suspense>
  );
}

async function HandlePage({ params }) {
  const { handle } = await params;
  await connection();

  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("link");

  const item = await collection.findOne({ handle: handle });
  if (!item) {
    return notFound();
  } 

  return (
    <div className="flex min-h-screen items-start py-10 justify-center bg-purple-300">
      <div className="photo flex flex-col items-center ">
        <img
          src={item.pic}
          alt="image not found"
          className="h-25 rounded-2xl"
        />
        <span className="text-lg font-bold">@{handle}</span>
        <span className="desc items-center w-80">{item.desc}</span>
        <div className="links flex flex-col gap-2 mt-4">
          {item.links.map((item, index) => {
            return (
              <Link key={index} href={item.link}> <div
                
                className="bg-white rounded-2xl py-3 px-6 text-lg shadow-olive-400 min-w-[290px] justify-center flex font-medium hover:bg-gray-100"
              >
               {item.linkText}
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
