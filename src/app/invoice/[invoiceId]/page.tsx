import { db } from "~/server/db";

export default async function InvoicePage({
  params,
}: {
  params: { invoiceId: string };
}) {
  const invoice = await db.invoice.findUnique({
    where: { id: parseInt(params.invoiceId) },
  });

  if (!invoice) {
    return <p>invoice not found</p>;
  }

  return (
    <div>
      <h1 className="text-center text-xl">{invoice.name}</h1>
      <h2 className="text-center text-lg text-gray-400/75">
        {invoice.description}
      </h2>
      <h3>Last Updated: {invoice.updatedAt.toLocaleString()}</h3>
    </div>
  );
}
