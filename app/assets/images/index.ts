export const getImage = (image: string) => {
  switch (image) {
    case 'poster1.jpg':
      return require('./poster1.jpg');
    case 'poster2.jpg':
      return require('./poster2.jpg');
    case 'poster3.jpg':
      return require('./poster3.jpg');
    case 'poster4.jpg':
      return require('./poster4.jpg');
    case 'poster5.jpg':
      return require('./poster5.jpg');
    case 'poster6.jpg':
      return require('./poster6.jpg');
    case 'poster7.jpg':
      return require('./poster7.jpg');
    case 'poster8.jpg':
      return require('./poster8.jpg');
    case 'poster9.jpg':
      return require('./poster9.jpg');
  }
};
