import Head from "next/head";
import Image from "next/image";
import {
  addHours,
  formatISO,
  nextThursday,
  setHours,
  startOfHour,
} from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import Review from "../components/review";
import Schema from "../components/schema";
import reviewData from "../data/reviews";
import helloYoga from "../public/images/hello-yoga.png";
import yogaPeople from "../public/images/yoga-people.png";

function HomePage({ reviews, eventDates }) {
  return (
    <>
      <Schema reviews={reviews} eventDates={eventDates} />
      <Head>
        <title>hello YOGA—classes in Harrogate</title>
        <link rel="canonical" href="https://www.hello-yoga.co.uk/" />
        <meta
          name="description"
          content="Small, friendly yoga classes. Suitable for all abilities. Strengthen your body, increase your flexibility and calm your mind."
        />
        <meta property="og:title" content="hello YOGA" />
        <meta
          property="og:image"
          content="https://www.hello-yoga.co.uk/images/hello-yoga.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.hello-yoga.co.uk/images/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.hello-yoga.co.uk/images/favicon-16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.hello-yoga.co.uk/images/favicon-180.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="https://www.hello-yoga.co.uk/images/favicon-150.png"
        />
      </Head>
      <p>Rebrand</p>
      <p>
        <Image src={helloYoga} alt="hello YOGA" />
      </p>
      <h2>Thursdays 19:00–20:00</h2>
      <p id="beckwith-health-club">
        <span className="line">Beckwith Health Club,</span>{" "}
        <span className="line">Harrogate.</span>{" "}
        <span className="line">HG3 1UF</span>
      </p>
      <p id="yoga-action">
        Strengthen body, increase flexibility{" "}
        <span className="line">and calm the mind.</span>
        <br />
        <span className="line">Small friendly classes.</span>{" "}
        <span className="line">Suitable for all abilities.</span>
      </p>
      <p id="offer">£8 per class.</p>
      <p>
        To book your place,{" "}
        <span className="line">
          email{" "}
          <a href="mailto:clare@hello-yoga.co.uk">clare@hello-yoga.co.uk</a>
        </span>
        <span className="line">
          or visit the{" "}
          <a href="https://facebook.com/helloyogaharrogate">
            hello YOGA Facebook page
          </a>
          .
        </span>
      </p>
      <p>⭐️⭐️⭐️⭐️⭐️</p>
      {reviews.map((review, index) => (
        <Review review={review} key={index} />
      ))}
      <p>
        <Image src={yogaPeople} id="yoga-people" />
      </p>
    </>
  );
}

export async function getServerSideProps() {
  const { reviews } = reviewData;
  const firstEventDate = nextThursday(Date.now());
  const secondEventDate = nextThursday(firstEventDate);
  const eventDates = [firstEventDate, secondEventDate].map((date) => {
    const startTime = zonedTimeToUtc(
      startOfHour(setHours(date, 19)),
      "Europe/London"
    );
    return {
      start: formatISO(startTime),
      end: formatISO(addHours(startTime, 1)),
    };
  });

  return {
    props: {
      reviews: reviews,
      eventDates: eventDates,
    },
  };
}

export default HomePage;
