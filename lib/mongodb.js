
import { MongoClient } from 'mongodb'

const globalWithMongo = globalThis
let clientPromise = globalWithMongo._mongoClientPromise

export default function getClientPromise() {
  if (!clientPromise) {
    const uri = process.env.MONGODB_URI
    if (!uri) {
      throw new Error('Add MONGODB_URI to your environment variables')
    }

    clientPromise = new MongoClient(uri).connect()
    if (process.env.NODE_ENV === 'development') {
      globalWithMongo._mongoClientPromise = clientPromise
    }
  }

  return clientPromise
}