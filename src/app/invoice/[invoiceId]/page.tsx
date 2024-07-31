import { db } from "~/server/db";

export default async function InvoicePage({
  params,
}: {
  params: { invoiceId: string };
}) {
  const invoice = await db.invoice.findFirst({
    where: { id: parseInt(params.invoiceId) },
    include: { logs: true },
  });

  if (!invoice) {
    return <h1 className="text-center text-xl">Invoice not found!</h1>;
  }

  await db.timeLog.create({
    data: {
      startTime: new Date(),
      invoice: {
        connect: { id: invoice.id },
      },
    },
  });

  return (
    <div>
      <h1 className="text-center text-xl">{invoice.name}</h1>
      <h2 className="text-center text-lg text-gray-400/75">
        {invoice.description}
      </h2>
      <h3 className="text-center">
        Last Updated: {invoice.updatedAt.toLocaleString()}
      </h3>
      <h4>
        {invoice.logs.map((log) => {
          return log.endTime.toLocaleString();
        })}
      </h4>
    </div>
  );
}
