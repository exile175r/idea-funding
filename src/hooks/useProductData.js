import { useState, useEffect } from 'react';

const useProductData = (data, sectionData) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    let clonedData = [...data];

    const sectionsData = sectionData.map(section => {
      let sortedData = [...clonedData];

      switch (section.id) {
        case 'featured':
          sortedData.sort((a, b) => b.funding.percent - a.funding.percent);
          break;
        case 'recommended':
          sortedData.sort((a, b) => a.funding.percent - b.funding.percent);
          break;
        case 'closing-soon':
          sortedData.sort((a, b) => new Date(b.funding.endDate).getTime() - new Date(a.funding.endDate).getTime());
          break;
        case 'new-projects':
          sortedData.sort((a, b) => new Date(b.funding.startDate).getTime() - new Date(a.funding.startDate).getTime());
          break;
        default:
          break;
      }

      return {
        ...section,
        products: sortedData.slice(0, 5)
      };
    });

    setSections(sectionsData);
  }, [data]);

  return sections;
};

export default useProductData;
