import * as SC from './dropdown.styles';
import useToggle from '@hooks/toggle.hooks';
import { FC, useEffect, useRef, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

type Option = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

type DropdownProps = {
  options: Option[];
  placeholder?: string;
  onSelect?: (value: string) => void;
};

const CustomDropdown: FC<DropdownProps> = ({
  options,
  placeholder,
  onSelect,
}) => {
  const { isToggled, handleToggle, setToggle } = useToggle(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const handleSelectedOption = (option: Option) => {
    setSelectedOption(option);
    setToggle(false);
    if (onSelect) onSelect(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SC.Select ref={componentRef}>
      <SC.Selected onClick={handleToggle}>
        {selectedOption ? (
          <>
            {selectedOption.icon && selectedOption.icon}
            <span>{selectedOption.label}</span>
          </>
        ) : (
          <span>{placeholder}</span>
        )}
        {isToggled ? (
          <MdOutlineKeyboardArrowLeft />
        ) : (
          <MdOutlineKeyboardArrowRight />
        )}
      </SC.Selected>
      {isToggled ? (
        <SC.Dropdown>
          {options.map((option) => (
            <SC.Option
              key={option.value}
              onClick={() => handleSelectedOption(option)}
            >
              <li>
                {option.icon && option.icon}
                <span>{option.label}</span>
              </li>
            </SC.Option>
          ))}
        </SC.Dropdown>
      ) : null}
    </SC.Select>
  );
};

export default CustomDropdown;
