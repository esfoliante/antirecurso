import Score from 'src/types/Score';

interface ScoreboardRowProps {
  line: Score;
  position: number;
  highlight?: boolean;
}

const ScoreboardRow: React.FC<ScoreboardRowProps> = ({ line, position, highlight }) => {
  return (
    <tr className={`${highlight ? 'bg-orange-200' : ''} text-xl font-bold`} key={line.user_id}>
      <th scope="row" className="pl-6 md:pl-16 pr-6 py-3 whitespace-nowrap rounded-l-full">
        {position}
      </th>
      <td className="pl-4 py-2 min-w-[3.5rem]">
        <img
          className="w-9 rounded-full aspect-square"
          src={`https://gravatar.com/avatar/${line.avatar}?s=64&d=identicon`}
          alt={line.user_name}
        />
      </td>
      <td className="px-4 py-2 md:min-w-[28rem]">
        <div className="flex flex-col items-start">
          <span className="text-lg leading-5">{line.user_name}</span>
          <span className="text-sm leading-3 font-normal text-gray-600">{line.exams} exames</span>
        </div>
      </td>
      <td className="px-6 md:pr-16 py-2 rounded-r-full">{line.score}</td>
    </tr>
  );
};

export default ScoreboardRow;