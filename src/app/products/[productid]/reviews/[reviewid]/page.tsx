import {notFound, redirect} from "next/navigation";

export default async function reviewsdata({
  params,
}: {
  params: Promise<{ productid: string; reviewid: string }>;
}) {
    const {productid,reviewid} = await params
    if (parseInt(reviewid)>1000){
      notFound();
    }
    return (
        <div >
                product id is {productid} {`.. `}
                review id is {reviewid}
        </div>
    )
}
