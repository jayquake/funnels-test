import { assets } from "../../assets/assets";

export default function Home({ navigate }) {
  const goToPage = (href) => navigate(href);
  return (
    <>
      <section className="bg-asset-container">
        <h1 className="text-front">
          Testing Funnels & <br></br> Flows
        </h1>
        <video
          className="bg-asset"
          autoPlay
          muted
          loop
          //aria-roledescription="presentation"
        >
          <source src={assets.homeVid} />
          <p>Your browser doesn't support HTML video. Here is a</p>
        </video>
      </section>
      <section>
        <h3>Use cases:</h3>
        <ol>
          <li>Single-page funnel</li>
          <li>Multi-page funnel within the same website</li>
          <li>Multi-domain funnel - going to a different domain</li>
          <li>
            Multi-domain funnel - interacting with an iFrame of a different
            domain
          </li>
        </ol>
        <div>
          <button className="btn" onClick={() => goToPage("/blog")}>
            Check out the blogs!
          </button>
          <button className="btn" onClick={() => goToPage("/about")}>
            Learn about us!
          </button>
        </div>
      </section>
    </>
  );
}
