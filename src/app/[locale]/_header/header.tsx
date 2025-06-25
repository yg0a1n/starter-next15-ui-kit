import NavigationLinks from '@/components/navigation/navigation-links';
import { GITHUB_REPO_NAME } from '@/config/app';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="mx-auto mt-3 flex w-full max-w-7xl flex-row items-center justify-between gap-6 px-4 sm:flex-row sm:px-0 lg:mt-6 lg:px-8">
        <div className="flex flex-1 justify-start">
          <NavigationLinks />
        </div>
        <div className="flex w-full flex-1 justify-end gap-6 sm:w-auto sm:items-center">
          <Link href={`https://github.com/${GITHUB_REPO_NAME}`} target="_blank">
            <svg className="block dark:hidden" width="24" height="24">
              <use href="/icons/nav-icons.svg#github-black" />
            </svg>
            <svg className="hidden dark:block" width="24" height="24">
              <use href="/icons/nav-icons.svg#github-white" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
