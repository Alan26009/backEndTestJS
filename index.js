const structure = {
    id: 1,
    name: "Electrónica",
    subcategories: [
      {
        id: 2,
        name: "Computadoras",
        subcategories: [
          { id: 5, name: "Laptops", subcategories: [] },
          { id: 6, name: "Desktops", subcategories: [] },
        ],
      },
      { id: 3, name: "Celulares", subcategories: [] },
      { id: 4, name: "Accesorios", subcategories: [] },
    ],
  };
  
  console.log(getSubcategoryPath(structure));
  
  
  function getSubcategoryPath(subCategory) {
    const result = [];
  
    function dfs(node, path) {
      const currentPath = path ? `${path}/${node.name}` : node.name;
  
      if (!node.subcategories || node.subcategories.length === 0) {
        result.push(currentPath);
        return;
      }
  
      for (const sub of node.subcategories) {
        dfs(sub, currentPath);
      }
    }
  
    dfs(subCategory, "");
    return result;
  }