type KollerisLogoProps = {
  height?: number;
};

export function KollerisLogo({ height = 50 }: KollerisLogoProps) {
  return (
    <img
      src="https://kolleris.b-cdn.net/logo.svg"
      alt="Kolleris"
      height={height}
      width="auto"
      className="max-h-[50px] w-auto"
      style={{ height: `${height}px` }}
    />
  );
}
