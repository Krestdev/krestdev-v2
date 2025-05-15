"use client"

import React from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import Info from './Info'
import { toast } from 'sonner'
import { locales } from '@/i18n/config'
import { useRouter } from 'next/navigation'
import { Textarea } from '../ui/textarea'
import { RevealGroup } from '../reveal'

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Veuillez renseigner au moins 3 caractères"
  }),
  email: z.string().email(),
  phone: z.string(),
  objet: z.string().min(4, {
    message: "Veuillez renseigner au moins 4 caractères"
  }),
  message: z.string().min(12, {
    message: "Veuillez renseigner au moins 12 caractères"
  })
})


const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      objet: "",
      message: ""
    },
  });

  const t = useTranslations("Contact.Form")
  const locale = useRouter()

  const onSubmit = async (data: z.infer<typeof formSchema>) => {

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          profession: "",
          subject: data.objet,
          message: data.message,
          lang: locale
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur serveur");
      }

      toast.success(t("success"));
      form.reset();

    } catch (error: any) {
      toast.error(error.message || t("error"));
      console.error("Erreur:", error);
    }
  };

  return (
    <section className='containerBloc grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10'>
      <div className='p-7 flex flex-col gap-6 sm:gap-8 border border-subtitle-blue rounded-sm sm:rounded-lg lg:rounded-xl'>
        <RevealGroup y={15} blur={6} className='flex flex-col gap-2'>
            <h2 className='text-left'>{t("title")}</h2>
            <p className='text-paragraph text-xs sm:text-sm lg:text-base'>{t("description")}</p>
          </RevealGroup>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <RevealGroup className='grid gap-4'>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("nom")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="ex. John Doe" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="ex. johndoe@gmail.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("tel")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="ex. +237678165..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="objet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("objet")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("objetLabel")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("message")}</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder={t("messageLabel")}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-fit' disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? t("submitting") : t("submit")}
          </Button>
          </RevealGroup>
        </form>
      </Form>
      </div>
      <Info />
    </section>
  )
}

export default ContactForm