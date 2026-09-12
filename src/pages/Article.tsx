import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { assetUrl, loadArticle, loadArticleIndex, type ArticleMeta } from '../lib/markdown'
import BookButton from '../components/BookButton'
import ArticleCard from '../components/ArticleCard'

export default function Article() {
  const { slug = '' } = useParams()
  const [meta, setMeta] = useState<ArticleMeta | null>(null)
  const [others, setOthers] = useState<ArticleMeta[]>([])
  const [html, setHtml] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const fetchBody = useCallback(async () => {
    setError(null)
    setHtml(null)
    try {
      const { html } = await loadArticle(slug)
      setHtml(html)
    } catch (e) {
      console.error(`[article] ${slug}:`, e)
      setError((e as Error).message)
    }
  }, [slug])

  useEffect(() => {
    window.scrollTo(0, 0)
    loadArticleIndex()
      .then((list) => {
        setMeta(list.find((a) => a.slug === slug) ?? null)
        setOthers(list.filter((a) => a.slug !== slug).slice(0, 2))
      })
      .catch(() => undefined)
    fetchBody()
  }, [slug, fetchBody])

  useEffect(() => {
    if (meta) document.title = `${meta.title} — Dridh`
    return () => {
      document.title = 'Dridh — a modern foundation for hospitality in the AI era'
    }
  }, [meta])

  return (
    <main>
      <article>
        <section className="page-head">
          <div className="wrap narrow">
            <Link className="back-link" to="/reading">
              <span aria-hidden="true">←</span> All reading
            </Link>
            {meta ? (
              <>
                <div className="article-meta" style={{ marginTop: '22px' }}>
                  <span className="article-tag">{meta.kicker}</span>
                  <span className="article-time">{meta.readingTime}</span>
                </div>
                <h1 className="article-title">{meta.title}</h1>
                <p className="lede" style={{ marginTop: '22px' }}>{meta.hook}</p>
                {meta.companies?.length ? (
                  <div className="acard-companies" style={{ marginTop: '22px' }}>
                    {meta.companies.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                ) : null}
              </>
            ) : (
              <h1 className="article-title">Loading…</h1>
            )}
          </div>
        </section>

        {meta?.cover && (
          <div className="wrap narrow">
            <img className="article-cover" src={assetUrl(meta.cover)} alt="" />
          </div>
        )}

        <section style={{ paddingTop: 'clamp(28px, 4vw, 46px)' }}>
          <div className="wrap narrow">
            {error && (
              <div className="load-error">
                <p><strong>This article could not be loaded.</strong></p>
                <p className="load-error-detail">{error}</p>
                <button className="btn btn-ghost btn-sm" onClick={fetchBody}>
                  Try again
                </button>
              </div>
            )}
            {!error && !html && <p className="article-loading">Loading the article…</p>}
            {html && <div className="md" dangerouslySetInnerHTML={{ __html: html }} />}
          </div>
        </section>
      </article>

      <section className="section-rule">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '30px' }}>
            <span className="kicker">Keep reading</span>
          </div>
          <div className="acard-grid">
            {others.map((a) => (
              <ArticleCard a={a} key={a.slug} />
            ))}
          </div>
          <div className="reading-more">
            <BookButton className="btn btn-primary btn-lg">Book a 15-minute call</BookButton>
          </div>
        </div>
      </section>
    </main>
  )
}
