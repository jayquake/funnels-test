export default function PageNotFound({ navigate }) {
  return (
    <div className="page">
      <section>
        <h1>Page Not Found</h1>
        <p>
          Hmm... looks like this page doesn't exist, let's head back home.
          <div>
            <a style={{ color: "blue" }} href="/">
              Go to homepage
            </a>
          </div>
        </p>
      </section>
    </div>
  );
}
