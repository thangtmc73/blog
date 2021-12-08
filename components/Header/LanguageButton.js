import { useRouter } from 'next/router'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Button,
} from "@chakra-ui/react";

function LanguageButton() {
  const { locale: currentLocale, locales } = useRouter()
  return (
    <Menu>
      <MenuButton as={Button} alignItems={"center"} justifyContent={"center"}>
        {currentLocale}
      </MenuButton>
      <MenuList minWidth="100px">
        {locales?.map(locale => {
          return (
            <MenuItemOption
              key={locale}
              value={locale}
              isChecked={locale === currentLocale}
            >
              {locale}
            </MenuItemOption>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default LanguageButton;
