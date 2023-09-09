"use client";
import React, { useMemo, useState } from "react";
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
import { AnimationOrchestrator } from "../utils/animation";
import { cn } from "../utils/tailwind";

type Props = {
  contactDict: DictionarySection<"contact">;
};

export type ContactMeFormSchema = z.infer<typeof contactMeSchema>;

const MotionInput = motion(Input);
const MotionTextArea = motion(TextArea);

const ContactMePageContent: React.FC<Props> = ({ contactDict }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactMeFormSchema>({ resolver: zodResolver(contactMeSchema) });

  const t = generateTranslator<"contact">(contactDict);

  const orchestrator = useMemo(() => new AnimationOrchestrator(), []);
  const orchestrate = (duration: number) => orchestrator.orchestrate(duration);

  const [mailStatus, setMailStatus] = useState<{
    message: string;
    type: "success" | "error" | "pending" | null;
  }>({ message: "", type: null });

  const onSubmit = async (data: ContactMeFormSchema) => {
    setMailStatus({
      message: "Sending mail...",
      type: "pending",
    });
    try {
      await sendContactMail(data);
      setMailStatus({
        message: "Your mail has been sent to my inbox.",
        type: "success",
      });
      reset();
    } catch (err) {
      setMailStatus({
        message: "Sending your mail has failed. Please try again later",
        type: "error",
      });
    }
  };

  const animationDuration = 0.25;

  return (
    <div className="flex flex-col px-8 py-4 md:items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={orchestrate(animationDuration)}
      >
        <OutlinedText>{t("title")}</OutlinedText>
      </motion.div>
      <main className="py-11 md:w-[720px] md:py-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-11 flex w-full flex-col items-end gap-6"
        >
          <div className="flex w-full flex-col gap-6 md:flex-row md:gap-8">
            <MotionInput
              icon="User"
              className="w-full"
              type="text"
              label={t("name_label")}
              placeholder={t("name_placeholder")}
              name="name"
              register={register}
              errors={errors}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={orchestrate(animationDuration)}
            />
            <MotionInput
              icon="Mail"
              className="w-full"
              type="email"
              label={t("email_label")}
              placeholder={t("email_placeholder")}
              name="email"
              register={register}
              errors={errors}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={orchestrate(animationDuration)}
            />
          </div>
          <MotionTextArea
            label={t("message_label")}
            name="message"
            placeholder={t("message_placeholder")}
            register={register}
            errors={errors}
            initial={{ opacity: 0, border: "red" }}
            animate={{ opacity: 1 }}
            transition={orchestrate(animationDuration)}
          />
          {mailStatus.type && (
            <p
              className={cn(
                "text-sm text-slate-400 md:text-base",
                {
                  "text-red-500": mailStatus.type === "error",
                },
                { "text-emerald-400": mailStatus.type === "success" },
              )}
            >
              {mailStatus.message}
            </p>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={orchestrate(animationDuration)}
          >
            <Button>{t("button")}</Button>
          </motion.div>
        </form>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={orchestrate(animationDuration)}
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
          <RectLinks
            animationDelay={orchestrator.getCurrentDelay()}
            size={36}
            className="gap-6"
          />
        </motion.section>
      </main>
    </div>
  );
};

export default ContactMePageContent;
