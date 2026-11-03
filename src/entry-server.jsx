import React from 'react'
import { PassThrough } from 'node:stream'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import App from './App'

/** Renders one route to an HTML string (waiting for lazy pages) plus its <head> tags from Helmet. */
export function render(url) {
  return new Promise((resolve, reject) => {
    const chunks = []
    const sink = new PassThrough()
    sink.on('data', (c) => chunks.push(c))
    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          pipe(sink)
        },
        onError: reject,
      }
    )
    sink.on('end', () => {
      const h = Helmet.renderStatic()
      resolve({
        html: Buffer.concat(chunks).toString('utf8'),
        head: [h.title, h.meta, h.link, h.script].map((x) => x.toString()).join(''),
      })
    })
    sink.on('error', reject)
  })
}
