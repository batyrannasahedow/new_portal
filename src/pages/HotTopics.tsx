import { Root } from "../Types/types";
import dayjs from "dayjs";

type Props = {
  headlines: Root | null
}

function HotTopics({headlines}: Props):JSX.Element {
  return (
    <div className="div-hot">
      <h1 className="h1-hot">Hot Topics</h1>
      <div>
        <img className="yuzmek" src={`${headlines?.articles[19].urlToImage}`} />
        <span className="span-hot">
        {headlines?.articles[19].description}
        </span>
      </div>
        <div>
      <span className="span2-hot">{headlines?.articles[19].title}</span>
      <p className="hours-hot">{dayjs(headlines?.articles[19].publishedAt).format('H')} hours Ago</p>
      <p className="cnn-hot">{headlines?.articles[19].author}</p>
        </div>
    </div>
  );
}

export default HotTopics;
