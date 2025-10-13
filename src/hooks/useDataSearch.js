const searchData = (products, searchTerm) => {
  if (!searchTerm) return [];

  const term = searchTerm.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term) ||
    product.tags.join(' ').toLowerCase().includes(term)
  );
};

export default searchData;