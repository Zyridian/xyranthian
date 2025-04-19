export const typeScale = {
  // Font families
  fontSora: '"Sora", sans-serif',
  fontInter: '"Inter", sans-serif',
  fontMono: '"JetBrains Mono", monospace',

  // Font sizes
  sizeDisplayXL: "96px",
  sizeDisplayL: "72px",
  sizeDisplayM: "64px",
  sizeDisplayS: "48px",
  sizeH1: "36px",
  sizeH2: "28px",
  sizeH3: "22px",
  sizeBodyL: "18px",
  sizeBodyS: "16px",
  sizeLabel: "14px",
  sizeMetadata: "12px",
  sizeCode: "15px",

  // Font weights
  weightRegular: 400,
  weightMedium: 500,
  weightSemiBold: 600,
  weightBold: 700,
};

export const Typography = {
  displayXL: {
    fontFamily: typeScale.fontSora,
    fontSize: typeScale.sizeDisplayXL,
    fontWeight: typeScale.weightBold,
  },
  displayL: {
    fontFamily: typeScale.fontSora,
    fontSize: typeScale.sizeDisplayL,
    fontWeight: typeScale.weightBold,
  },
  displayM: {
    fontFamily: typeScale.fontSora,
    fontSize: typeScale.sizeDisplayM,
    fontWeight: typeScale.weightBold,
  },
  displayS: {
    fontFamily: typeScale.fontSora,
    fontSize: typeScale.sizeDisplayS,
    fontWeight: typeScale.weightSemiBold,
  },
  h1: {
    fontFamily: typeScale.fontSora,
    fontSize: typeScale.sizeH1,
    fontWeight: typeScale.weightSemiBold,
  },
  h2: {
    fontFamily: typeScale.fontSora,
    fontSize: typeScale.sizeH2,
    fontWeight: typeScale.weightSemiBold,
  },
  h3: {
    fontFamily: typeScale.fontInter,
    fontSize: typeScale.sizeH3,
    fontWeight: typeScale.weightMedium,
  },
  bodyL: {
    fontFamily: typeScale.fontInter,
    fontSize: typeScale.sizeBodyL,
    fontWeight: typeScale.weightRegular,
  },
  bodyS: {
    fontFamily: typeScale.fontInter,
    fontSize: typeScale.sizeBodyS,
    fontWeight: typeScale.weightRegular,
  },
  label: {
    fontFamily: typeScale.fontInter,
    fontSize: typeScale.sizeLabel,
    fontWeight: typeScale.weightMedium,
  },
  code: {
    fontFamily: typeScale.fontMono,
    fontSize: typeScale.sizeCode,
    fontWeight: typeScale.weightRegular,
  },
};
  