type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
  }
  
  const fruits: IFruit[] = [
    {
      fruitId: 1,
      fruitName: 'Apel',
      fruitType: 'IMPORT',
      stock: 10
    },
    {
      fruitId: 2,
      fruitName: 'Kurma',
      fruitType: 'IMPORT',
      stock: 20
    },
    {
      fruitId: 3,
      fruitName: 'apel',
      fruitType: 'IMPORT',
      stock: 50
    },
    {
      fruitId: 4,
      fruitName: 'Manggis',
      fruitType: 'LOCAL',
      stock: 100
    },
    {
      fruitId: 5,
      fruitName: 'Jeruk Bali',
      fruitType: 'LOCAL',
      stock: 10
    },
    {
      fruitId: 6,
      fruitName: 'KURMA',
      fruitType: 'IMPORT',
      stock: 20
    },
    {
      fruitId: 7,
      fruitName: 'Salak',
      fruitType: 'LOCAL',
      stock: 150
    }
  ];
  
    // Menampilkan fruitName menggunakan forEach
    fruits.forEach(fruit => {
      console.log(fruit.fruitName);
    });
  
  // Membuat dua array terpisah untuk buah lokal dan import
  const localFruits = fruits.filter(fruit => fruit.fruitType === 'LOCAL');
  const importFruits = fruits.filter(fruit => fruit.fruitType === 'IMPORT');
  
  // Menampilkan buah lokal
  console.log('Buah Lokal:', localFruits.map(fruit => fruit.fruitName));
  
  // Menampilkan buah import
  console.log('Buah Import:', importFruits.map(fruit => fruit.fruitName));
  
  // Menghitung total stok buah untuk masing-masing tipe
  const totalStockByType = fruits.reduce((total, fruit) => {
    total[fruit.fruitType] = (total[fruit.fruitType] || 0) + fruit.stock;
    return total;
  }, {});
  
  // Menampilkan total stok buah untuk masing-masing tipe
  console.log('Total Stok Buah Lokal:', totalStockByType['LOCAL']);
  console.log('Total Stok Buah Import:', totalStockByType['IMPORT']);
  
  
  
