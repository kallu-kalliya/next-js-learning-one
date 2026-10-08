import { Metadata } from "next";

type Props = {
  params: Promise<{ productid: string }>;
};


export default async function product({ params }: Props) {
  const { productid } = await params;
  // const productid  = (await params).productid
  return <div>product details of .. {productid}</div>;
}
