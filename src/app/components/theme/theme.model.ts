export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--background-color": "#fff",
    "--text-color": "black",
    "--hover-color": "#00000028",
    "--background-secondary": "#00000021",
    "--border-color": "grey"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--background-color": "#252525",
    "--text-color": "#fff",
    "--hover-color": "#ffffff0d",
    "--background-secondary": "white",
    "--border-color": "#fff"
  }
};
