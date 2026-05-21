import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type SectionMoreLinkProps = {
  to: string;
  label?: string;
};

const SectionMoreLink = ({ to, label = 'View full page' }: SectionMoreLinkProps) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
    >
      {label}
      <ArrowRight className="w-4 h-4" aria-hidden />
    </Link>
  </div>
);

export default SectionMoreLink;
