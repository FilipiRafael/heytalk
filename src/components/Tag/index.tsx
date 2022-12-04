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
        <TagComponent key={tag}>
          <span onClick={() => filter(tag)}>{tag}</span>
        </TagComponent>
      ))}
      <TagComponent>
        <span onClick={setFilteredList}>Todos</span>
      </TagComponent>
    </>
  )
}