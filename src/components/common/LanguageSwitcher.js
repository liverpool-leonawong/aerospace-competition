import { Fragment, React, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { LanguageRounded } from '@mui/icons-material';
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Language() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={colorChange ? 'btn btn-language change' : 'btn btn-language'}>
          <div className="flex items-center">
            <LanguageRounded sx={{ fontSize: "24px" }} />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button onClick={() => changeLanguage("zh_tw")} className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>
                  {t("language-tw")}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button onClick={() => changeLanguage("zh_cn")} className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>
                  {t("language-cn")}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
