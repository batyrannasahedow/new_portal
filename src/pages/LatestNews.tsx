import dayjs from 'dayjs';
import { Root } from '../types/Types';

type Props = {
  headlines: Root | null;
};

function LatestNews({ headlines }: Props): JSX.Element {
  const displayedArticles = headlines?.articles.slice(3, 11) || [];

  if (!headlines || headlines.articles.length === 0) {
    return <p>No latest news available</p>;
  }

  return (
    <div className='div-news'>
      <h1 className='latest-news'>Latest News</h1>
      {displayedArticles.map((article, index) => (
        <div key={index} className='group'>
          <img className='img' src={article.urlToImage} />
          <span className='span-news'>{article.title}</span>
          <p className='hours-news'>
            {dayjs(article.publishedAt).format('H')} hours Ago
          </p>
          <p className='cnn-news'>{article.author}</p>
        </div>
      ))}
    </div>
  );
}
export default LatestNews;
