// lib/directus/directus.ts
import { createDirectus, rest } from '@directus/sdk';

// Typez votre collection si nécessaire
interface Contact {
  email: string;
  name: string;
  phone: string;
  profession?: string;
  subject?: string;
  message?: string;
  date_created: string;
  status: string;
}

interface MyCollections {
  Contacts: Contact;
}

const directus = createDirectus<MyCollections>('https://votre-instance.directus.app')
  .with(rest());

export default directus;