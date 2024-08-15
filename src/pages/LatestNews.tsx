import dayjs from 'dayjs'
import { Root } from '../Types/types'

type Props = {
  headlines: Root | null 
}

function LatestNews({ headlines }: Props): JSX.Element {
  return (
    <div className='div-news'>
      <h1 className='latest-news'>Latest News</h1>
      <div className='group'>
        <img className='img' src={`${headlines?.articles[9].urlToImage}`} />
        <span className='span-news'>{headlines?.articles[9].title}</span>
        <p className="hours-news">{dayjs(headlines?.articles[9].publishedAt).format('H')} hours Ago</p>
        <p className="cnn-news">{headlines?.articles[9].author}</p>
      </div>
      <div className='group'>
        <img className='img' src={`${headlines?.articles[10].urlToImage}`} />
        <span className='span-news'>{headlines?.articles[10].title}</span>
        <p className="hours-news">{dayjs(headlines?.articles[10].publishedAt).format('H')} hours Ago</p>
        <p className="cnn-news">{headlines?.articles[10].author}</p>
      </div>
      <div className='group'>
        <img className='img' src={`${headlines?.articles[3].urlToImage}`} />
        <span className='span-news'>{headlines?.articles[3].title}</span>
        <p className="hours-news">{dayjs(headlines?.articles[3].publishedAt).format('H')} hours Ago</p>
        <p className="cnn-news">{headlines?.articles[3].author}</p>
      </div>
      <div className='group'>
        <img className='img' src={`${headlines?.articles[4].urlToImage}`} />
        <span className='span-news'>{headlines?.articles[4].title}</span>
        <p className="hours-news">{dayjs(headlines?.articles[4].publishedAt).format('H')} hours Ago</p>
        <p className="cnn-news">{headlines?.articles[4].author}</p>
      </div>
      <div className='group'>
        <img className='img' src={`${headlines?.articles[5].urlToImage}`} />
        <span className='span-news'>{headlines?.articles[5].title}</span>
        <p className="hours-news">{dayjs(headlines?.articles[5].publishedAt).format('H')} hours Ago</p>
        <p className="cnn-news">{headlines?.articles[5].author}</p>
      </div>
      <div className='group'>
        <img className='img' src={`${headlines?.articles[6].urlToImage}`} />
        <span className='span-news'>{headlines?.articles[6].title}</span>
        <p className="hours-news">{dayjs(headlines?.articles[6].publishedAt).format('H')} hours Ago</p>
        <p className="cnn-news">{headlines?.articles[6].author}</p>
      </div>
      <div className='group'>
        <img className='img' src={`${headlines?.articles[7].urlToImage}`} />
        <span className='span-news'>{headlines?.articles[7].title}</span>
        <p className="hours-news">{dayjs(headlines?.articles[7].publishedAt).format('H')} hours Ago</p>
        <p className="cnn-news">{headlines?.articles[7].author}</p>
      </div>
      <div className='group'>
        <img className='img' src={`${headlines?.articles[8].urlToImage}`} />
        <span className='span-news'>{headlines?.articles[8].title}</span>
        <p className="hours-news">{dayjs(headlines?.articles[8].publishedAt).format('H')} hours Ago</p>
        <p className="cnn-news">{headlines?.articles[8].author}</p>
      </div>
    </div>
  )
}
export default LatestNews
