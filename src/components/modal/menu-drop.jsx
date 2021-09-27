import React from "react";
import { Menu } from "@headlessui/react";

function MenuDrop() {
  return (
    <>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button>More</Menu.Button>
            {open && (
              <div>
                {/*
                Using `static`, `Menu.Items` is always rendered and
                ignores the `open` state.
              */}
                <Menu.Items static>
                  <Menu.Item>{/* ... */}</Menu.Item>
                  {/* ... */}
                </Menu.Items>
              </div>
            )}
          </>
        )}
      </Menu>
    </>
  );
}

export default MenuDrop;
