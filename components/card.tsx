interface CardProps {
  title: string;
  href: string;
  icon?: string;
  description: string;
}

export const Card = ({ title, href, icon, description }: CardProps) => {
  return (
    <a href={href} className="block p-5 border border-gray-700 rounded-xl hover:border-gray-500 transition-all">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </a>
  );
};
