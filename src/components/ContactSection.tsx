import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const partnershipTypes = [
  "Publipost / Stories",
  "Campanha de marca",
  "Evento / Ativação",
  "Embaixadora",
  "Outro",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Proposta enviada com sucesso! Entrarei em contato em breve.");
        setFormData({ name: "", email: "", company: "", type: "", message: "" });
      } else {
        toast.error("Erro ao enviar proposta. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao enviar proposta. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase mb-3" style={{ color: '#874637' }}>
            Entre em contato
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Envie sua Proposta
          </h2>
          <p className="text-muted-foreground font-body">
            Preencha o formulário abaixo e retorno em até 48h.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 md:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-body font-medium text-foreground mb-1.5">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-body font-medium text-foreground mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                placeholder="email@empresa.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="company" className="block text-sm font-body font-medium text-foreground mb-1.5">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                maxLength={100}
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                placeholder="Nome da empresa"
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-body font-medium text-foreground mb-1.5">
                Tipo de parceria
              </label>
              <select
                id="type"
                name="type"
                required
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              >
                <option value="">Selecione...</option>
                {partnershipTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-1.5">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={1000}
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
              placeholder="Descreva sua proposta..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white py-4 rounded-full font-body font-medium text-base tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            style={{ backgroundColor: '#874637' }}
          >
            <Send size={18} />
            {isSubmitting ? 'Enviando...' : 'Enviar proposta'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
