// components/FooterList.tsx
import Link from 'next/link';

interface FooterListProps {
  title: string;
  items: { title: string; href: string }[];
}

export const FooterList = ({ title, items }: FooterListProps) => (
  <div className="space-y-4">
    <h3 className="font-bold text-zinc-950 uppercase text-sm tracking-widest">{title}</h3>
    <ul className="space-y-2 text-sm text-zinc-600">
      {items.map((item) => (
        <li key={item.title}>
          <Link href={item.href} className="hover:text-zinc-950 transition-colors">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
