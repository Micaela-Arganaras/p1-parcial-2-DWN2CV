class Producto {
    constructor(id, nombre, descripcion, precio, imagen, categoria) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.imagen = imagen;
      this.categoria = categoria;
    }
  }
  
  let productos = [
    new Producto(
     1,
      'Magnetic Spirit Eyeshadow Palette',
      'Una paleta de sombras de ojos de edición limitada que incluye seis sombras ultra cremosas, difuminables con un solo gesto, en ricos brillos en tonos joya.',
       '8000',
      'anexos/sombra1.webp',
      'Sombras'
    ),
    new Producto(
      2,
      'Confident Energy Eyeshadow Palette',
      'Una paleta de sombras de ojos de edición limitada con seis tonos ultra cremosos, difuminables con un solo gesto, en tonos neutros cálidos y brillantes y tonos dorados intensos.',
      '8500',
      'anexos/sombra2.webp',
      'Sombras'
    ),
   
      new Producto(
        3,
        'Stay Vulnerable - Eyeshadow Brush',
        'Un pincel para sombras de ojos sin crueldad para difuminar fácilmente todo el producto, con una forma densa y angular única que imita la yema del dedo para un control máximo.',
       '2500',
        'anexos/brocha1.webp',
        'Brushes'
      ),
      new Producto(
        4,
        'Always An Optimist Powder Brush',
        'Una brocha para polvos precisa, en forma de cúpula, con una punta suave y afilada que es lo suficientemente esponjosa para difuminar por todas partes, pero  precisa.',
         '3500',
        'anexos/brocha2.webp',
        'Brushes'
      ),
      new Producto(
        5,
        'Soft Pinch Liquid Blush',
        'Un colorete líquido ligero y de larga duración que se difumina perfectamente para conseguir un rubor suave y saludable. Disponible en acabados mate y húmedo.',
        '5000',
        'anexos/blush1.jpg',
        'Blushes'
      ),
      new Producto(
        6,
        'Positive Light Liquid Luminizer Blush',
        'Un colorete líquido luminoso y de larga duración que se difumina  perfectamente para conseguir un rubor brilloso y saludable. ',
       '4500',
        'anexos/blush2.webp',
        'Blushes'
      ),
  ];

  