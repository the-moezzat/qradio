import React, { useState, useEffect, useRef } from "react";
import { CaretDown, Check, GlobeSimple } from "@phosphor-icons/react";
import { useFetchSupportedLanguagesQuery, changeLanguage } from "../store";
import { useDispatch, useSelector } from "react-redux";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, error } = useFetchSupportedLanguagesQuery();

  const languageEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!languageEl.current) return;
      if (!languageEl.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler);
  }, []);

  const dispatch = useDispatch();
  const language = useSelector((state) => state.app.language);

  const handleChangeLanguage = (language) => {
    dispatch(changeLanguage(language));
    setIsOpen(false);
  };

  return (
    <div
      className="min-w-[130px] cursor-pointer relative text-lg text-zinc-700 lg:min-w-[95px]"
      ref={languageEl}
    >
      <div
        className="flex items-center gap-2 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GlobeSimple />
        {language.native || "Language"}
        <div className="ml-auto">
          <CaretDown />
        </div>
      </div>
      {isOpen && (
        <div className="px-1 bg-white/70 backdrop-blur-md shadow-md rounded-md absolute bottom-0 translate-y-full w-full h-60 overflow-y-scroll text-gray-600 z-40">
          {isLoading ? (
            <div className="px-3 py-1 rounded-md">Loading...</div>
          ) : (
            data.language.map((languageEl) => {
              const selected = languageEl.id === language.id;
              return (
                <div
                  key={languageEl.id}
                  className={`px-3 py-1 rounded-md flex items-center justify-between ${
                    selected && "bg-gray-100 text-gray-900"
                  }`}
                  onClick={() => {
                    handleChangeLanguage(languageEl);
                  }}
                >
                  {languageEl.native}
                  {selected && <Check weight="bold" />}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
