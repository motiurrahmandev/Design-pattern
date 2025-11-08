


import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext();

export default function Tabs({ defaultValue = 0, children }) {
  const [activeIndex, setActiveIndex] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
}

Tabs.List = function TabsList({ children }) {
  return <div className="flex gap-2 border-b">{children}</div>;
};

Tabs.Tab = function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = activeIndex === index;

  return (
    <button
      onClick={() => setActiveIndex(index)}
      className={`px-4 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "border-b-2 border-blue-500 text-blue-600"
          : "text-gray-500 hover:text-blue-500"
      }`}
    >
      {children}
    </button>
  );
};

Tabs.Panels = function TabPanels({ children }) {
  const { activeIndex } = useContext(TabsContext);
  return <div className="p-4">{children[activeIndex]}</div>;
};

Tabs.Panel = function TabPanel({ children }) {
  return <>{children}</>;
};

