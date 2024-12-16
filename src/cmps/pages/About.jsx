export default function About({ navigate }) {
  return (
    <>
      <section>
        <h1>A little bit about us...</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat in
          modi distinctio et minus nisi cupiditate reprehenderit? Quos rem,
          consequuntur rerum tempore, hic molestiae optio totam officia alias
          aspernatur neque?
        </p>
        <a href="https://demoblaze.com/">Go to test website</a>
      </section>
      <section>
        <iframe
          src="https://example.com"
          title="iFrame of example website"
        ></iframe>
        <iframe
          src="https://demoblaze.com/"
          title="iFrame of 2nd example website"
        ></iframe>
      </section>
    </>
  );
}
