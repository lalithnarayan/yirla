import Loading from '@/components/shared/Loading'
import {
    LAYOUT_TYPE_MODERN
} from '@/constants/theme.constant'
import { useAppSelector } from '@/store'
import useAuth from '@/utils/hooks/useAuth'
import useDirection from '@/utils/hooks/useDirection'
import useLocale from '@/utils/hooks/useLocale'
import { lazy, Suspense, useMemo } from 'react'

const layouts = {
    [LAYOUT_TYPE_MODERN]: lazy(() => import('./ModernLayout')),
}

const Layout = () => {
    const layoutType = useAppSelector((state) => state.theme.layout.type)

    const { authenticated } = useAuth()

    useDirection()

    useLocale()

    const AppLayout = useMemo(() => {
        if (authenticated) {
            return layouts[layoutType]
        }
        return lazy(() => import('./AuthLayout'))
    }, [layoutType, authenticated])

    return (
        <Suspense
            fallback={
                <div className="flex flex-auto flex-col h-[100vh]">
                    <Loading loading={true} />
                </div>
            }
        >
            <AppLayout />
        </Suspense>
    )
}

export default Layout
