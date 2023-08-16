import React from 'react'

const LanguageSelect = () => {
  return (
      <select
        name="language-selector"
        id="language-selector"
        className="ml-auto w-fit bg-black text-slate-300"
      >
        <option value="eng">English</option>
        <option value="geo">ქართული</option>
      </select>
  )
}

export default LanguageSelect
