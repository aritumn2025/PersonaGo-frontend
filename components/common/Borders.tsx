type Color = string;

interface BorderProps {
  top: Color;
  bottom: Color;
}

function BorderRoundedWave01({ top, bottom }: BorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="-my-1"
    >
      <rect width="100%" height="100%" fill={bottom} />
      <path
        fill={top}
        d="M0,96L60,85.3C120,75,240,53,360,69.3C480,85,600,139,720,144C840,149,960,107,1080,112C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
  );
}

function BorderRoundedWave02({ top, bottom }: BorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="-my-1"
    >
      <rect width="100%" height="100%" fill={bottom} />
      <path
        fill={top}
        d="M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,170.7C672,139,768,117,864,117.3C960,117,1056,139,1152,165.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
}

function BorderAngularWave01({ top, bottom }: BorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="-my-1"
    >
      <rect width="100%" height="100%" fill={bottom} />
      <path
        fill={top}
        d="M0,128L480,32L960,96L1440,128L1440,0L960,0L480,0L0,0Z"
      ></path>
    </svg>
  );
}

function BorderAngularWave02({ top, bottom }: BorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="-my-1"
    >
      <rect width="100%" height="100%" fill={bottom} />
      <path
        fill={top}
        d="M0,96L480,288L960,32L1440,64L1440,0L960,0L480,0L0,0Z"
      ></path>
    </svg>
  );
}

function BorderLiner01({ top, bottom }: BorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="-my-1"
    >
      <rect width="100%" height="100%" fill={bottom} />
      <path fill={top} d="M0,64L1440,256L1440,0L0,0Z"></path>
    </svg>
  );
}

function BorderLiner02({ top, bottom }: BorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="-my-1"
    >
      <rect width="100%" height="100%" fill={bottom} />
      <path fill={top} d="M0,160L1440,32L1440,0L0,0Z"></path>
    </svg>
  );
}

export {
  BorderRoundedWave01,
  BorderRoundedWave02,
  BorderAngularWave01,
  BorderAngularWave02,
  BorderLiner01,
  BorderLiner02,
};
