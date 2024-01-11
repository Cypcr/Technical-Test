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
  
  // 1
  const localFruits = fruits.filter(fruit => fruit.fruitType === 'LOCAL');
  const importFruits = fruits.filter(fruit => fruit.fruitType === 'IMPORT');
  
  // 2.a
  console.log('Buah Lokal:', localFruits.map(fruit => fruit.fruitName));
  
  // 2.b
  console.log('Buah Import:', importFruits.map(fruit => fruit.fruitName));
  
  // 2.c
  const totalStockByType = fruits.reduce((total, fruit) => {
    total[fruit.fruitType] = (total[fruit.fruitType] || 0) + fruit.stock;
    return total;
  }, {});
  
  // 3
  console.log('Total Stok Buah Lokal:', totalStockByType['LOCAL']);
  console.log('Total Stok Buah Import:', totalStockByType['IMPORT']);
  
  //Komentar 
//- Pada penulisan Kode di objek kedua dan ketiga adanya kesalahan pada nama properti. "fruitname" seharusnya dituliskan dengan huruf
// awal kalimat. Pada objek "apel" diubah menjadi "Apel" dan "KURMA" menjadi "Kurma". Adeanya duplikasi "fruitId: 5", tiap objek harus 
// memiliki id yang berbeda. 

// Pada Bagian Jenis buah lebih baik didefinisikan sebagai enum jika hanya memiliki dua nilai yaitu "LOCAL" dan "IMPORT" 
// cth kodingan: 

// enum FruitType {
//   IMPORT = 'IMPORT',
//   LOCAL = 'LOCAL',
// }


