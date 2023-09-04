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

type Props = {
  contactDict: DictionarySection<"contact">;
};

const ContactMePageContent: React.FC<Props> = ({ contactDict }) => {
  const t = generateTranslator<"contact">(contactDict);
  return (
    <div className="flex flex-col px-8 py-4">
      <OutlinedText>Get In Touch</OutlinedText>
      <form className="flex w-full flex-col items-end gap-6 my-11">
        <Input
          icon="User"
          className="w-full"
          inputProps={{
            name: "Name",
            type: "text",
            placeholder: "Andrew Smith",
          }}
        />
        <Input
          icon="Mail"
          className="w-full"
          inputProps={{
            name: "E-Mail",
            type: "email",
            placeholder: "ExampleMail@gmail.com",
          }}
        />
        <label className="flex w-full flex-col gap-3">
          Message
          <textarea
            className="min-h-[20vh] w-full rounded-[4px] border border-slate-500 bg-transparent px-4 py-3 text-sm text-slate-300 placeholder:text-slate-400"
            placeholder="I would like to get in touch..."
          />
        </label>
        <Button>Send Message</Button>
      </form>
      <section className="flex w-fit flex-col items-start gap-6">
        <h4>Contact Info</h4>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-3">
            <Icon name="Mail" className="stroke-slate-400" size={20} />
            <span className="break-all">nika.qvrivishviliwork@gmail.com</span>
          </li>
          <li className="flex items-center gap-3">
            <Icon name="Phone" className="stroke-slate-400" size={20} />
            <span>(+995) 595-33-29-42</span>
          </li>
        </ul>
      <RectLinks size={32} gap={16} />
      </section>
    </div>
  );
};

export default ContactMePageContent;
