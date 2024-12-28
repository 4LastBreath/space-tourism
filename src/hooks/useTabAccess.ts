import { useRef, useState } from 'react'

export const useTabAccess = (numOfTabs:number) => {

  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const tabRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  const setIndex = (index:number) => {
    const tab = tabRefs.current[index];
    if (tab) {
      tab.focus();
    }
  }

  const onTabKeyDown = (event: React.KeyboardEvent) => {
    const count = numOfTabs;
    const nextTab = () => setIndex((selectedTabIndex + 1) % count);
    const prevTab = () => setIndex((selectedTabIndex - 1 + count) % count);
    const firstTab = () => setIndex(0);
    const lastTab = () => setIndex(count - 1);

    const keyMap: Record<string, () => void> = {
      ArrowRight: nextTab,
      ArrowLeft: prevTab,
      Home: firstTab,
      End: lastTab,
    }

    const action = keyMap[event.key as keyof typeof keyMap];
    if (action) {
      event.preventDefault();
      action();
    }
  }

  return {
    setSelectedTabIndex,
    selectedTabIndex,
    onTabKeyDown,
    tabRefs
  }

}