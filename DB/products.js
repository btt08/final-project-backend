const products = [
  {
    'refCode': '_I8700K',
    'manufacturer_id': 'US4581401001',
    'model': 'Intel Core i7 8700K',
    'cat': 'cpu',
    'price': 359
  },
  {
    'refCode': '_I11900K',
    'manufacturer_id': 'US4581401001',
    'model': 'Intel Core i9 11900K',
    'cat': 'cpu',
    'price': 400
  },
  {
    'refCode': '_I11700T',
    'manufacturer_id': 'US4581401001',
    'model': 'Intel Core i7 11700T',
    'cat': 'cpu',
    'price': 355
  },
  {
    'refCode': '_A5600G',
    'manufacturer_id': 'US0079031078',
    'model': 'AMD Ryzen 5 5600G',
    'cat': 'cpu',
    'price': 225
  },
  {
    'refCode': '_A5950X',
    'manufacturer_id': 'US0079031078',
    'model': 'AMD Ryzen 9 5950X',
    'cat': 'cpu',
    'price': 650
  },
  {
    'refCode': '_A5900HS',
    'manufacturer_id': 'US0079031078',
    'model': 'AMD Ryzen 9 5900HS',
    'cat': 'cpu',
    'price': null
  },
  {
    'refCode': '_S888+5G',
    'manufacturer_id': 'US7475251036',
    'model': 'QUALCOMM SNAPDRAGON 888+5G',
    'cat': 'cpu',
    'price': null
  },
  {
    'refCode': '_S888',
    'manufacturer_id': 'US7475251036',
    'model': 'QUALCOMM SNAPDRAGON 888',
    'cat': 'cpu',
    'price': null
  },
  {
    'refCode': '_GTENSORG2',
    'manufacturer_id': 'US02079K3059',
    'model': 'Google TENSOR G2 ',
    'cat': 'cpu',
    'price': null
  },
  {
    'refCode': '_GTENSOR',
    'manufacturer_id': 'US02079K3059',
    'model': 'Google TENSOR ',
    'cat': 'cpu',
    'price': null
  },
  {
    'refCode': '_AA15BIONIC',
    'manufacturer_id': 'US0378331005',
    'model': 'Apple A15 BIONIC',
    'cat': 'cpu',
    'price': null
  },
  {
    'refCode': '_AA13BIONIC',
    'manufacturer_id': 'US0378331005',
    'model': 'Apple A13 BIONIC',
    'cat': 'cpu',
    'price': null
  },
  {
    'refCode': '_NA1080TIOC',
    'manufacturer_id': 'TW0002357001',
    'model': 'Asus ROG STRIX 1080 TI OC',
    'cat': 'gpu',
    'price': 500
  },
  {
    'refCode': '_NA2080TIOC',
    'manufacturer_id': 'TW0002357001',
    'model': 'Asus ROG STRIX 2080 TI OC',
    'cat': 'gpu',
    'price': 800
  },
  {
    'refCode': '_NA3080TIOC',
    'manufacturer_id': 'TW0002357001',
    'model': 'Asus ROG STRIX 3080 TI OC',
    'cat': 'gpu',
    'price': 1200
  },
  {
    'refCode': '_NN3060',
    'manufacturer_id': 'US67066G1040',
    'model': 'NVIDIA 3060 Reference',
    'cat': 'gpu',
    'price': 540
  },
  {
    'refCode': '_NN3070',
    'manufacturer_id': 'US67066G1040',
    'model': 'NVIDIA 3070 Reference',
    'cat': 'gpu',
    'price': 700
  },
  {
    'refCode': '_NA3060TI',
    'manufacturer_id': 'TW0002357001',
    'model': 'Asus ROG STRIX 3060 TI',
    'cat': 'gpu',
    'price': 900
  },
  {
    'refCode': '_AS5700XT',
    'manufacturer_id': 'KR7123260002',
    'model': 'Sapphire NITRO+ 5700 XT',
    'cat': 'gpu',
    'price': 650
  },
  {
    'refCode': '_AS6700XT',
    'manufacturer_id': 'KR7123260002',
    'model': 'Sapphire NITRO+ 6700 XT',
    'cat': 'gpu',
    'price': 700
  },
  {
    'refCode': '_AS6800OC',
    'manufacturer_id': 'KR7123260002',
    'model': 'Sapphire NITRO+ RX 6800 OC',
    'cat': 'gpu',
    'price': 800
  },
  {
    'refCode': '_AS6800XTOC',
    'manufacturer_id': 'KR7123260002',
    'model': 'Sapphire NITRO+ RX 6800 XT OC',
    'cat': 'gpu',
    'price': 1000
  },
  {
    'refCode': '_AG6500',
    'manufacturer_id': 'TW0002376001',
    'model': 'Gigabyte RX 6500',
    'cat': 'gpu',
    'price': 300
  },
  {
    'refCode': '_AG6600XTGOCP',
    'manufacturer_id': 'TW0002376001',
    'model': 'Gigabyte RX 6600 XT OC PRO',
    'cat': 'gpu',
    'price': 500
  },
  {
    'refCode': '_IA760',
    'manufacturer_id': 'US4581401001',
    'model': 'Intel Arc A760',
    'cat': 'gpu',
    'price': 250
  },
  {
    'refCode': '_IA770',
    'manufacturer_id': 'US4581401001',
    'model': 'Intel Arc A770',
    'cat': 'gpu',
    'price': 330
  },
  {
    'refCode': '_MOTOE30N',
    'manufacturer_id': 'US6200763075',
    'model': 'Motorola E30 NEO',
    'cat': 'smartphone',
    'price': 399
  },
  {
    'refCode': '_MOTOE30F',
    'manufacturer_id': 'US6200763075',
    'model': 'Motorola E30 FUSION',
    'cat': 'smartphone',
    'price': 599
  },
  {
    'refCode': '_MOTOE30U',
    'manufacturer_id': 'US6200763075',
    'model': 'Motorola E30 ULTRA',
    'cat': 'smartphone',
    'price': 899
  },
  {
    'refCode': '_GPIXEL7P',
    'manufacturer_id': 'US02079K3059',
    'model': 'Google PIXEL 7 PRO',
    'cat': 'smartphone',
    'price': 899
  },
  {
    'refCode': '_GPIXEL7',
    'manufacturer_id': 'US02079K3059',
    'model': 'Google PIXEL 7',
    'cat': 'smartphone',
    'price': 599
  },
  {
    'refCode': '_AIPHONE13',
    'manufacturer_id': 'US0378331005',
    'model': 'Apple IPHONE 13',
    'cat': 'smartphone',
    'price': 800
  },
  {
    'refCode': '_AIPHONE13PRO',
    'manufacturer_id': 'US0378331005',
    'model': 'Apple IPHONE 13 PRO',
    'cat': 'smartphone',
    'price': 800
  }
];

module.exports = products;