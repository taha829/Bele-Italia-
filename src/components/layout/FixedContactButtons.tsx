import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion"; // ✅ تأكد من تثبيت framer-motion

const FixedContactButtons = () => {
  const { t } = useTranslation();
  const phoneNumber = "0782633162";
  const whatsappMessage = t("contact.whatsappMessage");

  return (
    <>
      {/* زر واتساب - أسفل يمين */}
      <motion.a
        href={`https://wa.me/962${phoneNumber.slice(1)}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Button
          size="lg"
          variant="outline"
          className="h-14 w-14 rounded-full border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.a>

      {/* زر الاتصال - أسفل يسار */}
      <motion.a
        href={`tel:+962${phoneNumber.slice(1)}`}
        className="fixed bottom-6 left-6 z-50"
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <Button
          size="lg"
          variant="outline"
          className="h-14 w-14 rounded-full border-2 border-secondary text-secondary bg-white hover:bg-secondary hover:text-white shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </motion.a>
    </>
  );
};

export default FixedContactButtons;
