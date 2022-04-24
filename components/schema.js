import Head from "next/head";
import eventTemplate from "../data/schema/event";
import exerciseAction from "../data/schema/exercise-action";
import localBusiness from "../data/schema/local-business";
import offer from "../data/schema/offer";
import place from "../data/schema/place";
import reviewTemplate from "../data/schema/review";

const Schema = ({ reviews, eventDates }) => {
  const localBusinessReviews = reviews.map((review) => {
    const r = JSON.parse(JSON.stringify(reviewTemplate)); // Use structuredClone() if using Node v17+
    r.reviewBody = review.body;
    r.author.name = review.name;
    r.datePublished = review.date;
    return r;
  });
  localBusiness.review.push(localBusinessReviews);
  localBusiness.aggregateRating.ratingCount = reviews.length;

  const events = eventDates.map((date) => {
    const e = JSON.parse(JSON.stringify(eventTemplate)); // Use structuredClone() if using Node v17+
    e.startDate = date.start;
    e.endDate = date.end;
    return e;
  });

  const schema = [localBusiness, place, offer, exerciseAction].concat(events);

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export default Schema;
