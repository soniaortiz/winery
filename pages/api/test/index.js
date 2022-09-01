// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {connectMongo} from '../../../utils/connect';
import bottle from '../../../models/bottle';

export default async function handler(req, res) {
  await connectMongo();
  const BottleList = await bottle.find();
  console.log('#######', BottleList);
  res.status(200).json({ data: BottleList })
  }
  