import StackList from '@/app/_components/StackList/StackList/StackList';
import Image from 'next/image';
import { ProjectsTemplateProps } from './Template.types';
import Container from '@/app/_components/Container/Container';

const Template = ({
  children,
  title,
  year,
  image,
  stacks,
}: ProjectsTemplateProps) => (
  <Container>
    <div className="flex flex-col mx-2 sm:mx-6 text-black dark:text-white">
      {image && (
        <div className="flex flex-col justify-center items-center">
          <Image src={image} alt={title} width={1200} height={500} />
        </div>
      )}
      <div className="flex flex-col mt-6">
        <h1 className="text-4xl font-black">{title}</h1>
        <div className="flex flex-col sm:flex-row gap-2 mt-3 justify-between">
          <div className="flex flex-row text-sm text-gray-400">
            {year && <p>{year}</p>}
          </div>
          <div className="flex flex-row gap-2">
            <StackList stacks={stacks} />
          </div>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </div>
  </Container>
);

export default Template;
