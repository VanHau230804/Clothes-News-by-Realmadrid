/* eslint-disable react-hooks/rules-of-hooks */

import { FC } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useController } from 'react-hook-form';

interface IInput {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any;
  name?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  isGlass?: boolean;
  disabled?: boolean;
  colorGlass?: string;
}

const InputSearch: FC<IInput> = ({
  name = '',
  type = 'text',
  className = '',
  isGlass = false,
  colorGlass = 'text-primary',
  control,
  ...props
}) => {
  let fieldProps = {};
  if (control && name) {
    const controller = useController({ control, name, defaultValue: '' });
    fieldProps = controller.field;
  }

  return (
    <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 w-2/5 h-[50px]">
      <FiSearch
        className={`text-gray-500 mr-2 w-[30px] h-[35px] ${colorGlass}`}
      />
      <input
        {...fieldProps}
        id={name}
        type={type}
        className={`bg-transparent w-full focus:outline-solid focus-within:outline-gray-500 focus:outline-offset-4 focus:rounded-lg ${
          isGlass ? 'pl-[50px] pr-5' : 'px-5'
        } ${className}`}
        placeholder="Search..."
        {...props}
      />
    </div>
  );
};

export default InputSearch;
