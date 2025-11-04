import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  ArrowLeft,
  AlertCircle,
  RefreshCw,
  Compass,
  Mail,
  Users,
} from "lucide-react";
import VortexBackground from "../components/VortexBackground";

const quickLinks = [
  {
    title: "Explore our services",
    description: "Discover how we partner with organisations to unlock new opportunities.",
    icon: Compass,
    to: "/services",
  },
  {
    title: "Meet the team",
    description: "Learn about our story, mission, and the experts behind the scenes.",
    icon: Users,
    to: "/about",
  },
  {
    title: "Get personalised support",
    description: "Reach out and we’ll guide you to the right place in moments.",
    icon: Mail,
    to: "/contact",
  },
];

const NotFound: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background pt-16 sm:pt-20">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,181,255,0.12),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(1,249,198,0.08),_transparent_50%)]" />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute -bottom-10 right-1/5 h-80 w-80 rounded-full bg-secondary/20 blur-3xl animate-float" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="hidden md:block">
          <VortexBackground />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <motion.div
            initial={{ scale: 0.85, rotate: 0 }}
            animate={{ scale: 1, rotate: [0, 6, 0, -6, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 2,
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary/15 p-6 shadow-[0_30px_80px_-40px_rgba(0,181,255,0.65)]"
          >
            <AlertCircle className="h-12 w-12 text-primary sm:h-16 sm:w-16" />
          </motion.div>
        </motion.div>

        <div className="relative w-full max-w-4xl">
          <div className="absolute -inset-[1.5px] rounded-[2.5rem] bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 opacity-70 blur-xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-background/80 backdrop-blur-2xl shadow-[0_30px_120px_-40px_rgba(15,23,42,0.7)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,181,255,0.08),_transparent_60%)]" />
            <div className="absolute inset-y-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary/10 via-transparent to-transparent" />
            <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-3 sm:space-y-4"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:text-sm">
                  Lost in the vortex
                </span>
                <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    404
                  </span>
                </h1>
                <h2 className="text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
                  This space is uncharted
                </h2>
                <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
                  The page you’re seeking drifted beyond our navigation map. Let’s guide you back to something inspiring, or connect you with someone who can help.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform duration-300 sm:px-9 sm:py-4 sm:text-lg"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.35 }}
                    />
                    <Home className="relative z-10 mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="relative z-10">Take me home</span>
                    <ArrowLeft className="relative z-10 ml-2 h-4 w-4 -scale-x-100 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <button
                    onClick={() => window.history.back()}
                    className="inline-flex items-center justify-center rounded-full border border-primary/60 px-7 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/15 sm:px-9 sm:py-4 sm:text-lg"
                  >
                    <RefreshCw className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Try previous page
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.title}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    >
                      <Link
                        to={link.to}
                        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-lg transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-foreground sm:text-lg">
                              {link.title}
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-10 flex flex-col items-center gap-3 text-xs text-muted-foreground sm:flex-row sm:text-sm"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_12px_rgba(1,249,198,0.65)]" />
                  Our team is online and ready to help.
                </span>
                <span>Need something specific? Email us and we’ll respond quickly.</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
};

export default NotFound;
