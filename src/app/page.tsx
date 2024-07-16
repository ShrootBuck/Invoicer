import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";
import { type Invoice } from "@prisma/client";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

export default async function Home() {
  const session = await getServerAuthSession();
  const invoices = await db.invoice.findMany({
    where: { createdById: session?.user.id },
  });

  return (
    <div className="grid grid-cols-1 p-5 md:grid-cols-4">
      {invoices ? (
        invoices.map((invoice: Invoice) => (
          <Card className="m-5 max-w-[400px]" key={invoice.id}>
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md">{invoice.name}</p>
                <p className="text-small text-default-500">
                  Created on {invoice.createdAt.toLocaleDateString()}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                {invoice.description
                  ? invoice.description
                  : "No description provided."}
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href={`/invoice/${invoice.id}`}>
                Open Invoice
              </Link>
            </CardFooter>
          </Card>
        ))
      ) : (
        <span>lol</span>
      )}
    </div>
  );
}
