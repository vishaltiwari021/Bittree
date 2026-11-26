import clientPromise from "@/lib/mongodb";


export async function POST(request){
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection('link');

    const doc  = await collection.findOne({handle: body.handle});

    if(doc){
        return Response.json({message:"Handle already exists", error:true, result:null, success:false});
    }

    const result = await collection.insertOne(body);

return Response.json({message:"BitTree has been created", error:false, result:result, success:"Data inserted successfully"});
}