import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError();
  console.log(error.data);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;