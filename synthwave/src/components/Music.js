import SectionHeader from './SectionHeader.js'
import LinkButton from './LinkButton.js'

function Music() {
  return (
    <div className='Music'>
        <SectionHeader title='Music'></SectionHeader>
        <p>Music is in my blood. I write and produce like, just so much music. You can (probably) find my jams on your favorite streaming service.</p>
        <LinkButton linkUrl='https://soundcloud.com/sethduncanmusic' linkTitle='Soundcloud'></LinkButton>
        <LinkButton linkUrl='https://instagram.com/sethduncanmusic' linkTitle='Music Instagram'></LinkButton>
    </div>
  )
}

export default Music
