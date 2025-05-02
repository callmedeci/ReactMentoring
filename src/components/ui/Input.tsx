import { ComponentPropsWithoutRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
  name: string;
};

function Input({ label, name, ...props }: InputProps) {
  return (
    <div className='control'>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...props} />
    </div>
  );
}

export default Input;
