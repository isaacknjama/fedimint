use std::{ffi, iter};

use clap::Parser;
use fedimint_api_client::api::FederationApiExt;
use fedimint_core::module::ApiRequestErased;
use fedimint_core::util::SafeUrl;
use fedimint_core::PeerId;
use fedimint_lnv2_common::endpoint_constants::{
    ADD_GATEWAY_ENDPOINT, GATEWAYS_ENDPOINT, REMOVE_GATEWAY_ENDPOINT,
};
use serde::Serialize;

use crate::api::LnFederationApi;
use crate::LightningClientModule;

#[derive(Parser, Serialize)]
enum Opts {
    /// Fetch vetted gateways
    Gateways { peer: Option<PeerId> },
    /// Add a vetted gateway
    AddGateway { gateway: SafeUrl },
    /// Remove a vetted gateway
    RemoveGateway { gateway: SafeUrl },
}

pub(crate) async fn handle_cli_command(
    lightning: &LightningClientModule,
    args: &[ffi::OsString],
) -> anyhow::Result<serde_json::Value> {
    let opts = Opts::parse_from(iter::once(&ffi::OsString::from("lnv2")).chain(args.iter()));

    match opts {
        Opts::Gateways { peer } => {
            let gateways = match peer {
                Some(peer) => {
                    lightning
                        .module_api
                        .request_single_peer_typed::<Vec<SafeUrl>>(
                            None,
                            GATEWAYS_ENDPOINT.to_string(),
                            ApiRequestErased::default(),
                            peer,
                        )
                        .await?
                }
                None => lightning.module_api.fetch_gateways().await?,
            };

            Ok(serde_json::to_value(gateways).expect("JSON serialization failed"))
        }
        Opts::AddGateway { gateway } => {
            let auth = lightning
                .admin_auth
                .clone()
                .ok_or(anyhow::anyhow!("Admin auth not set"))?;

            let is_new_entry: bool = lightning
                .module_api
                .request_admin(ADD_GATEWAY_ENDPOINT, ApiRequestErased::new(gateway), auth)
                .await?;

            Ok(serde_json::to_value(is_new_entry).expect("JSON serialization failed"))
        }
        Opts::RemoveGateway { gateway } => {
            let auth = lightning
                .admin_auth
                .clone()
                .ok_or(anyhow::anyhow!("Admin auth not set"))?;

            let entry_existed: bool = lightning
                .module_api
                .request_admin(
                    REMOVE_GATEWAY_ENDPOINT,
                    ApiRequestErased::new(gateway),
                    auth,
                )
                .await?;

            Ok(serde_json::to_value(entry_existed).expect("JSON serialization failed"))
        }
    }
}
