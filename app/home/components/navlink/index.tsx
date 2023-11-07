import {
  UserGroupIcon,
  HomeIcon,
  PowerIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline'
import './styles.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', href: '/home', icon: HomeIcon },
  {
    name: 'Clients',
    href: '/home/clients',
    icon: DocumentDuplicateIcon
  },
  { name: 'Users', href: '/home/users', icon: UserGroupIcon }
]

export default function NavLinks({
  isOpen,
  onToggle
}: {
  isOpen: boolean
  onToggle: () => void
}) {
  const pathname = usePathname()

  const open = isOpen ? 'w-[80%]' : 'w-0 overflow-hidden'

  return (
    <div className={`navLink-ctn ${open}`}>
      <div className="flex flex-col gap-2">
        {links.map(link => {
          const LinkIcon = link.icon
          const selected = pathname === link.href ? 'navLink-selected' : ''
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onToggle}
              className={`navLink-item ${selected}`}
            >
              <LinkIcon className="w-6 mr-4" />
              {link.name}
            </Link>
          )
        })}
      </div>
      <Link className="navLink-item" href="/signout">
        <PowerIcon className="w-6 mr-4" />
        Sign Out
      </Link>
    </div>
  )
}
