import { Box, useColorModeValue } from "@interchain-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";

export type DrawerProps = PropsWithChildren & {
  show?: boolean;
  onClose?: () => void;
};

export function Drawer({
  children,
  show = false,
  onClose = () => {},
}: DrawerProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: 1,
          }}
          initial={{ opacity: 0, translateX: "-100%" }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <Box
            height="100%"
            width="max-content"
            display="flex"
            attributes={{
              "data-testid": "drawer-container",
            }}
          >
            <Box
              width={show ? "calc(min(80vw, 300px))" : "0"}
              transition="all .3s ease"
              backgroundColor={useColorModeValue("$white", "rgb(31, 41, 55)")}
              attributes={{
                "data-testid": "drawer",
              }}
            >
              {children}
            </Box>
          </Box>
        </motion.div>
      )}

      {show && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            backgroundColor: useColorModeValue(
              "rgba(17, 24, 39, 0.8)",
              "rgba(17, 24, 39, 0.8)"
            ),
          }}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.1 }}
        />
      )}
    </AnimatePresence>
  );
}
