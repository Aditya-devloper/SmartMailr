// /api/clerk/webhook

import { db } from "@/server/db";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    console.log("Clerk webhook recieved", data);

    const { first_name, last_name, image_url, id, email_addresses } = data.data;

    const email = email_addresses?.[0]?.email_address;

    await db.user.create({
      data: {
        id: id,
        emailAddress: email,
        firstName: first_name,
        lastName: last_name,
        imageUrl: image_url,
      },
    });

    return new Response("User Created", { status: 200 });
  } catch (error) {
    console.log("Clerk error", error);
    return new Response("Webhook not recieved", { status: 500 });
  }
};
