export type Location = {
  id: string;
  city: string;
  country: string;
  type: string;
  /** Stylized coordinates within the schematic 600×720 map viewBox (not real geo). */
  x: number;
  y: number;
  kind: "plant" | "office";
};

export const LOCATIONS: Location[] = [
  { id: "cr", city: "San José", country: "Costa Rica", type: "HQ · Manufacturing · R&D", x: 352, y: 402, kind: "plant" },
  { id: "co", city: "Bogotá", country: "Colombia", type: "Manufacturing · R&D", x: 370, y: 444, kind: "plant" },
  { id: "mx", city: "Querétaro", country: "México", type: "Manufacturing · Palatability", x: 303, y: 322, kind: "plant" },
  { id: "pe", city: "Lima", country: "Perú", type: "Manufacturing", x: 350, y: 520, kind: "plant" },
  { id: "py", city: "Asunción", country: "Paraguay", type: "Manufacturing · Stevia", x: 420, y: 588, kind: "plant" },
  { id: "us", city: "Miami, FL", country: "USA", type: "Manufacturing · Sales", x: 380, y: 252, kind: "plant" },
  { id: "sp", city: "São Paulo", country: "Brasil", type: "Sales office", x: 458, y: 578, kind: "office" },
  { id: "sa", city: "Santiago", country: "Chile", type: "Sales office", x: 378, y: 636, kind: "office" },
  { id: "gt", city: "Guatemala", country: "Guatemala", type: "Sales office", x: 332, y: 382, kind: "office" },
];

/** HQ id — origin of the map's connecting lines. */
export const HQ_ID = "cr";
