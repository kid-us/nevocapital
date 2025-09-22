interface Nav {
  id: number;
  label: string;
  path: string;
}

export const nav: Nav[] = [
  { id: 1, label: "Investment Funds", path: "/investment-funds" },
  { id: 2, label: "Company", path: "/company" },
  { id: 3, label: "Client Portals", path: "/client-portals" },
  { id: 4, label: "Contact Us", path: "/contact" },
];
