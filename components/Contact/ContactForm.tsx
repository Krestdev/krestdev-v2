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


const formSchema = z.object({
  nom: z.string().min(3, {
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
      nom: "",
      email: "",
      phone: "",
      objet: "",
      message: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    form.reset()
  }

  const t = useTranslations("Contact.Form")

  return (
    <div className='flex flex-col justify-center lg:flex-row h-fit w-full gap-10 py-[96px] px-7'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col p-7 gap-8 rounded-[12px] border border-[#D9EBFF] '>
          <div className='flex flex-col gap-2'>
            <h2>{t("title")}</h2>
            <p className='text-black'>{t("description")}</p>
          </div>
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("nom")}</FormLabel>
                <FormControl>
                  <Input {...field} className='max-w-[360px] w-full px-4 py-2 h-[40px] border-[#BEBEBE] rounded-none' placeholder="ex. John Doe" />
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
                  <Input {...field} className='max-w-[360px] w-full px-4 py-2 h-[40px] border-[#BEBEBE] rounded-none' placeholder="ex. johndoe@gmail.com" />
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
                  <Input {...field} className='max-w-[360px] w-full px-4 py-2 h-[40px] border-[#BEBEBE] rounded-none' placeholder="ex. +237678165..." />
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
                  <Input {...field} className='max-w-[360px] w-full px-4 py-2 h-[40px] border-[#BEBEBE] rounded-none' placeholder={t("objetLabel")} />
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
                  <Input {...field} className='max-w-[360px] w-full px-4 py-2 h-[40px] border-[#BEBEBE] rounded-none' placeholder={t("messageLabel")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-fit'>{t("submit")}</Button>
        </form>
      </Form>
      <Info />
    </div>
  )
}

export default ContactForm
