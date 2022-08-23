import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const { firstName} = req.body;

  const result = await prisma.test100.create({
    data: {
      email: firstName
    },
  });
  res.json(result);
}
