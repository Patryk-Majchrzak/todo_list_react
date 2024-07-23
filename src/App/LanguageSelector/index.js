import { useState } from 'react';
import { DropdownContainer, DropdownContent, Option, OptionImage } from './styled';
import flagPL from "./flagPL.webp"
import flagUK from "./flagUK.svg"

const LanguageSelector = () => {
  const [activeLanguageOptionId, setActiveLanguageOptionId] = useState(1);

  const languageOptions = [
    {id: 1, image: flagPL, value:"polski"},
    {id: 2, image: flagUK, value:"english"},
  ];

  const activeLanguage = languageOptions.find(languageOption => languageOption.id === activeLanguageOptionId)

  const handleOptionClick = (option) => {
    setActiveLanguageOptionId(option);
  };

  return (
    <DropdownContainer> 
      <Option onClick={() => handleOptionClick(activeLanguageOptionId)}>
        <OptionImage 
        src={activeLanguage.image} 
        alt={activeLanguage.value} />
      </Option>
      <DropdownContent>
        {languageOptions.filter(option => option.id !== activeLanguageOptionId).map((option) => (
          <Option
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
          >
            <OptionImage src={option.image} alt={option.value}/>
          </Option>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default LanguageSelector;