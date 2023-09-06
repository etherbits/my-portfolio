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
import { sendMail } from "../lib/email";
import { useForm } from "react-hook-form";
import { contactMeSchema } from "../schemas/contact-me";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Props = {
  contactDict: DictionarySection<"contact">;
};

export type ContactMeFormSchema = z.infer<typeof contactMeSchema>;

const ContactMePageContent: React.FC<Props> = ({ contactDict }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactMeFormSchema>({ resolver: zodResolver(contactMeSchema) });

  const onSubmit = (data: ContactMeFormSchema) => console.log("data: ", data);
  console.log(errors);
  const t = generateTranslator<"contact">(contactDict);
  return (
    <div className="flex flex-col px-8 py-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <OutlinedText>Get In Touch</OutlinedText>
      </motion.div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-11 flex w-full flex-col items-end gap-6"
      >
        <Input
          icon="User"
          className="w-full"
          type="text"
          label="Name"
          placeholder="Andrew Smith"
          name="name"
          register={register}
          errors={errors}
        />
        <Input
          icon="Mail"
          className="w-full"
          type="email"
          label="E-Mail"
          placeholder="ExampleMail@gmail.com"
          name="email"
          register={register}
          errors={errors}
        />
        <motion.label
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.75 }}
          className="flex w-full flex-col gap-3"
        >
          Message
          <textarea
            className="min-h-[20vh] w-full rounded-[4px] border border-slate-500 bg-transparent px-4 py-3 text-sm text-slate-300 outline-none placeholder:text-slate-400 focus:border-slate-300"
            placeholder="I would like to get in touch..."
            {...register("message")}
          />
        </motion.label>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 1 }}
        >
          <Button>Send Message</Button>
        </motion.div>
      </form>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 1.25 }}
        className="flex w-fit flex-col items-start gap-6"
      >
        <h4>Contact Info</h4>
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
    </div>
  );
};

export default ContactMePageContent;
