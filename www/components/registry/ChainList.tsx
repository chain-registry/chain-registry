import type { AssetList, Chain } from "@chain-registry/v2-types";
import { useChain, useWalletClient } from "@cosmos-kit/react";
import { Box, Text, TextField, TextFieldAddon } from "@interchain-ui/react";
import { useVirtualizer } from "@tanstack/react-virtual";
import fuzzysort from "fuzzysort";
import debounce from "lodash/debounce";
import * as React from "react";

import { ChainCard } from "@/components/registry";

export interface ChainListProps {
  chains: Chain[];
  assetListMap: Record<string, AssetList>;
}

export const ChainList = (props: ChainListProps) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [, startTransition] = React.useTransition();
  const [filteredChains, setFilteredChains] = React.useState<Chain[]>([]);
  const [selectedChainId, setSelectedChainId] = React.useState<
    Chain["chainId"] | null
  >(null);

  // const { openView } = useChain(selectedChainId ?? "cosmoshub-4"); // or juno, osmosis, etc.
  // const { status, client } = useWalletClient();

  // The scrollable element for your list
  const parentRef = React.useRef(null);

  const list = searchValue ? filteredChains : props.chains;

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: list.length ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 140,
  });

  const searchChain = debounce((searchQuery: string) => {
    startTransition(() => {
      const filtered = fuzzysort.go(searchQuery, props.chains, {
        keys: ["chainName", "prettyName"],
      });

      setFilteredChains(filtered.map((f) => f.obj));
    });
  });

  const onSearchChange = (value: string) => {
    setSearchValue(value);
    searchChain(value);
  };

  // const onConnectChain = (chain: Chain) => {
  //   startTransition(() => {
  //     setSelectedChainId(chain.chainId);
  //   });

  //   openView();
  // };

  // React.useEffect(() => {
  //   if (status === "Done" && !!client && selectedChainId) {
  //     client.enable?.([selectedChainId]);
  //     client
  //       .getAccount?.(selectedChainId)
  //       .then((account) => console.log(account));
  //   }
  // }, [status, selectedChainId, client]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={{
          mobile: "$6",
          tablet: "$12",
        }}
      >
        <Text fontSize="$3xl" color="$text" fontWeight="$medium">
          Chain list
        </Text>

        <TextField
          id="search-chain"
          placeholder="Search chain..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          attributes={{
            width: "400px",
          }}
          endAddon={
            <TextFieldAddon position="end">
              <Box
                display="flex"
                height="$full"
                flexDirection="column"
                justifyContent="center"
                px="$4"
              >
                {searchValue && (
                  <Text
                    fontSize="$xs"
                    color="$text"
                    attributes={{
                      flexGrow: 0,
                      display: "inline-block",
                      backgroundColor: "$background",
                      borderRadius: "$md",
                      py: "$2",
                      px: "$4",
                    }}
                  >
                    Showing {filteredChains.length} of {props.chains.length}{" "}
                    chains
                  </Text>
                )}
              </Box>
            </TextFieldAddon>
          }
        />
      </Box>

      <Box
        borderWidth="1px"
        borderStyle="solid"
        borderColor="$divider"
        borderRadius="$lg"
      >
        <div
          ref={parentRef}
          style={{
            height: `800px`,
            overflow: "auto",
          }}
        >
          {/* The large inner element to hold all of the items */}
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {/* Only the visible items in the virtualizer, manually positioned to be in view */}
            {rowVirtualizer.getVirtualItems().map((virtualItem) => (
              <div
                key={virtualItem.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  padding: "10px",
                  width: "100%",
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                <ChainCard
                  chain={list[virtualItem.index]}
                  assetList={
                    props.assetListMap[list[virtualItem.index].chainName]
                  }
                  // onConnect={onConnectChain}
                />
              </div>
            ))}
          </div>
        </div>
      </Box>
    </>
  );
};
