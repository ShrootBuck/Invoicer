export default function InvoicePage({
  params,
}: {
  params: { invoiceId: string };
}) {
  return <div>My Invoice: {params.invoiceId}</div>;
}
