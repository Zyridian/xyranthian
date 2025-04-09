import { JSX } from "react";

interface ColorPaletteProps {
    /**
     * Colors to display in the color palette.
     */
    colors: Record<string, string>;
}

function ColorPalette({ colors }: ColorPaletteProps): JSX.Element {
    return (
        <div style={styles.grid}>
          {Object.entries(colors).map(([name, value]) => (
            <div key={name} style={styles.item}>
              <div style={{ ...styles.swatch, backgroundColor: value }} />
              <div style={styles.label}>
                <strong>{name}</strong>
                <div>{value}</div>
              </div>
            </div>
          ))}
        </div>
      );
}

export default ColorPalette;

const styles: Record<string, React.CSSProperties> = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "16px",
      padding: "24px",
      background: "#f9fafb",
    },
    item: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      padding: "12px",
      backgroundColor: "#fff",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    },
    swatch: {
      width: "48px",
      height: "48px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      marginBottom: "8px",
    },
    label: {
      textAlign: "center" as const,
      fontSize: "12px",
      color: "#374151",
    },
  };
  