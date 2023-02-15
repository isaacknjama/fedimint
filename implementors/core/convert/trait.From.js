(function() {var implementors = {
"fedimint_bitcoind":[["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_bitcoind/struct.DynBitcoindRpc.html\" title=\"struct fedimint_bitcoind::DynBitcoindRpc\">DynBitcoindRpc</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_bitcoind/trait.IBitcoindRpc.html\" title=\"trait fedimint_bitcoind::IBitcoindRpc\">IBitcoindRpc</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"]],
"fedimint_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_core/struct.TransactionId.html\" title=\"struct fedimint_core::TransactionId\">TransactionId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ParseAmountError&gt; for <a class=\"enum\" href=\"fedimint_core/enum.ParseAmountError.html\" title=\"enum fedimint_core::ParseAmountError\">ParseAmountError</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_core/api/struct.DynFederationApi.html\" title=\"struct fedimint_core::api::DynFederationApi\">DynFederationApi</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_core/api/trait.IFederationApi.html\" title=\"trait fedimint_core::api::IFederationApi\">IFederationApi</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"fedimint_core/config/struct.ClientConfig.html\" title=\"struct fedimint_core::config::ClientConfig\">ClientConfig</a>&gt; for <a class=\"struct\" href=\"fedimint_core/api/struct.WsClientConnectInfo.html\" title=\"struct fedimint_core::api::WsClientConnectInfo\">WsClientConnectInfo</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"fedimint_core/core/struct.ModuleKind.html\" title=\"struct fedimint_core::core::ModuleKind\">ModuleKind</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"fedimint_core/module/struct.DynModuleGen.html\" title=\"struct fedimint_core::module::DynModuleGen\">DynModuleGen</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"fedimint_core/config/struct.ModuleGenRegistry.html\" title=\"struct fedimint_core::config::ModuleGenRegistry\">ModuleGenRegistry</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_core/struct.PeerId.html\" title=\"struct fedimint_core::PeerId\">PeerId</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_core/core/server/struct.DynServerModule.html\" title=\"struct fedimint_core::core::server::DynServerModule\">DynServerModule</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_core/core/server/trait.IServerModule.html\" title=\"trait fedimint_core::core::server::IServerModule\">IServerModule</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>&gt; for <a class=\"struct\" href=\"fedimint_core/struct.PeerId.html\" title=\"struct fedimint_core::PeerId\">PeerId</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_core/core/client/struct.DynClientModule.html\" title=\"struct fedimint_core::core::client::DynClientModule\">DynClientModule</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_core/core/client/trait.IClientModule.html\" title=\"trait fedimint_core::core::client::IClientModule\">IClientModule</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Amount&gt; for <a class=\"struct\" href=\"fedimint_core/struct.Amount.html\" title=\"struct fedimint_core::Amount\">Amount</a>"],["impl&lt;T: <a class=\"trait\" href=\"fedimint_core/encoding/trait.Encodable.html\" title=\"trait fedimint_core::encoding::Encodable\">Encodable</a> + <a class=\"trait\" href=\"fedimint_core/encoding/trait.Decodable.html\" title=\"trait fedimint_core::encoding::Decodable\">Decodable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a>&gt; for <a class=\"struct\" href=\"fedimint_core/module/struct.SerdeModuleEncoding.html\" title=\"struct fedimint_core::module::SerdeModuleEncoding\">SerdeModuleEncoding</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.ParseIntError.html\" title=\"struct core::num::error::ParseIntError\">ParseIntError</a>&gt; for <a class=\"enum\" href=\"fedimint_core/enum.ParseAmountError.html\" title=\"enum fedimint_core::ParseAmountError\">ParseAmountError</a>"],["impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/collections/btree/map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree::map::BTreeMap\">BTreeMap</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>, M, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"fedimint_core/module/registry/struct.ModuleRegistry.html\" title=\"struct fedimint_core::module::registry::ModuleRegistry\">ModuleRegistry</a>&lt;M&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"fedimint_core/core/struct.DynDecoder.html\" title=\"struct fedimint_core::core::DynDecoder\">DynDecoder</a><span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"fedimint_core/core/trait.Decoder.html\" title=\"trait fedimint_core::core::Decoder\">Decoder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"fedimint_core/api/enum.MemberError.html\" title=\"enum fedimint_core::api::MemberError\">MemberError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_core/struct.TransactionId.html\" title=\"struct fedimint_core::TransactionId\">TransactionId</a>&gt; for Sha256"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fedimint_core/enum.CoreError.html\" title=\"enum fedimint_core::CoreError\">CoreError</a>&gt; for <a class=\"enum\" href=\"fedimint_core/api/enum.OutputOutcomeError.html\" title=\"enum fedimint_core::api::OutputOutcomeError\">OutputOutcomeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_core/api/struct.FederationError.html\" title=\"struct fedimint_core::api::FederationError\">FederationError</a>&gt; for <a class=\"enum\" href=\"fedimint_core/api/enum.OutputOutcomeError.html\" title=\"enum fedimint_core::api::OutputOutcomeError\">OutputOutcomeError</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_core/module/struct.DynModuleGen.html\" title=\"struct fedimint_core::module::DynModuleGen\">DynModuleGen</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_core/module/trait.IModuleGen.html\" title=\"trait fedimint_core::module::IModuleGen\">IModuleGen</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.69/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"fedimint_core/module/enum.ModuleError.html\" title=\"enum fedimint_core::module::ModuleError\">ModuleError</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_core/core/server/struct.DynVerificationCache.html\" title=\"struct fedimint_core::core::server::DynVerificationCache\">DynVerificationCache</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"fedimint_core/core/server/trait.IVerificationCache.html\" title=\"trait fedimint_core::core::server::IVerificationCache\">IVerificationCache</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"]],
"fedimint_ln":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_ln/contracts/struct.ContractId.html\" title=\"struct fedimint_ln::contracts::ContractId\">ContractId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_ln/contracts/incoming/struct.OfferId.html\" title=\"struct fedimint_ln::contracts::incoming::OfferId\">OfferId</a>&gt; for Sha256"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_ln/contracts/struct.ContractId.html\" title=\"struct fedimint_ln::contracts::ContractId\">ContractId</a>&gt; for Sha256"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_ln/contracts/incoming/struct.OfferId.html\" title=\"struct fedimint_ln::contracts::incoming::OfferId\">OfferId</a>"]],
"fedimint_mint":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;InvalidAmountTierError&gt; for <a class=\"enum\" href=\"fedimint_mint/enum.MintError.html\" title=\"enum fedimint_mint::MintError\">MintError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_mint/struct.MintOutput.html\" title=\"struct fedimint_mint::MintOutput\">MintOutput</a>&gt; for TieredMulti&lt;<a class=\"struct\" href=\"fedimint_mint/struct.BlindNonce.html\" title=\"struct fedimint_mint::BlindNonce\">BlindNonce</a>&gt;"]],
"fedimint_rocksdb":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;DBCommon&lt;SingleThreaded, OptimisticTransactionDBInner&gt;&gt; for <a class=\"struct\" href=\"fedimint_rocksdb/struct.RocksDb.html\" title=\"struct fedimint_rocksdb::RocksDb\">RocksDb</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_rocksdb/struct.RocksDb.html\" title=\"struct fedimint_rocksdb::RocksDb\">RocksDb</a>&gt; for OptimisticTransactionDB"]],
"fedimint_server":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fedimint_server/transaction/enum.TransactionError.html\" title=\"enum fedimint_server::transaction::TransactionError\">TransactionError</a>&gt; for <a class=\"enum\" href=\"fedimint_server/consensus/enum.TransactionSubmissionError.html\" title=\"enum fedimint_server::consensus::TransactionSubmissionError\">TransactionSubmissionError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_server/epoch/struct.EpochOutcome.html\" title=\"struct fedimint_server::epoch::EpochOutcome\">EpochOutcome</a>&gt; for <a class=\"struct\" href=\"fedimint_server/consensus/struct.ConsensusOutcomeConversion.html\" title=\"struct fedimint_server::consensus::ConsensusOutcomeConversion\">ConsensusOutcomeConversion</a>"]],
"fedimint_wallet":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.69/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"fedimint_wallet/enum.WalletError.html\" title=\"enum fedimint_wallet::WalletError\">WalletError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fedimint_wallet/txoproof/enum.PegInProofError.html\" title=\"enum fedimint_wallet::txoproof::PegInProofError\">PegInProofError</a>&gt; for <a class=\"enum\" href=\"fedimint_wallet/enum.WalletError.html\" title=\"enum fedimint_wallet::WalletError\">WalletError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_wallet/keys/struct.CompressedPublicKey.html\" title=\"struct fedimint_wallet::keys::CompressedPublicKey\">CompressedPublicKey</a>&gt; for PublicKey"]],
"fedimintd":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.69/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"struct\" href=\"fedimintd/ui/struct.UIError.html\" title=\"struct fedimintd::ui::UIError\">UIError</a>"]],
"gateway_cln_extension":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.69/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"gateway_cln_extension/enum.ClnExtensionError.html\" title=\"enum gateway_cln_extension::ClnExtensionError\">ClnExtensionError</a>"]],
"ln_gateway":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.69/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.LnGatewayError.html\" title=\"enum ln_gateway::LnGatewayError\">LnGatewayError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.LnGatewayError.html\" title=\"enum ln_gateway::LnGatewayError\">LnGatewayError</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"ln_gateway/gatewayd/lnrpc_client/struct.DynLnRpcClient.html\" title=\"struct ln_gateway::gatewayd::lnrpc_client::DynLnRpcClient\">DynLnRpcClient</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"ln_gateway/gatewayd/lnrpc_client/trait.ILnRpcClient.html\" title=\"trait ln_gateway::gatewayd::lnrpc_client::ILnRpcClient\">ILnRpcClient</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"ln_gateway/client/struct.DynDbFactory.html\" title=\"struct ln_gateway::client::DynDbFactory\">DynDbFactory</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"ln_gateway/client/trait.IDbFactory.html\" title=\"trait ln_gateway::client::IDbFactory\">IDbFactory</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"ln_gateway/client/struct.DynGatewayClientBuilder.html\" title=\"struct ln_gateway::client::DynGatewayClientBuilder\">DynGatewayClientBuilder</a><span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"ln_gateway/client/trait.IGatewayClientBuilder.html\" title=\"trait ln_gateway::client::IGatewayClientBuilder\">IGatewayClientBuilder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.LnGatewayError.html\" title=\"enum ln_gateway::LnGatewayError\">LnGatewayError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tonic/0.8.3/tonic/status/struct.Status.html\" title=\"struct tonic::status::Status\">Status</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.LnGatewayError.html\" title=\"enum ln_gateway::LnGatewayError\">LnGatewayError</a>"]],
"mint_client":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/wallet/enum.WalletClientError.html\" title=\"enum mint_client::wallet::WalletClientError\">WalletClientError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/ln/enum.LnClientError.html\" title=\"enum mint_client::ln::LnClientError\">LnClientError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;OutputOutcomeError&gt; for <a class=\"enum\" href=\"mint_client/wallet/enum.WalletClientError.html\" title=\"enum mint_client::wallet::WalletClientError\">WalletClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;MemberError&gt; for <a class=\"enum\" href=\"mint_client/wallet/enum.WalletClientError.html\" title=\"enum mint_client::wallet::WalletClientError\">WalletClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;OutputOutcomeError&gt; for <a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;InvalidAmountTierError&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;FederationError&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;DynOutputOutcome&gt; for <a class=\"enum\" href=\"mint_client/outcome/legacy/enum.OutputOutcome.html\" title=\"enum mint_client::outcome::legacy::OutputOutcome\">OutputOutcome</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/mint/enum.NoteFinalizationError.html\" title=\"enum mint_client::mint::NoteFinalizationError\">NoteFinalizationError</a>&gt; for <a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/reqwest/0.11.13/reqwest/error/struct.Error.html\" title=\"struct reqwest::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;InvalidAmountTierError&gt; for <a class=\"enum\" href=\"mint_client/mint/enum.NoteFinalizationError.html\" title=\"enum mint_client::mint::NoteFinalizationError\">NoteFinalizationError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;OutputOutcomeError&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;MemberError&gt; for <a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;CreationError&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()