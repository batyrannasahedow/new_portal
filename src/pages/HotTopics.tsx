import dayjs from "dayjs";
import { Root } from "../types/Types";

type Props = {
  headlines : Root | null
}

function HotTopics({ headlines }: Props): JSX.Element {
  const articleIndex = 2;
  const article = headlines?.articles[articleIndex];

  return (
    <div className="div-hot">
      <h1 className="h1-hot">Hot Topics</h1>
      <div>
        <img className="yuzmek" src={article?.urlToImage} />
        <span className="span-hot">{article?.description}</span>
      </div>
      <div>
        <span className="span2-hot">{article?.title}</span>
        <p className="hours-hot">
          {dayjs(article?.publishedAt).format("H")} hours Ago
        </p>
        <p className="cnn-hot">{article?.author}</p>
      </div>
    </div>
  );
}

export default HotTopics;
