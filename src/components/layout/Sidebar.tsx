'use client';
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Icons } from '@/components/ui/image';
import { cn } from '@/shared/cn';
import { actionMenu, menuList } from './MenuList';
import { useRouter } from 'next/navigation';
import { Flex } from '@radix-ui/themes';
import { Switch } from '@/components/ui/switch';

const Sidebar = () => {
  const [open, setOpen] = React.useState<string | null>('/dashboard');
  const [childActive, setChildActive] = React.useState<string>('/dashboard');
  const router = useRouter();
  const handleCollapse = (key: any, item: any) => {
    if (!item.child) {
      setChildActive(item.key);
      router.push(item.key);
    }
    if (open && key === open) {
      setOpen(null);
      return;
    }
    setOpen(key);
  };
  const handleClickChild = (key: string) => {
    setChildActive(key);
  };
  return (
    <>
      <div className="w-[300px] h-screen p-[25px] bg-default-light dark:bg-default-dark relative">
        <div className="px-12 font-semibold mb-16">Wallet</div>
        <div className="space-y-[25px]">
          {menuList?.length &&
            menuList?.map((item, index) => {
              let active = childActive;
              if (!item.child) {
                active = active?.split('-')[0];
              }
              return (
                <Collapsible
                  key={index}
                  className="CollapsibleRoot"
                  open={open === item.key}
                  onOpenChange={() => handleCollapse(item.key, item)}
                >
                  <CollapsibleTrigger asChild>
                    <div
                      className={cn(
                        'flex rounded-18 hover:bg-secondary-100 hover:text-secondary-800 align-middle justify-between',
                        active === item.key
                          ? 'text-secondary-800 bg-secondary-100 font-semibold'
                          : ''
                      )}
                    >
                      <div className="flex justify-center items-center gap-x-2">
                        <div>{item.icon}</div>
                        <div>{item.title}</div>
                      </div>
                      {item.child && item.child.length > 0 && (
                        <button>
                          {open === item.key ? (
                            <Icons.caretUp className="w-24 h-24" />
                          ) : (
                            <Icons.caretDown className="w-24 h-24" />
                          )}
                        </button>
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {item.child &&
                      item.child.length > 0 &&
                      item.child.map((itemChild, index) => (
                        <div
                          onClick={() => handleClickChild(`${item.key}-${index}`)}
                          key={index}
                          className={`
                        ${
                          active === `${item.key}-${index}`
                            ? 'text-secondary-800 bg-secondary-100 font-semibold '
                            : ''
                        }
                        mb-8 ml-16 flex gap-16 cursor-pointer p-12 rounded-18 hover:bg-secondary-100 hover:text-secondary-800
                        `}
                        >
                          {itemChild.icon}
                          {itemChild.title}
                        </div>
                      ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
        </div>
        <div className="space-y-[25px] mt-[30px] pt-[30px] border-t-[1px] border-[#636363]">
          {actionMenu?.length &&
            actionMenu?.map((item, index) => {
              let active = childActive;
              if (!item.child) {
                active = active?.split('-')[0];
              }
              return (
                <Collapsible
                  key={index}
                  className="CollapsibleRoot"
                  open={open === item.key}
                  onOpenChange={() => handleCollapse(item.key, item)}
                >
                  <CollapsibleTrigger asChild>
                    <div
                      className={cn(
                        'flex rounded-18 hover:bg-secondary-100 hover:text-secondary-800 align-middle justify-between',
                        active === item.key
                          ? 'text-secondary-800 bg-secondary-100 font-semibold'
                          : ''
                      )}
                    >
                      <div className="flex justify-center items-center gap-x-2">
                        <div>{item.icon}</div>
                        <div>{item.title}</div>
                      </div>
                      {item.child && item.child.length > 0 && (
                        <button>
                          {open === item.key ? (
                            <Icons.caretUp className="w-24 h-24" />
                          ) : (
                            <Icons.caretDown className="w-24 h-24" />
                          )}
                        </button>
                      )}
                    </div>
                  </CollapsibleTrigger>
                </Collapsible>
              );
            })}
        </div>
        <div className="absolute bottom-7">
          <Switch label="Switch to light" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
