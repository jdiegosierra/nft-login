namespace WalletConnectSharp.Core.Models
{
    public class SavedSession
    {
        public string ClientID { get; }
        public string BridgeURL { get; }
        public string Key { get; }
        public byte[] KeyRaw { get; }
        public string PeerID { get; }
        public int NetworkID { get; }
        public string[] Accounts { get; }
        public int ChainID { get; }
        public ClientMeta DappMeta { get; }
        
        public ClientMeta WalletMeta { get; }

        public SavedSession(string clientID, string bridgeURL, string key, byte[] keyRaw, string peerID, int networkID, string[] accounts, int chainID, ClientMeta dappMeta, ClientMeta walletMeta)
        {
            ClientID = clientID;
            BridgeURL = bridgeURL;
            Key = key;
            KeyRaw = keyRaw;
            PeerID = peerID;
            NetworkID = networkID;
            Accounts = accounts;
            ChainID = chainID;
            DappMeta = dappMeta;
            WalletMeta = walletMeta;
        }
    }
}