"use client";
import React from "react";
import RectLinks from "./RectLinks";
import Button from "./Button";
import OutlinedText from "./OutlineText";
import { generateTranslator } from "../utils/i18n";
import { DictionarySection } from "../[lang]/dictionaries";
import { motion } from "framer-motion";
import Icon from "./Icon";
import Input from "./Input";
import { sendContactMail } from "../lib/email";
import { useForm } from "react-hook-form";
import { contactMeSchema } from "../schemas/contact-me";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextArea from "./TextArea";

type Props = {
  contactDict: DictionarySection<"contact">;
};

export type ContactMeFormSchema = z.infer<typeof contactMeSchema>;

const ContactMePageContent: React.FC<Props> = ({ contactDict }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactMeFormSchema>({ resolver: zodResolver(contactMeSchema) });

  const onSubmit = (data: ContactMeFormSchema) => sendContactMail(data);

  const t = generateTranslator<"contact">(contactDict);
  return (
    <div className="flex flex-col px-8 py-4 md:items-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <OutlinedText>{t("title")}</OutlinedText>
      </motion.div>
      <main className="py-11 md:w-[720px] md:py-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-end gap-6"
        >
          <div className="w-full md:flex md:gap-8">
            <Input
              icon="User"
              className="w-full"
              type="text"
              label={t("name_label")}
              placeholder={t("name_placeholder")}
              name="name"
              register={register}
              errors={errors}
            />
            <Input
              icon="Mail"
              className="w-full"
              type="email"
              label={t("email_label")}
              placeholder={t("email_placeholder")}
              name="email"
              register={register}
              errors={errors}
            />
          </div>
          <TextArea
            label={t("message_label")}
            name="message"
            placeholder={t("message_placeholder")}
            register={register}
            errors={errors}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 1 }}
          >
            <Button>{t("button")}</Button>
          </motion.div>
        </form>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 1.25 }}
          className="flex w-fit flex-col items-start gap-6"
        >
          <h4>{t("contact_info_title")}</h4>
          <ul className="mb-4 flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-3">
              <Icon name="Mail" className="stroke-slate-400" size={20} />
              <span className="break-all">nika.qvrivishviliwork@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="Phone" className="stroke-slate-400" size={20} />
              <span>(+995) 595-33-29-42</span>
            </li>
          </ul>
          <RectLinks animationDelay={1.5} size={36} className="gap-6" />
        </motion.section>
      </main>
    </div>
  );
};

export default ContactMePageContent;
