'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
};

type ServiceSwitcherProps = {
  services: Service[];
};

export default function ServiceSwitcher({ services }: ServiceSwitcherProps) {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Service Navigation */}
      <div className="lg:col-span-4">
        <div className="space-y-1">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                activeService === service.id
                  ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-l-4 border-blue-500'
                  : 'hover:bg-white/5'
              }`}
              whileHover={{ x: activeService === service.id ? 0 : 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className={`font-semibold ${
                activeService === service.id
                  ? 'text-blue-400'
                  : 'text-gray-300'
              }`}>
                {service.title}
              </h3>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Service Content */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          {services.map((service) => (
            service.id === activeService && (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {service.title}
                </h2>
                <p className="mt-4 text-gray-300">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
