import { useState, useEffect } from 'react'
import { fbStorage } from 'utils/database'

const useProfilePicURL = () => {
  const [ loading, setLoading ] = useState(true)
  const [ profilePicURL, setProfilePicURL ] = useState(null)

  useEffect(() => {
    const profilePicName = 'profile_pic'
    const picExt = '.jpg'

    fbStorage.ref(`images/me/${profilePicName + picExt}`)
      .getDownloadURL()
      .then(url => {
        // console.log(url)
        setProfilePicURL(url)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if(profilePicURL)
      setLoading(false)
  }, [profilePicURL])

  return {
    loading,
    url: profilePicURL,
  }
}

export default useProfilePicURL 
