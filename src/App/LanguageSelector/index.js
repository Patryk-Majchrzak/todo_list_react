import { useState } from 'react';
import { DropdownContainer, DropdownContent, Option, OptionImage } from './styled';
import flagPL from "./flagPL.webp"
import flagUK from "./flagUK.svg"
import { setLanguage } from '../../features/tasks/languageSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const [activeLanguageOptionId, setActiveLanguageOptionId] = useState(1);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const languageOptions = [
    { id: 1, image: flagPL, value: "pl" },
    { id: 2, image: flagUK, value: "en" },
  ];

  const activeLanguage = languageOptions.find(languageOption => languageOption.id === activeLanguageOptionId)

  const handleOptionClick = (optionId, language) => {
    setActiveLanguageOptionId(optionId);
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
  };

  return (
    <DropdownContainer>
      <Option>
        <OptionImage
          src={activeLanguage.image}
          alt={activeLanguage.value} />
      </Option>
      <DropdownContent>
        {languageOptions.filter(option => option.id !== activeLanguageOptionId).map((option) => (
          <Option
            key={option.id}
            onClick={() => handleOptionClick(option.id, option.value)}
          >
            <OptionImage src={option.image} alt={option.value} />
          </Option>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default LanguageSelector;