import { FC } from 'react';

interface IProps {
  className?: string;
  type: string;
  label?: string;
}

const Input: FC<IProps> = ({ className, type, label }) => {
  return (
    <div className="">
      <label className="flex flex-col gap-1">
        {label}
        <input
          type={type}
          className="px-2 py-1 bg-white border border-gray-300 border-solid rounded-md shadow-sm"
        />
      </label>
    </div>
  );
};

export default Input;
