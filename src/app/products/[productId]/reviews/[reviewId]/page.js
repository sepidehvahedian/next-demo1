import { notFound } from "next/navigation";
import React from "react";

function ReviewDetail({ params }) {
  if (params.reviewId > 100) {
    notFound();
  }
  return (
    <div>
      Review{params.productId} for product {params.reviewId}
    </div>
  );
}

export default ReviewDetail;
