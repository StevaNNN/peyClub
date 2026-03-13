"use client";

import { FC, useCallback, useState, FormEvent } from "react";
import { LocaleDictionary } from "@/app/lib/i18n/types";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Text from "@/app/components/Text";
import Icon from "@/app/components/Icon";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Required";
  }

  if (!data.email.trim()) {
    errors.email = "Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email";
  }

  if (data.phone && !/^\+?[\d\s()-]{7,}$/.test(data.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (!data.message.trim()) {
    errors.message = "Required";
  }

  return errors;
};

interface ContactFormProps {
  t: LocaleDictionary;
}

const ContactForm: FC<ContactFormProps> = ({ t }) => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const errors = validate(form);

  const updateField = useCallback(
    (field: keyof FormData) => (value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) return;
    // TODO: handle form submission
    console.log("Submit:", form);
  };

  return (
    <form
      className="connect-section-form v-box"
      onSubmit={handleSubmit}
      noValidate
    >
      <Input
        label={t.contactPage.name}
        id="name"
        type="text"
        value={form.name}
        onChange={updateField("name")}
        error={errors.name}
        autoComplete="name"
      />
      <Input
        id="email"
        label={t.contactPage.email}
        type="email"
        value={form.email}
        onChange={updateField("email")}
        error={errors.email}
        autoComplete="email"
      />
      <Input
        id="phone"
        label={t.contactPage.phoneNumber}
        type="tel"
        value={form.phone}
        onChange={updateField("phone")}
        error={errors.phone}
        placeholder="+1"
        autoComplete="tel"
      />
      <Input
        id="message"
        label={t.contactPage.message}
        type="textarea"
        value={form.message}
        onChange={updateField("message")}
        error={errors.message}
      />

      <Button size="md" variant="dark" className="animate-button">
        <Text htmlElement="span">{t.contactPage.submitBtn}</Text>
        <Icon name="arrow-right" color="#fff" width={20} height={20} />
      </Button>
    </form>
  );
};

export default ContactForm;
