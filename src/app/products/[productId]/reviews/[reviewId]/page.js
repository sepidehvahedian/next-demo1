import React from "react";

function ReviewDetail({ params }) {
  console.log(params);
  return <div>ReviewDetail{params.productId}</div>;
}

export default ReviewDetail;
