import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadArticleIndex, type ArticleMeta } from '../lib/markdown'
import ArticleCard from './ArticleCard'
import EraBackdrop from '../era/EraBackdrop'

export default function ReadingOverview() {
  const [index, setIndex] = useState<ArticleMeta[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadArticleIndex().then(setIndex).catch((e: Error) => setError(e.message))
  }, [])

  return (
    <section id="reading" className="section-rule">
      <EraBackdrop src="era/fold4/frontdesk.svg" className="era-reading-desk" aspect="100.12 / 76.1" opacity={0.12} />
      <EraBackdrop src="era/fold4/smartbot.svg" className="era-reading-smartbot" aspect="195.83 / 192.95" />
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Reading</span>
          <h2>The evidence, written for someone who does not follow AI</h2>
          <p className="lede">
            Two-minute reads on what AI is changing for hotels, with every source linked.
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
            <Link className="btn btn-copper btn-lg" to="/reading">
              All {index.length} articles <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
