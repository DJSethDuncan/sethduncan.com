import SectionHeader from './SectionHeader'
import LinkButton from './LinkButton'

function About() {
    return (
        <div className='About'>
            <SectionHeader title='About'></SectionHeader>
            <p>Yo.</p>
            <p>I like to make things. Mostly this manifests in code and music.</p>
            <p>These days I spend most of my days managing a team of incredible software engineers while striving not to lose my software chops.</p>
            <p>My evenings are made up of family time, reading, studying, and making music. And some video games.</p>
            <LinkButton linkUrl="https://twitter.com/djsethduncan" linkTitle="Twitter"></LinkButton>
            <LinkButton linkUrl="https://instagram.com/djsethduncan" linkTitle="Instagram"></LinkButton>
            <LinkButton linkUrl="https://www.youtube.com/c/SethDuncanICT" linkTitle="YouTube"></LinkButton>
        </div>
    )
}

export default About