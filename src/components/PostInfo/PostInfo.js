import { FormatDate } from 'components';
/**
 * PostInfo component renders post specific information.
 * @param {string} props.date The post publish date.
 * @param {string} props.author The post author's name.
 * @param {string} props.className An optional className to be added to the PostInfo.
 * @param {string} props.excerpt The post excerpt.
 * @returns {React.ReactElement} The PostInfo component
 */
export default function PostInfo({ className, author, date, excerpt }) {
  if (!date && !author && !excerpt) {
    return null;
  }

  return (
    <div className={className}>
      {date && (
        <time dateTime={date}>
          <FormatDate date={date} />
        </time>
      )}
      {date && author && excerpt && <>&nbsp;</>}
      {author && <span> By {author}</span>}
      {excerpt && <>{excerpt}</>}
    </div>
  );
}
