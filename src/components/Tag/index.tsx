import { Tag as TagComponent } from './styles';

interface TagProps {
  filter: (tag: string) => void;
  setFilteredList: () => void;
}

const tags = [
  'Just Conversation',
  'Games',
  'Movies/Series',
  'Travel',
]

export const Tag = ({ filter, setFilteredList }: TagProps) => {
  return (
    <>
      {tags.map((tag) => (
        <TagComponent key={tag} onClick={() => filter(tag)}>
          <span>{tag}</span>
        </TagComponent>
      ))}
      <TagComponent onClick={setFilteredList}>
        <span>Todos</span>
      </TagComponent>
    </>
  )
}