import Loader from "react-loader-spinner";
export function LoaderSpinner() {
  return (
    <Loader
      type="Circles"
      color="#7FFF00"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
