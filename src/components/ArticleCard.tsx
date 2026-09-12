import { Link } from 'react-router-dom'
import { assetUrl, type ArticleMeta } from '../lib/markdown'

export default function ArticleCard({ a, wide = false }: { a: ArticleMeta; wide?: boolean }) {
  return (
    <Link className={wide ? 'acard acard-wide' : 'acard'} to={`/reading/${a.slug}`}>
      {a.cover && (
        <div className="acard-cover">
          <img src={assetUrl(a.cover)} alt="" loading="lazy" />
        </div>
      )}
      <div className="acard-body">
        <div className="article-meta">
          <span className="article-tag">{a.kicker}</span>
          <span className="article-time">{a.readingTime}</span>
        </div>
        <h3>{a.title}</h3>
        <p className="acard-hook">{a.hook}</p>
        {a.companies?.length ? (
          <div className="acard-companies">
            {a.companies.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        ) : null}
        <span className="acard-more">
          Read the article <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
