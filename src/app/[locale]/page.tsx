import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic'
const ManufacturingSection = dynamic(() => import('../components/Main/Manufacturing'), { ssr: false })

const MainPage = () => {
    const t = useTranslations('translations');


    return <>
        <ManufacturingSection />
    </>;
}

export default MainPage;