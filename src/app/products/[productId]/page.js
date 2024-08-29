import React from "react";

function ProductDetailPage({ params }) {
  console.log(params);
  return <div>ProductDetailPage{params.productId}</div>;
}

export default ProductDetailPage;
