import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className: string }>;
}

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative p-6 rounded-xl backdrop-blur-xl bg-gray-800/40 hover:bg-gray-800/50 border border-white/10 shadow-lg hover:shadow-xl transition-all group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-blue-400/5 to-cyan-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-t-xl opacity-80" />
      <div className="relative flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-400 text-white shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110 group-hover:brightness-110">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-lg font-semibold bg-gradient-to-br from-blue-200 to-cyan-200 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
