import MainToggleAppearance from '@/components/appearance/main-toggle-appearance';
import NormalButton from '@/components/button/normal-button';
import NormalLink from '@/components/link/normal-link';
import PrimaryLink from '@/components/link/primary-link';
import SecondaryLink from '@/components/link/secondary-link';
import EmphasizeText from '@/components/text/emphasize-text';
import { cn } from '@/lib/utils';
import { Archive, ChartBarStacked, CircleX, Menu, ShoppingBag, ShoppingCart } from 'lucide-react';
import { ReactNode, useCallback, useMemo, useState } from 'react';

export default function MainHeader() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleOpenMenu = useCallback(() => {
        setOpenMenu(!openMenu);
    }, [openMenu]);

    const navMenu = useMemo<{ title: string; href: string; icon: ReactNode }[]>(
        () => [
            {
                title: 'Cart',
                href: route('home'),
                icon: <ShoppingBag className="size-5" />,
            },
            {
                title: 'Products',
                href: route('home'),
                icon: <ShoppingCart className="size-5" />,
            },
            {
                title: 'Categories',
                href: route('home'),
                icon: <ChartBarStacked className="size-5" />,
            },
            {
                title: 'Orders',
                href: route('home'),
                icon: <Archive className="size-5" />,
            },
        ],
        [],
    );

    return (
        <div className="relative">
            <header className="flex items-center justify-between border-b border-slate-500 px-2 py-1 sm:py-2 sm:px-4 sm:pr-6">
                <NormalLink href={route('home')} addClasses="text-lg tracking-tight">
                    LRSVES
                </NormalLink>

                <nav className="flex items-center">
                    <NormalButton addClasses="active:outline active:rounded sm:hidden" onClick={toggleOpenMenu}>
                        <Menu className="size-5" />
                    </NormalButton>
                </nav>

                <nav className="hidden items-center gap-2 sm:flex">
                    <nav className="hidden sm:flex">
                        {navMenu.map(({ title, href, icon }, index) => (
                            <NormalLink key={`NavMenu-${index}`} href={href} addClasses="flex items-center gap-2">
                                {icon}
                                {title}
                            </NormalLink>
                        ))}
                    </nav>

                    <MainToggleAppearance />
                    <PrimaryLink href={route('home')}>Login</PrimaryLink>
                </nav>
            </header>

            <section
                className={cn('absolute top-0 right-0 flex h-screen justify-end overflow-hidden bg-black/10 sm:hidden', {
                    'w-0': openMenu == false,
                    'w-full': openMenu == true,
                })}
            >
                <div
                    className={cn(
                        'animate-in flex h-screen flex-col overflow-hidden border-l border-slate-500 bg-white delay-100 duration-100 dark:bg-black',
                        {
                            'slide-in-from-left w-0': openMenu == false,
                            'slide-in-from-right w-full max-w-72': openMenu == true,
                        },
                    )}
                >
                    <div className="flex items-center justify-between border-b border-slate-500 p-2">
                        <MainToggleAppearance />

                        <NormalButton addClasses="active:outline active:rounded" onClick={toggleOpenMenu}>
                            <CircleX className="size-5" />
                        </NormalButton>
                    </div>

                    <div className="flex flex-col gap-6 p-2">
                        <nav className="flex flex-col gap-4">
                            <EmphasizeText>LRSVES Menu</EmphasizeText>

                            <div className="flex flex-col gap-1">
                                {navMenu.map(({ title, href, icon }, index) => (
                                    <NormalLink key={`NavMenu-${index}`} href={href} addClasses="flex items-center gap-2 text-lg">
                                        {icon}
                                        {title}
                                    </NormalLink>
                                ))}
                            </div>
                        </nav>

                        <div className="flex flex-col items-center gap-2">
                            <EmphasizeText>LRSVES Members</EmphasizeText>
                            <p className="text-center">
                                Join and become our member at LRSVES. Sign in with your account to have exclusive deals and much more.
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                                <PrimaryLink href={route('home')}>Login</PrimaryLink>
                                <SecondaryLink href={route('home')}>Register</SecondaryLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
