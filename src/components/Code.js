import SectionHeader from './SectionHeader'
import LinkButton from './LinkButton'

function Code() {
    return (
        <div className='Code'>
            <SectionHeader title='Code'></SectionHeader>
            <p>I wrote my first code in QBasic, and now I write Javascript for all sorts of purposes.</p>
            <p>I also dabble in Ruby on Rails, React, and several other languages and frameworks.</p>
            <LinkButton linkUrl="https://github.com/djsethduncan" linkTitle="Github"></LinkButton>
            <LinkButton linkUrl="https://www.linkedin.com/in/seth-duncan-ict/" linkTitle="LinkedIn"></LinkButton>
        </div>
    )
}

export default Code