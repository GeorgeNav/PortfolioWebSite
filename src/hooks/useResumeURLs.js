import { useState, useEffect } from 'react'
import { fbStorage } from 'utils/database'

const useResumeURLs = () => {
  const [ loading, setLoading ] = useState(true)
  const [ pdfURL, setPdfURL ] = useState(null)
  const [ docURL, setDocURL ] = useState(null)

  useEffect(() => {
    const resumeName = 'GeorgeNavarroResume'
    const pdfExt = '.pdf'
    const docExt = '.docx'

    fbStorage.ref(`documents/resume/${resumeName + pdfExt}`)
      .getDownloadURL()
      .then(url => {
        // console.log(url)
        setPdfURL(url)
      })
      .catch(error => console.log(error))
    fbStorage.ref(`documents/resume/${resumeName + docExt}`)
      .getDownloadURL()
      .then(url => {
        // console.log(url)
        setDocURL(url)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if(pdfURL && docURL)
      setLoading(false)
  }, [pdfURL, docURL])

  return {
    loading,
    urls: {
      pdf: pdfURL,
      doc: docURL,
    }
  }
}

export default useResumeURLs
