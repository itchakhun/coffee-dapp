import { List, PageHeader } from 'antd';
import React from 'react';

const Products = () => {
  return (
    <>
      <PageHeader>Product</PageHeader>
      <List>
        {[...Array(100)].map((_, i) => (
          <List.Item key={i}>shatenihstea</List.Item>
        ))}
      </List>
    </>
  );
};

export default Products;
