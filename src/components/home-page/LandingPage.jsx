import HeroHeader from '@/components/home-page/HeroHeader'
import ContactForm from '@/components/ContactForm'
import IconGroup from '@/components/home-page/IconGroup'
import {services} from '@/data/services'

export default function LandingPage() {
    return (
        <div>
            <HeroHeader />
            <IconGroup services={services} />
        </div>
    )
}