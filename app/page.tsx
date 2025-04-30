import LocaleSwitcher from '@/components/locale-switcher';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t("title")}</h1>
      <LocaleSwitcher/>
      <span className="font-mono">Instrument sans</span>
      <p className="text-primary">primary text</p>
      <div className="my-3 ml-2 w-sm h-10 flex items-center justify-center border border-gray-border">border gray</div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ea explicabo sed eligendi, reiciendis odio possimus non aspernatur hic, doloribus libero ipsam obcaecati amet, nobis necessitatibus quam saepe eius mollitia?</p>
    </div>
  );
}
