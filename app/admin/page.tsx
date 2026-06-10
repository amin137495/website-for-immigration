'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Load Netlify Identity
    const identityScript = document.createElement('script')
    identityScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js'
    document.head.appendChild(identityScript)

    // Load Netlify CMS
    const cmsScript = document.createElement('script')
    cmsScript.src = 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js'
    document.body.appendChild(cmsScript)
  }, [])

  return <div id="nc-root" />
}
