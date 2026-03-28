import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Layers } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  groupCompanies,
  groupMediaIntro,
  filterLabels,
} from "@/data/groupMediaInventory";

const categoryStyle = {
  metro: "border-primary/50 bg-primary/10 text-primary",
  rail: "border-white/20 bg-white/5 text-white/90",
  bus: "border-white/20 bg-white/5 text-white/90",
  digital: "border-gold/40 bg-gold/10 text-gold",
  static: "border-white/30 bg-transparent text-white/70",
};

export default function GroupMediaInventory() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => {
    if (filter === "all") return groupCompanies;
    return groupCompanies.filter((c) => c.categories.includes(filter));
  }, [filter]);

  return (
    <div className="min-h-screen bg-obsidian pt-32" data-testid="group-media-page">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4">
            {groupMediaIntro.headline}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.95] text-white mb-6">
            {groupMediaIntro.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gold">
              {groupMediaIntro.title.split(" ").slice(-1)}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            {groupMediaIntro.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/50">
            <Building2 className="text-gold shrink-0" size={18} />
            <span>
              Seven operating profiles consolidated — one point of contact through{" "}
              <span className="text-white font-semibold">Mahishmati Media</span>.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
            Filter by format or mode
          </p>
          <div className="flex flex-wrap gap-2">
            {filterLabels.map(({ id, label }) => (
              <Button
                key={id}
                type="button"
                variant={filter === id ? "default" : "outline"}
                size="sm"
                className={
                  filter === id
                    ? "rounded-none bg-gold text-black hover:bg-[#AA8C2C] uppercase text-xs tracking-wider"
                    : "rounded-none border-white/20 text-white/80 hover:bg-white/10 uppercase text-xs tracking-wider"
                }
                onClick={() => setFilter(id)}
              >
                {label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          {visible.map((company, idx) => (
            <motion.article
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="bg-obsidian-card border border-white/10 overflow-hidden"
            >
              <div className="p-6 md:p-8 border-b border-white/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-tight">
                      {company.name}
                    </h2>
                    <p className="text-gold/90 text-sm uppercase tracking-widest mt-2">
                      {company.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.categories.map((cat) => (
                      <Badge
                        key={cat}
                        variant="outline"
                        className={`rounded-none uppercase text-[10px] tracking-wider ${categoryStyle[cat]}`}
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                <Accordion type="single" collapsible className="w-full">
                  {company.highlights.map((block, i) => (
                    <AccordionItem
                      key={i}
                      value={`${company.id}-${i}`}
                      className="border-white/10"
                    >
                      <AccordionTrigger className="text-left text-white hover:text-gold hover:no-underline py-4 text-sm md:text-base font-semibold uppercase tracking-wide">
                        <span className="flex items-center gap-2">
                          <Layers className="text-gold shrink-0" size={18} />
                          {block.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-1 pb-2">
                          {block.items.map((line, j) => (
                            <li
                              key={j}
                              className="text-sm text-white/65 leading-relaxed flex gap-2"
                            >
                              <span className="text-gold shrink-0">•</span>
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-white/50 text-center py-16">
            No companies match this filter. Try &quot;All&quot;.
          </p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-10 border border-white/10 bg-black/40"
        >
          <p className="text-sm text-white/55 leading-relaxed mb-6">{groupMediaIntro.footnote}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-none bg-gold text-black font-bold uppercase tracking-wider hover:bg-[#AA8C2C] transition-all px-8 py-4 text-sm"
            >
              Request combined proposal <ArrowRight className="ml-2" size={16} />
            </Link>
            <Link
              to="/media-assets"
              className="inline-flex items-center justify-center rounded-none border border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-all px-8 py-4 text-sm"
            >
              Sindhi Camp packages
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
