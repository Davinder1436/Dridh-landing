import { useEffect, useState } from 'react'
import { loadArticleIndex, type ArticleMeta } from '../lib/markdown'
import ArticleCard from '../components/ArticleCard'
import BookButton from '../components/BookButton'

export default function Reading() {
  const [index, setIndex] = useState<ArticleMeta[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    document.title = 'Reading — Dridh'
    loadArticleIndex().then(setIndex).catch((e: Error) => setError(e.message))
  }, [])

  return (
    <main>
      <section className="page-head">
        <div className="wrap">
          <span className="kicker">Reading</span>
          <h1>What the AI era is doing to hospitality</h1>
          <p className="lede">
            Every piece here opens with a two-minute version in plain language, for a reader who
            does not follow AI. Below that sits the detail — what each company actually shipped,
            with dates, when it reaches a property like yours, and every source so you can check
            us. Where a widely repeated claim does not hold up, we say so.
          </p>
        </div>
      </section>

      <section className="section-rule" style={{ paddingTop: 'clamp(40px, 5vw, 72px)' }}>
        <div className="wrap">
          {error && (
            <div className="load-error">
              <p><strong>The reading list could not be loaded.</strong></p>
              <p className="load-error-detail">{error}</p>
            </div>
          )}
          <div className="acard-grid acard-grid-lg">
            {index.map((a) => (
              <ArticleCard a={a} key={a.slug} wide />
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="wrap narrow" style={{ textAlign: 'center' }}>
          <h2>Want this read against your own property?</h2>
          <p className="lede" style={{ margin: '18px auto 28px' }}>
            Fifteen minutes, nothing to prepare. We look at how your property appears to these
            systems before the call and bring you the specifics.
          </p>
          <BookButton className="btn btn-primary btn-lg">Book a 15-minute call</BookButton>
        </div>
      </section>
    </main>
  )
}
