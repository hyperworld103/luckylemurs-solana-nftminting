echo "[INFO] Cleaning older cache folder for metaplex"
rm -rf ./.cache
echo "[INFO] Uploading all resources"
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts upload ./nfts-sources --env devnet --keypair ~/.config/solana/candyfactory-devnet.json > ./logs/dev/upload-log.txt
echo "[INFO] Creating candy machine"
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine --env devnet --keypair ~/.config/solana/candyfactory-devnet.json --price 1 --sol-treasury-account HjCTr1wLX2B7GGr4wzUKfRy6PYeL99SYoAh4yXcsApwZ > ./logs/dev/candy-machine-log.txt
echo "[INFO] Setting minting start date (goLiveDate)"
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts update_candy_machine -d "9 Oct 2021 23:00:00 GMT" --env devnet --keypair ~/.config/solana/candyfactory-devnet.json > ./logs/dev/candy-machine-start-date.txt
