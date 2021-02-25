import Error from "../components/error-page/";

export default function Custom404() {
  return <Error code={404} message="Page Not Found" />;
}
