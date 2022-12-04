import { Tag as TagComponent } from './styles';

interface TagProps {
  text: string;
}

export const Tag = ({ text }: TagProps) => {
  return (
    <TagComponent>
      <span>{text}</span>
    </TagComponent>
  )
}