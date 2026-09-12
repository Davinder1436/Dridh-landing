import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadArticleIndex, type ArticleMeta } from '../lib/markdown'
import ArticleCard from './ArticleCard'

export default function ReadingOverview() {
  const [index, setIndex] = useState<ArticleMeta[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadArticleIndex().then(setIndex).catch((e: Error) => setError(e.message))
  }, [])

  return (
    <section id="reading" className="section-rule">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Reading</span>
          <h2>The evidence, written for someone who does not follow AI</h2>
          <p className="lede">
            Each piece opens with a two-minute version in plain language, then the detail — what
            each company has actually shipped, when it reaches a property like yours, and every
            source so you can check us.
          </p>
        </div>

        {error && (
          <div className="load-error">
            <p><strong>The reading list could not be loaded.</strong></p>
            <p className="load-error-detail">{error}</p>
          </div>
        )}

        <div className="acard-grid">
          {index.slice(0, 3).map((a) => (
            <ArticleCard a={a} key={a.slug} />
          ))}
        </div>

        {index.length > 3 && (
          <div className="reading-more">
            <Link className="btn btn-ghost btn-lg" to="/reading">
              All {index.length} articles <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
