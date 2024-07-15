import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

export default async function Home() {
  const session = await getServerAuthSession();
  const invoices = await db.invoice.findMany({
    where: { createdById: session?.user.id },
  });

  return (
    <div>
      {invoices ? (
        invoices.map((invoice) => (
          <div key={invoice.id}>{JSON.stringify(invoice)}</div>
        ))
      ) : (
        <span>lol</span>
      )}
    </div>
  );
}
