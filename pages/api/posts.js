import { connectToDatabase } from "mongodb-client/mongo-client";

async function getPosts(req, res) {
  try {
    let { db } = await connectToDatabase();
    let posts = await db
      .collection(posts)
      .find({})
      .sort({ published: -1 })
      .toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
      success: true,
    });
  } catch (error) {
    
  }
}