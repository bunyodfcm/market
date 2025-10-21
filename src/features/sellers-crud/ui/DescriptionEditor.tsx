type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function DescriptionEditor({ value, onChange }: Props) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full min-h-[200px] p-3 border border-gray-300 rounded-md resize-vertical"
      placeholder="Sotuvchi tavsifini kiriting..."
    />
  );
}
