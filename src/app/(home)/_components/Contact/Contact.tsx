import { Section } from '@/app/_components/Section/Section';
import SocialLinks from '@/app/_components/SocialLinks/SocialLinks';

const Contact = () => (
  <Section title="Contact">
    <div className="flex flex-row gap-3 flex-wrap">
      <SocialLinks className="flex flex-row items-center gap-2 font-medium text-black hover:text-white bg-gray-200 hover:bg-gray-400 border-2 border-slate-300 p-3 rounded-lg shadow-md cursor-pointer" />
    </div>
  </Section>
);

export default Contact;
