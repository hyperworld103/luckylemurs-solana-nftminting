echo "[INFO] Setting Solana to use mainnet network"
solana config set --url https://api.mainnet-beta.solana.com
echo "[INFO] Generating new wallet"
solana-keygen recover prompt://?full-path=m/44'/501'/0'/0' -o ~/.config/solana/candyfactory-mainnet.json --force
echo "[INFO] Setting config to be the new wallet"
solana config set -k ~/.config/solana/candyfactory-mainnet.json

