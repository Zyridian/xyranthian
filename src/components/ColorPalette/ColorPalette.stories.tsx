import { palette } from "../../foundations/palette";
import ColorPalette from "./ColorPalette";

export default {
  title: "Foundations/Color Palettes",
  component: ColorPalette,
  parameters: {
    docs: {
      description: {
        component: "These are all the core color tokens from the `palette` object. Use these in combination with the `Colors` semantic tokens.",
      },
    },
  },
};

const neutralColors = Object.fromEntries(
    Object.entries(palette)
    .filter(([key]) => key.startsWith("neutral"))
);

const primaryColors = Object.fromEntries(
    Object.entries(palette)
    .filter(([key]) => key.startsWith("primary"))
);

const redColors = Object.fromEntries(
    Object.entries(palette)
    .filter(([key]) => key.startsWith("red"))
);


export const Default = () => {
    
    return (
        <div>
            <ColorPalette colors={palette} />
            <ColorPalette colors={primaryColors} />
            <ColorPalette colors={neutralColors} />
            <ColorPalette colors={redColors} />
        </div>
    )
};
