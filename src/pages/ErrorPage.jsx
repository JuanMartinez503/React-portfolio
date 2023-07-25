import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="text-center my-5">
      <h1>Oops! Something went wrong! 😢</h1>
      <p>We're sorry, but it seems like there was an unexpected error.</p>
      <p>Please try again later or contact support for assistance.</p>
      <Link to="/">Home</Link>
    </div>
  );
}
