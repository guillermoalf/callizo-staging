import type { DivisionId } from "@/content/divisions";

export interface Ficha {
  tipo: string;
  presentacion: string;
  dosis: string;
  ph: string;
  tempMax: string;
  solubilidad: string;
  vidaUtil: string;
  almacenamiento: string;
  descripcion: string;
  aplicaciones: string[];
  certificaciones: string[];
}

export interface Product {
  code: string;
  division: DivisionId;
  name: { es: string; en: string };
  description: { es: string; en: string };
  ficha: Ficha;
}

export const DIVISION_STYLES: Record<
  DivisionId,
  { pillBg: string; pillText: string; activeBg: string; activeText: string }
> = {
  flavors: {
    pillBg: "#e6f1fb",
    pillText: "#185fa5",
    activeBg: "#378add",
    activeText: "#ffffff",
  },
  fragrances: {
    pillBg: "#eaf3de",
    pillText: "#3b6d11",
    activeBg: "#1d9e75",
    activeText: "#ffffff",
  },
  pets: {
    pillBg: "#faeeda",
    pillText: "#854f0b",
    activeBg: "#ba7517",
    activeText: "#ffffff",
  },
  zoo: {
    pillBg: "#eeedfe",
    pillText: "#3c3489",
    activeBg: "#7f77dd",
    activeText: "#ffffff",
  },
  ingredients: {
    pillBg: "#f1efe8",
    pillText: "#5f5e5a",
    activeBg: "#76766f",
    activeText: "#ffffff",
  },
};

export const PRODUCTS: Product[] = [
  {
    code: "SAB-0142",
    division: "flavors",
    name: { es: "Sabor Mango Tropical", en: "Tropical Mango Flavor" },
    description: {
      es: "Ideal para bebidas, gelatinas y confites.",
      en: "Ideal for beverages, gelatin, and confections.",
    },
    ficha: {
      tipo: "Natural idéntico",
      presentacion: "Líquido / Polvo",
      dosis: "0.2% – 0.5%",
      ph: "3.0 – 6.5",
      tempMax: "85°C",
      solubilidad: "Hidrosoluble",
      vidaUtil: "24 meses",
      almacenamiento: "Lugar fresco, seco, protegido de la luz",
      descripcion:
        "Perfil aromático que captura la dulzura tropical del mango maduro con notas verdes y cítricas. Desarrollado a partir de variedades Tommy Atkins y Ataulfo de origen centroamericano.",
      aplicaciones: ["Bebidas", "Gelatinas", "Confites", "Caramelos", "Yogur", "Helados", "Snacks"],
      certificaciones: ["Kosher", "Halal", "FSSC 22000", "BPM"],
    },
  },
  {
    code: "SAB-0089",
    division: "flavors",
    name: { es: "Sabor Vainilla Bourbon", en: "Bourbon Vanilla Flavor" },
    description: {
      es: "Aplicaciones en horneados, lácteos y postres.",
      en: "Applications in baked goods, dairy, and desserts.",
    },
    ficha: {
      tipo: "Natural",
      presentacion: "Líquido / Polvo",
      dosis: "0.1% – 0.3%",
      ph: "4.0 – 7.0",
      tempMax: "95°C",
      solubilidad: "Hidrosoluble / Liposoluble",
      vidaUtil: "24 meses",
      almacenamiento: "Lugar fresco, seco, protegido de la luz",
      descripcion:
        "Extracto de vainilla con perfil profundo y cremoso, notas de madera dulce y especias. Origen Madagascar, proceso de extracción en frío.",
      aplicaciones: ["Horneados", "Lácteos", "Postres", "Helados", "Cereales", "Bebidas"],
      certificaciones: ["Kosher", "FSSC 22000", "BPM"],
    },
  },
  {
    code: "SAB-0201",
    division: "flavors",
    name: { es: "Sabor Maracuyá Premium", en: "Premium Passion Fruit Flavor" },
    description: {
      es: "Perfil tropical intenso para bebidas y snacks.",
      en: "Intense tropical profile for beverages and snacks.",
    },
    ficha: {
      tipo: "Natural idéntico",
      presentacion: "Líquido",
      dosis: "0.3% – 0.6%",
      ph: "2.8 – 5.0",
      tempMax: "80°C",
      solubilidad: "Hidrosoluble",
      vidaUtil: "18 meses",
      almacenamiento: "Refrigerado entre 4°C y 10°C",
      descripcion:
        "Perfil tropical intenso con notas ácidas caractestabilidad en bebidas carbonatadas y néctares.",
      aplicaciones: ["Bebidas", "Néctares", "Snacks", "Confites", "Gelatinas"],
      certificaciones: ["Kosher", "Halal", "BPM"],
    },
  },
  {
    code: "SAB-0317",
    division: "flavors",
    name: { es: "Sabor Chicha Morada", en: "Chicha Morada Flavor" },
    description: {
      es: "Inspirado en receta peruana tradicional.",
      en: "Inspired by traditional Peruvian recipe.",
    },
    ficha: {
      tipo: "Natural",
      presentacion: "Líquido / Polvo",
      dosis: "0.4% – 0.8%",
      ph: "3.5 – 5.5",
      tempMax: "75°C",
      solubilidad: "Hidrosoluble",
      vidaUtil: "18 meses",
      almacenamiento: "Lugar fresco, seco, protegido de la luz",
      descripcion:
        "Inspirado en la receta peruana tradicional a base de maíz morado, con notas de canela, clavo y piña. Perfil único para bebidas RTD y postres.",
      aplicaciones: ["Bebidas RTD", "Postres", "Gelatinas", "Helados"],
      certificaciones: ["Kosher", "FSSC 22000", "BPM"],
    },
  },
  {
    code: "FRG-0031",
    division: "fragrances",
    name: { es: "Fragancia Lavanda Alpina", en: "Alpine Lavender Fragrance" },
    description: {
      es: "Línea personal care y productos de limpieza.",
      en: "Personal care and home cleaning product line.",
    },
    ficha: {
      tipo: "Sintético",
      presentacion: "Líquido",
      dosis: "0.5% – 2.0%",
      ph: "N/A",
      tempMax: "60°C",
      solubilidad: "Liposoluble",
      vidaUtil: "36 meses",
      almacenamiento: "Lugar fresco, seco, alejado de fuentes de calor",
      descripcion:
        "Composición floral-herbácea inspirada en campos de lavanda de alta montaña. Ideal para líneas premium de cuidado personal y limpieza del hogar.",
      aplicaciones: [
        "Shampoo",
        "Acondicionador",
        "Jabón líquido",
        "Detergente",
        "Suavizante",
        "Ambientadores",
      ],
      certificaciones: ["IFRA", "RSPO", "BPM"],
    },
  },
  {
    code: "FRG-0055",
    division: "fragrances",
    name: { es: "Fragancia Cítrica Premium", en: "Premium Citrus Fragrance" },
    description: {
      es: "Notas frescas para detergentes y ambientadores.",
      en: "Fresh notes for detergents and air fresheners.",
    },
    ficha: {
      tipo: "Natural idéntico",
      presentacion: "Líquido",
      dosis: "0.3% – 1.5%",
      ph: "N/A",
      tempMax: "55°C",
      solubilidad: "Liposoluble",
      vidaUtil: "24 meses",
      almacenamiento: "Lugar fresco, seco, protegido de la luz",
      descripcion:
        "Notas frescas de limón, naranja y bergamota con fondo verde. Alta persistencia aromática para productos de limpieza y cuidado personal.",
      aplicaciones: [
        "Detergentes",
        "Lavavajillas",
        "Desengrasantes",
        "Jabón de manos",
        "Ambientadores",
      ],
      certificaciones: ["IFRA", "BPM"],
    },
  },
  {
    code: "PET-0018",
    division: "pets",
    name: { es: "Palatabilizante Carne/Res", en: "Beef Palatant" },
    description: {
      es: "Mejora aceptación en croquetas y alimento húmedo.",
      en: "Improves acceptance in kibble and wet pet food.",
    },
    ficha: {
      tipo: "Natural",
      presentacion: "Líquido / Polvo",
      dosis: "0.5% – 3.0% sobre alimento terminado",
      ph: "5.0 – 7.0",
      tempMax: "120°C",
      solubilidad: "Hidrosoluble",
      vidaUtil: "12 meses",
      almacenamiento: "Lugar fresco, seco, temperatura menor a 25°C",
      descripcion:
        "Sistema palatabilizante de alta aceptación desarrollado para alimento seco y húmedo de perros. Mejora la tasa de consumo en hasta 40% vs control sin palatabilizante.",
      aplicaciones: ["Croquetas secas", "Alimento húmedo", "Snacks para perros", "Premios"],
      certificaciones: ["FSSC 22000", "BPM", "AAFCO reference"],
    },
  },
  {
    code: "PET-0034",
    division: "pets",
    name: { es: "Palatabilizante Pollo Premium", en: "Premium Chicken Palatant" },
    description: {
      es: "Alta palatabilidad para línea gourmet.",
      en: "High palatability for the gourmet pet food line.",
    },
    ficha: {
      tipo: "Natural",
      presentacion: "Líquido / Polvo",
      dosis: "0.5% – 2.5% sobre alimento terminado",
      ph: "5.5 – 7.0",
      tempMax: "115°C",
      solubilidad: "Hidrosoluble",
      vidaUtil: "12 meses",
      almacenamiento: "Lugar fresco, seco, temperatura menor a 25°C",
      descripcion:
        "Fórmula de alta palatabilidad con perfil de pollo asado para líneas gourmet y premium de alimento para perros y gatos. Alta estabilidad térmica para proceso de extrusión.",
      aplicaciones: [
        "Croquetas premium",
        "Alimento para gatos",
        "Snacks gourmet",
        "Alimento húmedo",
      ],
      certificaciones: ["FSSC 22000", "BPM", "AAFCO reference"],
    },
  },
  {
    code: "ZOO-0044",
    division: "zoo",
    name: { es: "Aditivo Palatabilizante Aves", en: "Poultry Palatability Additive" },
    description: {
      es: "Optimiza consumo en alimento avícola balanceado.",
      en: "Optimizes intake in balanced poultry feed.",
    },
    ficha: {
      tipo: "Natural idéntico",
      presentacion: "Polvo",
      dosis: "0.3% – 1.0% sobre alimento balanceado",
      ph: "5.5 – 7.5",
      tempMax: "130°C",
      solubilidad: "Hidrosoluble",
      vidaUtil: "18 meses",
      almacenamiento: "Lugar seco, ventilado, temperatura menor a 30°C",
      descripcion:
        "Promotor de consumo voluntario para alimento avícola balanceado. Aumenta la ingesta diaria y mejora la conversión alimenticia en pollos de engorde y ponedoras.",
      aplicaciones: [
        "Alimento pollos de engorde",
        "Alimento ponedoras",
        "Alimento pavos",
        "Premezclas",
      ],
      certificaciones: ["FSSC 22000", "BPM", "SENASA"],
    },
  },
  {
    code: "ZOO-0061",
    division: "zoo",
    name: { es: "Promotor de Consumo Bovino", en: "Bovine Intake Promoter" },
    description: {
      es: "Fórmula para ganado de engorde y lechero.",
      en: "Formula for beef and dairy cattle.",
    },
    ficha: {
      tipo: "Natural",
      presentacion: "Líquido / Polvo",
      dosis: "0.2% – 0.8% sobre alimento balanceado",
      ph: "6.0 – 7.5",
      tempMax: "110°C",
      solubilidad: "Hidrosoluble",
      vidaUtil: "18 meses",
      almacenamiento: "Lugar seco, ventilado, temperatura menor a 30°C",
      descripcion:
        "Fórmula para mejorar la palatabilidad y consumo voluntario en bovinos de engorde y producción lechera. Compatible con silajes, concentrados y premezclas minerales.",
      aplicaciones: [
        "Ganado de engorde",
        "Ganado lechero",
        "Concentrados",
        "Premezclas",
        "Silajes",
      ],
      certificaciones: ["FSSC 22000", "BPM", "SENASA"],
    },
  },
  {
    code: "ING-0011",
    division: "ingredients",
    name: { es: "Oleorresina de Páprika", en: "Paprika Oleoresin" },
    description: {
      es: "Colorante y saborizante natural para snacks.",
      en: "Natural colorant and flavoring for snacks.",
    },
    ficha: {
      tipo: "Natural",
      presentacion: "Líquido oleoso",
      dosis: "0.05% – 0.3%",
      ph: "N/A",
      tempMax: "150°C",
      solubilidad: "Liposoluble",
      vidaUtil: "24 meses",
      almacenamiento: "Lugar fresco, oscuro, temperatura menor a 20°C",
      descripcion:
        "Extracto concentrado de pimiento rojo con alto contenido de capsantina. Proporciona color rojo-anaranjado intenso y sabor suave a páprika. Sin colorantes artificiales.",
      aplicaciones: ["Snacks", "Embutidos", "Salsas", "Sazonadores", "Margarinas", "Sopas"],
      certificaciones: ["Kosher", "Halal", "FSSC 22000", "BPM", "Non-GMO"],
    },
  },
  {
    code: "ING-0028",
    division: "ingredients",
    name: { es: "Extracto de Vainilla Natural", en: "Natural Vanilla Extract" },
    description: {
      es: "Origen Madagascar, certificado kosher.",
      en: "Madagascar origin, kosher certified.",
    },
    ficha: {
      tipo: "Natural",
      presentacion: "Líquido",
      dosis: "0.1% – 0.5%",
      ph: "4.5 – 7.0",
      tempMax: "90°C",
      solubilidad: "Hidrosoluble / Liposoluble",
      vidaUtil: "36 meses",
      almacenamiento: "Lugar fresco, oscuro, temperatura menor a 18°C",
      descripcion:
        "Extracto puro de vainas de vainilla Vanilla planifolia origen Madagascar. Mínimo 100 fold. Certificado kosher y halal. Sin extractos sintéticos ni propilen glicol.",
      aplicaciones: [
        "Horneados artesanales",
        "Helados premium",
        "Chocolates",
        "Lácteos",
        "Bebidas RTD",
      ],
      certificaciones: ["Kosher", "Halal", "FSSC 22000", "BPM", "Fair Trade", "Non-GMO"],
    },
  },
];
